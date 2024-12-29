import { useEffect, useState } from "react"
import CampoTexto from "../CampoTexto"
import BotonFormulario from "../BotonFormulario"
import DescripcionFormulario from "../DescripcionFormulario"
import ListaArea from "../ListaArea"
import styles from "./ModalEditarVideo.module.css"
import botonCerrar from "./cancel.png"

const ModalEditarVideo = ({ video, cerrar, actualizar }) => {

  const [tituloPut, setTituloPut] = useState("")
  const [areaPut, setAreaPut] = useState("")
  const [descripcionPut, setDescripcionPut] = useState("")
  const [imagenPut, setImagenPut] = useState("")
  const [videoPut, setVideoPut] = useState("")

  useEffect(() => {
    if (video) {
      setTituloPut(video.titulo);
      setAreaPut(video.area);
      setDescripcionPut(video.descripcion);
      setImagenPut(video.imagen);
      setVideoPut(video.link);
    }
  }, [video]);

  const categoria = [
    "frontend",
    "backend",
    "innovacion y gestion"
  ]

  const styleLabel = {
    "color": "#fff",
    "fontSize": "20px"
  }

  const styleColorCampo = {
    "border": "2px solid #2271D1",
    "backgroundColor": "#03122f"
  }

  const styleWidthDescripcionFormulario = {
    "maxWidth": "674px",
  }

  const styleCorBoton = {
    "border": "2px solid #fff",
    "background": "#03122f"
  }

  const styleCorBotonHover = {
    "border": "2px solid #2271D1",
    "boxShadow": "inset 0px 0px 12px 4px #2271D1",
    "background": "#000"
  }

  const estiloCorCampoDescripcionFormulario = {
    ...styleColorCampo, ...styleWidthDescripcionFormulario
  }

  async function actualizarVideoPut(id, area, imagen, titulo, descripcion, link) {
    let videoPutApi
    videoPutApi = await fetch(`https://my-json-server.typicode.com/OscarE1830/alura-flix-api/videos/${id}`, {
      method: "PUT",
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
    if (!videoPutApi.ok) {
      throw new Error('No fue posible actualizar el card video')
    }

    const videoPutApiConvertido = await videoPutApi.json()
    return videoPutApiConvertido
  }

  const validarFormulario = () => {
    if (!tituloPut || !areaPut || !imagenPut || !descripcionPut || !videoPut) {
      alert("Todos los campos son obligatorios.");
      return false;
    }
    return true;
  };
  

  const [loading, setLoading] = useState(false);

  const Guardar = async (evento) => {
    evento.preventDefault()
    if (!validarFormulario()) return;

    setLoading(true)
    try{
        const videoActualizado = await actualizarVideoPut(video.id, areaPut, imagenPut, tituloPut, descripcionPut, videoPut)
        Limpiar();
        actualizar(videoActualizado);
        alert("El video se guardó con éxito")
  }catch (error) {
    console.error("Error al actualizar el video:", error)
    alert("No fue posible guardar el video. Inténtalo de nuevo.")
  }finally {
    setLoading(false);
  }
};

const Limpiar = () => {
  setTituloPut(video?.titulo || '');
  setAreaPut(video?.area || '');
  setDescripcionPut(video?.descripcion || '');
  setImagenPut(video?.imagen || '');
  setVideoPut(video?.link || '');
};


  return (
    <>
      {video && <> <div className={styles.overlay}></div>
        <dialog open={!!video} onClose={cerrar} className={styles.dialog}>
          <h1>Editar Card:</h1>
          <form onSubmit={Guardar}>
            <CampoTexto
              label="Título"
              placeholder="Digite un título"
              valor={tituloPut}
              obligatorio={true}
              Alterado={valor => setTituloPut(valor)}
              estiloCorCampo={styleColorCampo}
              estiloCorLabel={styleLabel}
            />

            <ListaArea
              label="Categoría"
              items={categoria}
              valor={areaPut}
              obligatorio={true}
              Alterado={valor => setAreaPut(valor)}
              estiloCorCampo={styleColorCampo}
              estiloCorLabel={styleLabel}
            />
            <CampoTexto
              label="Imágen"
              placeholder="Digite el link de la imágen"
              valor={imagenPut}
              obligatorio={true}
              Alterado={valor => setImagenPut(valor)}
              estiloCorCampo={styleColorCampo}
              estiloCorLabel={styleLabel}
            />

            <CampoTexto
              label="Video"
              placeholder="Digite el link del video"
              valor={videoPut}
              obligatorio={true}
              Alterado={valor => setVideoPut(valor)}
              estiloCorCampo={styleColorCampo}
              estiloCorLabel={styleLabel}
            />
            <DescripcionFormulario
              label="Descripción"
              placeholder="Sobre que es el video?"
              valor={descripcionPut}
              obligatorio={true}
              Alterado={valor => setDescripcionPut(valor)}
              estiloCorCampoDescripcionFormulario={estiloCorCampoDescripcionFormulario}
              estiloCorLabel={styleLabel}
            />
            <div className={styles.btnContainer}>
              <BotonFormulario styleCorBoton={styleCorBoton} 
                                estiloCorBotonHover={styleCorBotonHover} 
                                type="submit" 
                                nombre={loading ? "Guardando..." :"guardar"}
                                disabled={loading}>
              </BotonFormulario>
              <BotonFormulario Resetear={Limpiar} 
                              styleCorBoton={styleCorBoton} 
                              estiloCorBotonHover={styleCorBotonHover} 
                              type="reset" nombre="limpiar">
              </BotonFormulario>
            </div>
          </form>
          <div className={styles.dialogBtn} >
            <button type="button" onClick={cerrar}><img src={botonCerrar} alt="icono cerrar el modal" /></button>
          </div>
        </dialog>
      </>
      }
    </>
  )
}

export default ModalEditarVideo
