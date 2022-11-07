# Trophy Deportes app E-commerce
![](https://trophy.com.ar/imagenes/footer/logonuevochico.png)

### Recursos
- Desarrollamos toda la app con [ Reac Js ](https://es.reactjs.org/)
- [Firebase](https://firebase.google.com/) para almacenamiento de los productos, visualización de las categorías y almacenamiento de los pedidos
- [Toastify](https://fkhadra.github.io/react-toastify/introduction) para mostrar mensajes que informen al usuario de lo ocurrido, ya sea cuando agrega un producto al carrito, envio del pedido y si no coincide el mail en el checkout
-  [React Router](https://reactrouter.com/en/main) , para la navegación entre los distintas páginas del sitio
-  [Sync Loader](https://www.npmjs.com/package/sync-loader) , para mostrar nuestro cargando

### Iniciar el proyecto de manera local

1- descargar el proyecto desde git (git clone) https://github.com/martinarg/preEntregaTemoinko2


2-abrir la terminal pararte en la carpeta preentregatemoinko2  y ubicarte en la carpeta del proyecto, escribir en la terminal 

` npm i`

asi se instalan todas las librerías necesarias para el proyecto,

3- Por último, iniciamos el proyecto con poniendo en nuestra terminal:

` npm start`

De esta manera su proyecto se inicia localmente

### Funcionalidades

#### Header
- Dispones de las distintas categorías para filtrar los productos y si haces click en Trophy Deportes te muestra todos los productos.

#### En vista del producto
- vas a poder ver el producto con sus caracteristicas y seleccionar la cantidad deseada la cual tiene un limitador por el stock disponible.

#### Carro
- vas a poder ver ver todos los productos que se agregaron, si deseas podes eliminar algun elemento o vaciar el carro

#### Checkout
- El usuario cargará sus datos personales nombre, mail , telefono y al hacer click en enviar, su pedido será almacenado en firebase y al usuario le mostrará su Id del pedido

- El usuario deberá escribir dos veces su email para asegurarnos de tenerlo bien, en caso que no coincidan se le mostrá un cartel de warning


### Fin 