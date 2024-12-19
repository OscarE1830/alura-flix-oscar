import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import logo from "./logo.png"

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Link  to={"/"}><img src={logo} alt="Logo da AluraFlix" /></Link>
      <div className={styles.linkContainer}>
        <Link to={"/"}  className={styles.headerLink}>HOME</Link>
        <Link to={"/NuevoVideo"}  className={styles.headerLink}>NUEVO VIDEO</Link>
      </div>
    </div >

  )
}

export default Header