import Footer from "../../components/Footer"
import { Outlet } from "react-router-dom"
import Banner from "..//../components/Banner"
import Header from "..//../components/Header"

function PaginaBase(){
    return(
        <main>
            <Header>
            <Banner />
            </Header>
                <Outlet />
            <Footer />
        </main>
    )
}

export default PaginaBase;