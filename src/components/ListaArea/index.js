import styles from "./ListaArea.module.css"

const ListaArea = (props) => {
  return(
    <div className={styles.gContainer}>
      <label style={props.estiloCorLabel}>
        {props.label}
      </label>
      <select width={props.widthLSArea} 
              required={props.obligatorio} 
              value={props.valor} 
              onChange={evento => props.Alterado(evento.target.value)} 
              style={props.estiloCorCampo}>
      <option value="" className={styles.placeholderOption}>Seleccione una categoria</option>
        {props.items.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
}

export default ListaArea