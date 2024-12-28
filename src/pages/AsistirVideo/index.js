import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './AsistirVideo.module.css';

const transformarUrlEmbed = (url) => {
  const videoId = url.split('v=')[1]; // Extraer el ID del video
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return url; // Si no encuentra el ID, retorna la URL original
};

const AsistirVideo = () => {
  const { id } = useParams()
  const [asistirVideo, setAsistirVideo] = useState(null)

  useEffect(() => {
    fetch(`http://192.168.1.4:3001/videos/${id}`)                            
      .then(respuesta => {
        console.log("Respuesta de la API:", respuesta);
        
      return respuesta.json();})
      .then(dados => {
        console.log("Datos recibidos:", dados);
        setAsistirVideo(dados);
        
      })
      .catch(error => console.error('Error al buscar el video:', error));
  }, [id]);

  return (
    <>
      {asistirVideo ? (
        <section className={styles.container}>
          <h1>{asistirVideo.titulo}</h1>
          <div className={styles.iframeContainer}>
            <iframe
              width="100%"
              height="100%"
              src={transformarUrlEmbed(asistirVideo.link)}
              title={asistirVideo.titulo}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      ) : (
        <p>Cargando el video...</p> 
      )}
    </>
  );
}

export default AsistirVideo;