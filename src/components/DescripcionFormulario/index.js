import styles from "./DescripcionFormulario.module.css"

const DescripcionFormulario = (props) => {
  return(
    <div className={styles.gContainer}>
      <label style={props.estiloCorLabel}>
        {props.label}
      </label>
      <textarea rows="10" 
                value={props.valor} 
                required={props.obligatorio} 
                placeholder={props.placeholder} 
                onChange={evento => props.Alterado(evento.target.value)} 
                style={props.estiloCorCampoDescripcionFormulario}>
      </textarea>
    </div>
  )
}

export default DescripcionFormulario