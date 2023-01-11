import React from "react";

export const About = () =>(
  <div>
  <h1>Prueba proceso de Selección Desarrollador Full Stack</h1>
  <p>Hola, ¡Felicidades por haber llegado hasta aquí y gracias por dedicar parte de tu
tiempo para poder conocer tu talento! <br/>
La siguiente fase del proceso de selección consiste en realizar una prueba técnica,
es una forma para evaluar inicialmente. Con esto tendremos una herramienta
para poder calificar el conocimiento de los candidatos.
La prueba consiste en lo siguiente: <br/>
1. Backend
<br/>
Desplegar una API en Flask o Django que contenga el modelo de persona, con las
siguientes propiedades. Crear una migración e implementarla en el motor de
base de datos que mejor se acomode el desarrollador: <br/>
1. Tipo documento
<br/>
2. Documento
<br/>
3. Nombres
<br/>
4. Apellidos
<br/>
5. Hobbie
<br/>
2. Frontend
<br/>
El candidato deberá crear una aplicación basada en create-react-app, react-router
Redux, Ant Design/MaterialUI y Axios que consuma la API desarrollada en el
backend (Python Flask/Django):
<br/>
La aplicación debe cumplir con los siguientes requisitos:
1. Listar en una tabla todas las personas que se traen desde la API.
2. La tabla debe tener las acciones de ver, agregar, editar y eliminar personas.
3. La funcionalidad de la aplicación debe permitir el CRUD completo
consumiendo la API.
4. Se deben mostrar los mensajes (error, satisfactorio) que devuelve la API en un
componente de notificaciones.
5. La aplicación debe estar en un repositorio público de Github y además debería
estar desplegada. (puedes desplegarla en heroku, esta plataforma te deja
acceder en una versión gratuita)
6. Se debe enviar el link del repositorio y el link de donde esté desplegada la
aplicación.</p>
  </div>
)
