import React from "react";

  

const Pagination = ({next,previous,onPrevious, onNext}) =>{

  // ESTA FUNCTION SE EJECUTA CON EL BOTON 'ANTERIOR' Y EJECUTA LA FUNCTION ONPREVIOUS()
  const handlePrevious = () =>{
  console.log("hola soy previous")
  
  onPrevious()
 
  }
 // ESTA FUNCTION SE EJECUTA CON EL BOTON 'SIGUIENTE' Y EJECUTA LA FUNCTION ONNEXT()
  const handleNext =() => {
    console.log("hola soy Next")
    onNext()
  }


  return(
    <div>
    {previous ? ( // PREGUNTAMOS SI EN PREVIOUS HAY ALGO... SI HAY ALGO SE MUESTRA EL BOTON... SI NO HAY NADA NO SE MUESTRA  
      <button onClick={handlePrevious}>Anterior 
    </button> 
    ):null}
    {next ? (
      <button onClick={handleNext}>Siguiente</button>
    ):null}
    </div>
  )


}



export default Pagination
