import { IoClose } from "react-icons/io5";
import { MdMoreHoriz } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment, FaAngleDown } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";
import BlueLike from "./resources/gostar.png"
import Profile from "./resources/profissao-programador.jpg"

export default function FeedPost(props) {
    function convertTime(time) {
        const convTime = time ? new Date(time.seconds * 1000) : new Date();
    
        const formattedDate = convTime.toLocaleDateString('pt-BR', {day: '2-digit', month: 'long', year: 'numeric'});
        const formattedTime = convTime.toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit'});
        return [formattedDate, formattedTime];
    }

    const date = convertTime(props.timestamp)[0];
    const time = convertTime(props.timestamp)[1];
    
    return (
        <div className="post">
            <div className="title-post-container">
                <img className="post-avatar" src={props.profileImage} alt="Imagem de Perfil" />
                <div className="post-texts">
                    <span className="post-title">{props.userName}</span>
                    <span className="post-time">{date} às {time} · Public</span>
                </div>
                <div className="medium-button-border"><MdMoreHoriz /></div>
                <div className="medium-button-border"><IoClose /></div>
            </div>
            <div className="post-description">
                <span>{props.titulo}</span>
            </div>
            <img className="post-image" src={props.image} alt={props.titulo} />
            <div className="post-info">
                <div className="likes-container">
                    <img src={BlueLike} alt="Likes" />
                    <span>{props.likes}</span>
                </div>
                <div className="com-container">
                    <span>{props.comments} comentários</span>
                    <span>{props.shares} compartilhamentos</span>
                </div>
            </div>
            <div className="post-buttons">
                <div className="post-option">
                    <AiOutlineLike />
                    <span>Curtir</span>
                </div>
                <div className="post-option">
                    <FaRegComment />
                    <span>Comentar</span>
                </div>
                <div className="post-option">
                    <PiShareFat />
                    <span>Compartilhar</span>
                </div>
                <div className="post-option">
                    <img className="img-redonda" src={Profile} alt="Imagem de Perfil" />
                    <FaAngleDown />
                </div>
            </div>
        </div>
    )
};