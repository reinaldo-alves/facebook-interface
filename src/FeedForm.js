import { FaVideo } from "react-icons/fa";
import { AiOutlineFileImage } from 'react-icons/ai';
import { CgSmileMouthOpen } from "react-icons/cg";
import Profile from "./resources/profissao-programador.jpg"

export default function FeedForm() {
    return (
        <div className="header-posts">
            <div className="post-input-container">
                <img src={Profile} alt="Imagem de Perfil" />
                <div className="search-container">
                    <input placeholder="No que você está pensando, Profissão Programador?" />
                </div>
            </div>
            <div className="post-options-container">
                <div className="post-option" id="option-video">
                    <FaVideo />
                    <span>Vídeo ao vivo</span>
                </div>
                <div className="post-option" id="option-picture">
                    <AiOutlineFileImage />
                    <span>Foto/vídeo</span>
                </div>
                <div className="post-option" id="option-feeling">
                    <CgSmileMouthOpen />
                    <span>Sentimento/atividade</span>
                </div>
            </div>
        </div>
    )
};