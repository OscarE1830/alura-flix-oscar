import styles from "./Footer.module.css"
import logo from "./../Header/logo.png"
import agregarInactivo from "./agregarInactivo.png"
import agregarActivo from "./agregarActivo.png"
import homeInactivo from "./homeInactivo.png"
import homeActivo from "./homeActivo.png"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <img src={logo} alt="Logo Alura Latam" className={styles.logo}/>
      <Link to={"/"} className={styles.homeContainer}>
        <img src={homeActivo} className={styles.homeAct} alt="Icono Home" />
        <img src={homeInactivo} className={styles.homeInact} alt="Icono Home" />
          <p className={styles.nameHome}>HOME</p>
      </Link>
      <Link to={"/NuevoVideo"} className={styles.iconContainer}>
        <img src={agregarInactivo} alt="Icono Agregar" className={styles.agregarInact}/>
        <img src={agregarActivo} alt="Icono Agregar" className={styles.agregarAct}/>
      </Link>
      <p>Desarrollado por Oscar Andrade</p>
    </footer>
  )
}

export default Footer