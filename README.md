# Aplicación de vistas ION - technicalTestION
Este proyecto esta desarrollado con react native, con la finalidad de implementar las vistas compartidas por el equipo de ION.

Dicho proyecto esta creado mediante React Native CLI
Se trabajo con el IDE: Visual Studio Code, bajo la versión de react 18.

# Instrucciones
Para iniciar, con la implementación de dicho proyecto, debemos clonar el repositorio de Git.
Una vez clonado, ejecutamos el comando de instalación de librerías que sería npm install o yarn install.
Una vez que se instalaron los paquetes utilizados, debemos correr desde la ruta del proyecto el comando para iniciar la ejecución del proyecto de manera local, que sería mediante la consola: npm start, una vez que se esta ejecutando, en otra terminal o ventana de esta, debemos ejecutar el comando npm run android o npm run ios dependiendo el emulador o dispositivo movil que estaremos utilizando.

# Detalles del proyecto
* Navegación: para el tema de la navegación entre las vistas se trabajo con react-navigation(native-stack y material-bottom-tabs) los cuales presentan Nested de las diferentes navegaciones que se trabajaron.
* Se cuenta con una vista principal : HomeScreen la cual presenta todos los componentes que se indicaron en el diseño que se nos compartio, para el tema de los iconos se trabajo con react-native-vector-icons y se implementaron los más similares al diseño.
  * Se crearon componentes dinámicos para la parte del Header, Botones, Inputs y Listados (FlatList) los cuales obtienen las propiedades de sus componentes o vistas padre.
Para el tema de la información que se muestra en las vistas, se trabajo con un JSON object.
  * Se generaro un hook para el formateo de los textos de moneda, así como un hook para la gestión de los inputs.

* Vista detallada de movimientos: HomeDetailScreen la cual nos sire para ver el detalle del movimiento que se elija y nos permitira ver información más detallada del mismo.

* Vista nueva disposición: RequestDetailScreen la cual permite capturar nuevas disposiciones y hacer un cálculo del mismo en un plazo especificado. Nota: Al dar clic en Lo quiero solo imprime en consola, los datos que se ingresaron en los inputs y el cálculo realizado, ya que no se generaron o usaron servicios RestAPI.

# Notas
El proyecto esta optimizado para dispositivos android y se está trabajando en ajustes pendientes de IOs.




# Documentación generada automáticamente #

# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**
If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting
This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size
This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App
This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration
This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment
This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify
This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
