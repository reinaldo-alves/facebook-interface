import L1 from "./resources/landscape-1.jpg"
import L2 from "./resources/landscape-2.jpg"
import L3 from "./resources/landscape-3.jpg"
import L4 from "./resources/landscape-4.jpg"
import L5 from "./resources/landscape-5.jpg"
import { defaultUsers } from "./users"

function StoryItem(props) {
    return (
        <div className="storiesCard" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${props.image})`}}>
            <img src={props.avatar} alt={props.name} />
            <p>{props.name}</p>
        </div>
    )
}

export default function Stories() {
    const data = defaultUsers.sort(() => Math.random() - 0.5);
    const images = [L1, L2, L3, L4, L5].sort(() => Math.random() - 0.5);

    return (
        <div className="stories">
            {images.map((item, index) => (
                <StoryItem key={index} name={data[index].name} image={item} avatar={data[index].avatar} />
            ))}
        </div>
    )
}