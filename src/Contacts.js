import { FaSearch } from "react-icons/fa"
import { MdMoreHoriz } from "react-icons/md";
import { defaultUsers } from "./users";

function ContactItem(props) {
    return (
        <div className="menu-item">
            <img className="img-redonda" src={props.avatar} alt={props.name} />
            <span>{props.name}</span>
        </div>
    )
}

export default function Contacts() {
    return (
        <div className="menu-section">
            <div className="header-section">
                <span className="section-title">Contatos</span>
                <div className="contact-buttons">
                    <div className="minor-button-border"><FaSearch /></div>
                    <div className="minor-button-border"><MdMoreHoriz /></div>
                </div>
            </div>
            {defaultUsers.sort(() => Math.random() - 0.5).map((item, index) => (
                <ContactItem key={index} name={item.name} avatar={item.avatar} />
            ))}
        </div>
    )
}