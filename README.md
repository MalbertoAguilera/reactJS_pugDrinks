## **Pug-Drinks**

Pug-Drinks es un e-commerce para la venta de bebidas Utiliza el servicio Firebase de Google para acceder a una base de datos que proporcione el stock de productos de la tienda

Cuenta con:

- filtro por categorías: 
  - consulta la categoría de bebidas en la base de datos se generan filtros de productos
- carrito: cuenta vista completa de los items del carrito, su total, y la opción de quitar un producto del carrito o vaciar el mismo
  - En el caso de tener items en el carrito, se realiza montaje de un cart widget en el cual figura un contador que informa la cantidad total presente en el mismo
  - Caso contrario (vaciar el carrito) redirige al usuario a una vista donde se lo invita a agregar productos para continuar con la compra
- vistas de listas de productos: 
  - Vista general de productos con foto y detalles mínimos
- vista de detalles: 
  - vista con todos los detalles del producto y la opción de agregar una determinada cantidad del mismo
- Pagina 404
  - En caso de intentar acceder a campos invalidos o inexistentes de la URL

- Doble control de stock: 
  - verifica que los usuarios no puedan agregar más items al carrito de los que hay disponibles en la base de datos
  - luego verifica el stock nuevamente al momento de generar la orden de compra
- Finalizada la compra se emite un identificador que es proporcionado por firebase. El mismo ID es la referencia del objeto generado en la base de datos la cual contiene:
  - Datos del comprador
    - Nombre y apellido
    - Telefono
    - E-mail
  - Datos del carrito:
    - items (con sus respectivas cantidades por producto y precio unitario)
    - Total a pagar



## Dependencias

- Bootstrap para dar formato a la aplicación
- Node-Sass para aplicar estilo a los componentes
- React Router Dom para la navegación (react-router-bootstrap para encapsular en un componente  <LinkContainer> elementos de bootstrap. Es analogo a LINK )
- Sweetalert2 para generar ventanas emergentes en caso de que la orden de compra se realicé con exito, y en el caso contrario, que notifiqué al usuario de los productos faltantes de stock 
- React icons 
- Firebase



**Extra**

Se implemento env.local para encriptar los datos personales de firebase.  Igualmente para esta entrega se dejaron las credenciales del proyecto y se comentaron las lineas de código que hacen uso del env.local



### Autor

Aguilera Matias Alberto

2021 - Curso de React JS en CoderHouse

