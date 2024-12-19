import styles from './CardVideo.module.css'
import eliminarBtn from './eliminar.png'
import editarBtn from './editar.png'
import { Link } from 'react-router-dom'
import { useState } from 'react';



const CardVideo = ({video, eliminar, VideoSeleccionado, videoBorderColor, btnColor}) => {
  

  const handleDelete = async (id) => {
    console.log("ID a eliminar: ", id); // Solo para depuración
  
    try {
      const response = await fetch(`http://localhost:3001/videos/${id}`, {
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
    <div className={styles.gcontainer} >
        <Link to={`video/${video.id}`}>
          <div className={styles.imgContainer} style={{borderColor:videoBorderColor, boxShadow: `inset 0px -4px 5px 3px ${videoBorderColor}`}} >
            <img src={video.imagen} alt={video.area} />
          </div>
        </Link>
        <div className={styles.btnContainer} style={{borderColor: btnColor}} >
          <button className={styles.btn} onClick={() => handleDelete(video.id)} aria-label="Eliminar video"><img src={eliminarBtn} alt='Botón de eliminar'/>ELIMINAR</button>
          <button className={styles.btn} onClick={() => desplazarYSeleccionarVideo(video)} aria-label="Editar video"><img src={editarBtn} alt='Botón de editar'/>EDITAR</button>
        </div>
    </div>
  )
}

export default CardVideo