import Banner from "../../components/Banner"
import Destaques from "../../components/Banner/Destaques"
import styles from "./Inicio.module.css"
//import { register } from "swiper/element/bundle"
import { Swiper, SwiperSlide } from "swiper/react"
//import { Autoplay } from "swiper/modules"
import { Autoplay, Navigation, Pagination } from "swiper/modules"

//register
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { useEffect, useState } from "react"
import Area from "../../components/Area"
import CardVideo from "../../components/Area/CardVideo"
import ModalEditarVideo from "../../components/ModalEditarVideo"

const Inicio = () => {

  const [videos, setVideos] = useState([])
  const [frontendVideo, setFrontendVideo] = useState([])
  const [backendVideo, setBackendVideo] = useState([])
  const [innovacionVideo, setInnovacionVideo] = useState([])
  const [videoSeleccionado, setVideoSeleccionado] = useState(null)

  const urlApi= 'https://my-json-server.typicode.com/OscarE1830/alura-flix-api/videos'
  const localApi = 'http://localhost:3001/videos'

  useEffect(() => {

    async function conectApi() {
      try{
      const videosApi = await fetch(localApi) 
      if(!videosApi.ok) throw new Error('Error al obtener los videos')
      const videosApiData = await videosApi.json()
      setVideos(videosApiData)
      
    }catch(error){
      console.error('Error:', error.message)
    }
  }
    conectApi()
  }, [])

  useEffect(() => {
    if (videos.length > 0) {
      const frontendVideos = (videos.filter(video => video.area === "frontend"));
      const backendVideos = (videos.filter(video => video.area === "backend"));
      const innovacionVideos = (videos.filter(video => video.area === "innovacion y gestion"));

      setFrontendVideo(frontendVideos);
      setBackendVideo(backendVideos);
      setInnovacionVideo(innovacionVideos);

    }
  }, [videos]);

  const actualizarVideoEliminado = (id) => {
    setVideos(videos.filter(video => video.id !== id));
  }

  const actualizarAposPut = async (videoActualizado) => {
    const respuesta = await fetch(localApi);
    const updatedVideos = await respuesta.json();
    setVideos(updatedVideos);
    setVideoSeleccionado(null);
  }

  return (
    <div>
      <Banner>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 5000 }}
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <Destaques key={video.id} video={video} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Banner>
      <Area titulo="FRONT END" tituloColor={"#6BD1FF"} videoBorderColor={"#6BD1FF"} btnColor={"#6BD1FF"}>
          {frontendVideo.map((video) => (
            <CardVideo key={video.id} video={video} eliminar={actualizarVideoEliminado} VideoSeleccionado={video=> setVideoSeleccionado(video)} />
          ))}
      </Area>
      <Area titulo="BACK END" tituloColor={"#00C86F"} videoBorderColor={"#00C86F"} btnColor={"#00C86F"}>
          {backendVideo.map((video) => (
            <CardVideo key={video.id} video={video} eliminar={actualizarVideoEliminado} VideoSeleccionado={video=> setVideoSeleccionado(video)} />
          ))}
      </Area>
      <Area titulo="INNOVACION Y GESTION" tituloColor={"#FFBA05"} videoBorderColor={"#FFBA05"} btnColor={"#FFBA05"}>
        {innovacionVideo.map((video) => (
          <CardVideo key={video.id} video={video} eliminar={actualizarVideoEliminado} VideoSeleccionado={video=> setVideoSeleccionado(video)} />
        ))}
      </Area>
      <ModalEditarVideo videos={videos} video={videoSeleccionado} cerrar={() => setVideoSeleccionado(null)} actualizar={actualizarAposPut} />
    </div>
  )
}

export default Inicio