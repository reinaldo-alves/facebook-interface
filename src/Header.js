import { FaFacebook, FaSearch, FaAlignJustify } from "react-icons/fa";

export default function Header() {
    return (
        <header>
            <div className="logo-search-container">
                <FaFacebook />
                <div className="search-container">
                    <FaSearch />
                    <input placeholder="Pesquisar no Facebook" />
                </div>
            </div>
            <div className="pages-container">
                <div className="pages-icon-container"><img src="./home.png" /></div>
                <div className="pages-icon-container"><img src="./yourvideos.png" /></div>
                <div className="pages-icon-container"><img src="./marketplace.png" /></div>
                <div className="pages-icon-container"><img src="./grupo.png" /></div>
                <div className="pages-icon-container"><img src="./game.png" /></div>
                <div className="pages-icon-container"><FaAlignJustify /></div>
            </div>
            <div className="buttons-container">
                <div className="button-border"><img src="./menu-de-pontos.png" /></div>
                <div className="button-border"><img src="./mensageiro.png" /></div>
                <div className="button-border"><img src="./packard-bell.png" /></div>
                <div className="button-border"><a href="./index.html"></a></div>
            </div>
        </header>
    );
}