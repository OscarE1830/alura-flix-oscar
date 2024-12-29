import styles from './CardVideo.module.css'
import eliminarBtn from './eliminar.png'
import editarBtn from './editar.png'
import { Link } from 'react-router-dom'
//import { useState } from 'react'; sistema detecta importacion no usada


const CardVideo = ({video, eliminar, VideoSeleccionado, videoBorderColor, btnColor}) => {
  

  const handleDelete = async (id) => {
    console.log("ID a eliminar: ", id); // Solo para depuración
  
    try {
      const response = await fetch(`https://alura-flix-oscar.vercel.app/videos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error al eliminar el video con ID: ${id}`)
      }
  
      alert("Video eliminado con éxito")
      eliminar(id)

    } catch (error) {
      console.error("Error al eliminar el video: ", error.message);
      alert("Error al eliminar el video. Inténtalo de nuevo.");
    }
  };
  
  const desplazarYSeleccionarVideo = (video) => {
    VideoSeleccionado(video);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.gcontainer}>
      <div className={styles.imgContainer} style={{borderColor:videoBorderColor}}>
          <Link to={`video/${video.id}`}>
              <img src={video.imagen} alt={video.area} style={{borderColor:videoBorderColor}} className={styles.imgCard}/>
          </Link>
      <div className={styles.btnContainer} style={{borderColor: btnColor}}>
        <div className={styles.btn} onClick={() => handleDelete(video.id)} aria-label="Eliminar video"><img src={eliminarBtn} alt='Botón de eliminar'/>ELIMINAR</div>
        <div className={styles.btn} onClick={() => desplazarYSeleccionarVideo(video)} aria-label="Editar video"><img src={editarBtn} alt='Botón de editar'/>EDITAR</div>
      </div>
      </div>
    </div>
  )
}

export default CardVideo