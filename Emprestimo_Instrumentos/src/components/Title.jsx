import "./Title.css"
import { FaRegCompass } from "react-icons/fa6";


const Title = () => {
    return (
        <header className="header-blue">
            <div className="container-title">
                <FaRegCompass className="icon-compass" />
                <h1>  SISTEMA DE EMPRÉSTIMO DE INSTRUMENTOS</h1>
            </div >
        </header>
    )
}

export default Title