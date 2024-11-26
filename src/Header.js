import { FaFacebook, FaSearch, FaAlignJustify, FaFacebookMessenger, FaBell } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineOndemandVideo, MdStorefront } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { IoGameControllerOutline } from "react-icons/io5";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    
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
                <div className="pages-icon-container"><AiFillHome /></div>
                <div className="pages-icon-container"><MdOutlineOndemandVideo /></div>
                <div className="pages-icon-container"><MdStorefront /></div>
                <div className="pages-icon-container"><HiOutlineUserGroup /></div>
                <div className="pages-icon-container"><IoGameControllerOutline /></div>
                <div className="pages-icon-container"><FaAlignJustify /></div>
            </div>
            <div className="buttons-container">
                <div className="button-border"><BsFillGrid3X3GapFill /></div>
                <div className="button-border"><FaFacebookMessenger /></div>
                <div className="button-border"><FaBell /></div>
                <div className="button-border" onClick={() => navigate('/')}></div>
            </div>
        </header>
    );
}