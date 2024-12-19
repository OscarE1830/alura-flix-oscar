import { useEffect, useState } from "react"
import CampoTexto from "../../components/CampoTexto"
import DescripcionFormulario from "../../components/DescripcionFormulario"
import ListaArea from "../../components/ListaArea"
import styles from "./NuevoVideo.module.css"
import BotonFormulario from "../../components/BotonFormulario"
import { useNavigate } from "react-router-dom"; 

const NuevoVideo = () => {
  const [tituloPost, setTituloPost] = useState()
  const [areaPost, setAreaPost] = useState()
  const [imagenPost, setImagenPost] = useState()
  const [videoPost, setVideoPost] = useState()
  const [descripcionPost, setDescripcionPost] = useState()

  async function nuevoVideoPost(area, imagen, titulo, descripcion, link) {
    try {
      const videoPostApi = await fetch('http://localhost:3001/videos', {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          area: area,
          imagen: imagen,
          titulo: titulo,
          descripcion: descripcion,
          link: link
        })

      })

      if (!videoPostApi.ok) {
        throw new Error('No fue posible agregar un nuevo video')
      }

      const videoPostApiConvertido = await videoPostApi.json()
      return videoPostApiConvertido
    } catch (error) {
      console.log(error);
    }
  }

  const navigate = useNavigate();
  
  const Guardar = async (evento) => {
    evento.preventDefault()
    try{
        await nuevoVideoPost(areaPost, imagenPost, tituloPost, descripcionPost, videoPost)
        setAreaPost('')
        setImagenPost('')
        setTituloPost('')
        setDescripcionPost('')
        setVideoPost('')
        alert("El video se guardó con éxito")
        navigate("/");
  }catch (error) {
    console.error("Error al guardar el video:", error);
    alert("Hubo un error al guardar el video. Inténtalo de nuevo.");
  }
};

  const categoria = [
    "frontend",
    "backend",
    "innovacion y gestion"
  ]

  return (
    <div className={styles.gContainer}>
      <section className={styles.gContainerTitulo}>
        <h1>NUEVO VIDEO</h1>
        <p>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA CARD DE VIDEO</p>
      </section>
      <section className={styles.gContainerForm}>
        <h2>Crear Card</h2>
        <form onSubmit={Guardar}>
          <div>
            <CampoTexto
              label="Título"
              placeholder="Digite un título"
              valor={tituloPost}
              obligatorio={true}
              Alterado={valor => setTituloPost(valor)} 
            />

            <ListaArea
              label="Categoría"
              items={categoria}
              valor={areaPost}
              obligatorio={true}
              Alterado={valor => setAreaPost(valor)}
            />
          </div>
          <div>
            <CampoTexto
              label="Imágen"
              placeholder="Digite link de la imágen"
              valor={imagenPost}
              obligatorio={true}
              Alterado={valor => setImagenPost(valor)} 
            />

            <CampoTexto
              label="Video"
              placeholder="Digite link del video"
              valor={videoPost}
              obligatorio={true}
              Alterado={valor => setVideoPost(valor)} 
            />
          </div>
          <DescripcionFormulario
            label="Descripción"
            placeholder="Sobre qué es el video?"
            valor={descripcionPost}
            obligatorio={true}
            Alterado={valor => setDescripcionPost(valor)}
          />
          <div>
            <BotonFormulario type="submit" nombre="guardar"></BotonFormulario>
            <BotonFormulario type="reset" nombre="limpar"></BotonFormulario>
          </div>
        </form>
      </section>
    </div>
  )
}

export default NuevoVideo;