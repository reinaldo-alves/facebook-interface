import { FaSearch } from "react-icons/fa"
import { MdMoreHoriz } from "react-icons/md";
import Ipm from "./resources/isabel-pesce-mattos.jpg"
import Mk from "./resources/mike-krieger.jpg"
import Pds from "./resources/paulo-da-silva.jpg"
import Ak from "./resources/alex-kipman.jpg"
import Hb from "./resources/hugo-barra.jpg"
import Rc from "./resources/ron-czerny.jpg"
import Rag from "./resources/renato-asse-goncalves.jpg"
import Dl from "./resources/davidson-laponte.jpeg"
import Gg from "./resources/gutembergue-gomes.png"
import La from "./resources/leo-andrade.jpg"
import Ca from "./resources/cris-acosta.png"
import Al from "./resources/ada-lovelace.jpg"
import Gh from "./resources/grace-hopper.jpg"
import At from "./resources/alan-turing.jpg"
import Mh from "./resources/margaret-hamilton.jpg"
import Dr from "./resources/dennis-ritchie.jpg"
import Lt from "./resources/linus-torvalds.jpg"
import Jb from "./resources/John-Backus.jpg"
import Bg from "./resources/bill-gates.jpg"
import Tbl from "./resources/Tim-Berners-Lee.jpg"
import Ggl from "./resources/guillherme-grillo.png"

function ContactItem(props) {
    return (
        <div className="menu-item">
            <img className="img-redonda" src={props.avatar} alt={props.name} />
            <span>{props.name}</span>
        </div>
    )
}

export default function Contacts() {
    const data = [
        {name: 'Isabel Pesce Mattos', avatar: Ipm},
        {name: 'Mike Krieger', avatar: Mk},
        {name: 'Paulo da Silva', avatar: Pds},
        {name: 'Alex Kipman', avatar: Ak},
        {name: 'Hugo Barra', avatar: Hb},
        {name: 'Ron Czerny', avatar: Rc},
        {name: 'Renato Asse Gonçalves', avatar: Rag},
        {name: 'Davidson Lapoint', avatar: Dl},
        {name: 'Gutembergue Gomes', avatar: Gg},
        {name: 'Léo Andrade', avatar: La},
        {name: 'Cris Acosta', avatar: Ca},
        {name: 'Ada Lovelace', avatar: Al},
        {name: 'Grace Hopper', avatar: Gh},
        {name: 'Alan Turing', avatar: At},
        {name: 'Margaret Hamilton', avatar: Mh},
        {name: 'Denis Ritchie', avatar: Dr},
        {name: 'Linus Torvalds', avatar: Lt},
        {name: 'John Backus', avatar: Jb},
        {name: 'Bill Gates', avatar: Bg},
        {name: 'Tim Berners-Lee', avatar: Tbl},
        {name: 'Guilherme Grillo', avatar: Ggl}
    ]
    
    return (
        <div className="menu-section">
            <div className="header-section">
                <span className="section-title">Contatos</span>
                <div className="contact-buttons">
                    <div className="minor-button-border"><FaSearch /></div>
                    <div className="minor-button-border"><MdMoreHoriz /></div>
                </div>
            </div>
            {data.map((item, index) => (
                <ContactItem key={index} name={item.name} avatar={item.avatar} />
            ))}
        </div>
    )
}