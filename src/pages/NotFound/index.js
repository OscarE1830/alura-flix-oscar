import styles from './NotFound.module.css'
import notFoundImg from './not-found404.png'

const NotFound = () => {
  return (
    <img className={styles.img} src={notFoundImg} alt='Imagem de página no encontrada'/>
  )
}

export default NotFound