import React, { useState } from 'react';
import styles from "./BotonFormulario.module.css"

const BotonFormulario = (props) => {

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const estiloHober = isHovered ? props.estiloCorBotonHover : props.styleCorBoton;

  return(
    <button className={styles.button} 
            type={props.type} 
            style={estiloHober} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
            onClick={props.Resetear}>
      {props.nombre}
    </button>
  )
}

export default BotonFormulario