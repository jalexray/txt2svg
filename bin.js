#!/usr/bin/env node
const argv = require('minimist')(process.argv.slice(2));
const txt2svg = require('./txt2svg');

if(argv['available-fonts']) {
    console.log(JSON.stringify(txt2svg.availableFonts()));
} else {
    if(argv['font-name'] && argv['font-version']) {
        txt2svg.getFont(argv['font-url'], argv['font-name'], argv['font-version']).then(fontHash => {
            let rs = txt2svg.getSVG(argv.text, fontHash, argv.width, argv.height, argv['font-height'] || 50, argv['line-spacing'] || 2, argv['merge-path']);
            if(argv.output === 'object') {
                console.log(JSON.stringify({
                    svg: rs,
                    font: {
                        name: argv['font-name'],
                        version: argv['font-version'],
                        url: argv['font-url']
                    }
                }));
            } else {
                console.log(rs);
            }
        }).catch(error => {
            console.error(error);
        });
    } else {
        console.error('font-name or font-versión not defined');
    }
}
