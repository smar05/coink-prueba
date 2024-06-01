# Proyecto Desarrollador Ionic - Angular

Este proyecto fue desarrollado con Ionic v7.2.0, Angular 17 y Node.js 20.0.0.

## Descripción

La aplicación simula un registro exitoso en Coink utilizando la API proporcionada.

## Instalación y Configuración

1. Clona este repositorio.
2. Instala las dependencias: `npm install`
3. Inicia el servidor de desarrollo: `npm run start`

### Producción

Para compilar el proyecto para producción, ejecutar:
`npm run build`

## Acceso a la Aplicación Web

La versión web de la aplicación se encuentra disponible en: (`https://665aaedac9ce7af026fe7a06--vermillion-sunburst-0172e6.netlify.app/`)

## Generación del APK

Para generar el archivo .apk, seguir los siguientes pasos:

1. Ejecutar el comando:
   `ionic build`

2. Copiar los archivos al proyecto Android:
   `ionic capacitor copy android`

3. Navegar a la carpeta Android y abrir en Android Studio.
4. Ejecutar la aplicación generada en Android Studio.
5. Para obtener el .apk, ejecutar:
   `.\gradlew assembleDebug`

6. El archivo .apk generado estará en la carpeta `android/app/build/outputs/apk/debug/`.

## Contacto

Si tienes alguna pregunta o comentario sobre este proyecto, no dudes en contactarme:

- Nombre: Ricardo Mantilla
- Correo electrónico: mantillasanchezr@gmail.com
