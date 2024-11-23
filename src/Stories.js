import danki_bg from "./resources/danki-bg.jpg"

export default function Stories() {
    return (
        <div className="stories">
            <div className="storiesCard" style={{backgroundImage: `url(${danki_bg})`}}>
                <p>Guilherme Grillo</p>
            </div>
            <div className="storiesCard" style={{backgroundImage: `url(${danki_bg})`}}>
                <p>Guilherme Grillo</p>
            </div>
            <div className="storiesCard" style={{backgroundImage: `url(${danki_bg})`}}>
                <p>Guilherme Grillo</p>
            </div>
            <div className="storiesCard" style={{backgroundImage: `url(${danki_bg})`}}>
                <p>Guilherme Grillo</p>
            </div>
            <div className="storiesCard" style={{backgroundImage: `url(${danki_bg})`}}>
                <p>Guilherme Grillo</p>
            </div>
        </div>
    )
}