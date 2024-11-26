import { IoClose } from "react-icons/io5";
import { MdMoreHoriz } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment, FaAngleDown } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";
import BlueLike from "./resources/gostar.png"
import Profile from "./resources/profissao-programador.jpg"

export default function FeedPost(props) {
    return (
        <div className="post">
            <div className="title-post-container">
                <img className="post-avatar" src={props.avatar} alt="Imagem de Perfil" />
                <div className="post-texts">
                    <span className="post-title">{props.name}</span>
                    <span className="post-time">{props.date} às {props.time} · Public</span>
                </div>
                <div className="medium-button-border"><MdMoreHoriz /></div>
                <div className="medium-button-border"><IoClose /></div>
            </div>
            <div className="post-description">
                <span>{props.description}</span>
            </div>
            <img className="post-image" src={props.image} alt={props.description} />
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