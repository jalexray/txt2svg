### Instalación
Después de instalar las dependencias se ejecutará automáticamente la obtención de las fuentes que están en el archivo **fonts.json**

- Si se requieren otras fuentes solo basta con agregarlas al archivo **fonts.json** y ejecutar:
```bash
npm run update-fonts
```

### Uso
- Ejecutar:
```bash
node bin.js --width 305 --height 305 --text $'Feliz\ncumpleaños\nmamá' --font 1
or
txt2svg --width 305 --height 305 --text $'Feliz\ncumpleaños\nmamá' --font 1
```
- Cada salto de línea será una línea como tal en el svg

### Argumentos

Argumento | Default
-- | --
text | **Requerido**
font | 0
width | -
height | -
merge-path | false
