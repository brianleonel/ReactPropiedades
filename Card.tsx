interface Props{/*se declara la estructura de la propiedad */
  body: string;
}
function Card(props: Props){/*argumentos q recibe la funcion, NombrePropiedad: tipoPropiedad */
  /*props se define como una interfaz con la estructura de Props*/
  const {body}=props;// se hace una desestructuracion, se asigna props a body
  return (
  <>
    <h1>{body}</h1>
  </>);
}

export default Card;
