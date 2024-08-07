interface Props{/*se declara la estructura de la propiedad */
  body: string;
}
function Card(props: Props){/*argumentos q recibe la funcion, NombrePropiedad: tipoPropiedad */
  const {body}=props;
  return (
  <>
    <h1>{body}</h1>
  </>);
}

export default Card;
