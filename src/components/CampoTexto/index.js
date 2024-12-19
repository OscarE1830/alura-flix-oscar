import styles from './CampoTexto.module.css'

const CampoTexto = (props) => {

  const Digitado = (evento) => {
    props.Alterado(evento.target.value)
  }

  return(
    <div className={styles.gContainer} style={props.withCampoTexto}>
      <label style={props.estiloCorLabel}>{props.label}</label>
      <input type={props.type} placeholder={props.placeholder} required={props.obligatorio} value={props.valor} onChange={Digitado} style={props.estiloCorCampo}/>
    </div>
  )
}

export default CampoTexto