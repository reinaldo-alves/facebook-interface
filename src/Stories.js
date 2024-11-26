import L1 from "./resources/landscape-1.jpg"
import L2 from "./resources/landscape-2.jpg"
import L3 from "./resources/landscape-3.jpg"
import L4 from "./resources/landscape-4.jpg"
import L5 from "./resources/landscape-5.jpg"
import Gg from "./resources/guillherme-grillo.png"
import Ps from "./resources/paulo-da-silva.jpg"
import Hb from "./resources/hugo-barra.jpg"
import Ip from "./resources/isabel-pesce-mattos.jpg"
import Al from "./resources/ada-lovelace.jpg"

function StoryItem(props) {
    return (
        <div className="storiesCard" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${props.image})`}}>
            <img src={props.avatar} alt={props.name} />
            <p>{props.name}</p>
        </div>
    )
}

export default function Stories() {
    const data = [
        {name: 'Guilherme Guillo', avatar: Gg, image: L1},
        {name: 'Paulo da Silva', avatar: Ps, image: L2},
        {name: 'Hugo Barra', avatar: Hb, image: L3},
        {name: 'Isabel Pesce Mattos', avatar: Ip, image: L4},
        {name: 'Ada Lovelace', avatar: Al, image: L5}
    ]
    
    return (
        <div className="stories">
            {data.map((item, index) => (
                <StoryItem key={index} name={item.name} image={item.image} avatar={item.avatar} />
            ))}
        </div>
    )
}