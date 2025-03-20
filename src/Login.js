import { useNavigate } from "react-router-dom"
import { FaPlus } from "react-icons/fa";
import Logo from "./resources/facebook-logo.png"

export default function Login() {
    const navigate = useNavigate();

    return (
        <div className="login-body">
            <div className="info-container">
                <div className="warning-container"> 
                    <h2>WARNING!</h2>
                    <h3>This is not the official page of Facebook!</h3>
                    <p>This is an independent project developed exclusively for educational purposes and to enhance web development skills. It has no affiliation, sponsorship, or association with Facebook. No personal information is collected.</p>
                    <p>To test the application, click on <b>LOG IN</b>. No email or password is required.</p>
                </div>
                <div className="info-content">
                    <div className="logo-container">
                        <img src={Logo} alt="Facebook"/>
                        <p>Connect with friends and the world around you on Facebook</p>
                    </div>
                    <div className="form-container">
                        <div className="form">
                            <input type="text" placeholder="Email or phone number" />
                            <input type="password" placeholder="Password" />
                            <button className="login-button" onClick={() => navigate('/feed')}>Log In</button>
                            <span>Forgot password?</span>
                            <button className="create-button">Create new account</button>
                        </div>
                        <p><span>Create a Page</span> for a celebrity, brand or business.</p>
                    </div>
                </div>
            </div>
            <footer>
                <div className="texts-container">
                    <div className="languages-container">
                        <span>English (US)</span>
                        <span>Português (Brasil)</span>
                        <span>Español</span>
                        <span>Français (France)</span>
                        <span>Italiano</span>
                        <span>Deustsch</span>
                        <span>Arabian</span>
                        <span>Korean</span>
                        <span>Japanese</span>
                        <span>Chinese</span>
                        <span><FaPlus /></span>
                    </div>
                    <div className="links-container">
                        <span>Sign Up</span>
                        <span>Log In</span>
                        <span>Messenger</span>
                        <span>Facebook Lite</span>
                        <span>Watch</span>
                        <span>Places</span>
                        <span>Games</span>
                        <span>Marketplace</span>
                        <span>Meta Pay</span>
                        <span>Meta Store</span>
                        <span>Meta Quest</span>
                        <span>Instagram</span>
                        <span>Bulletin</span>
                        <span>Fundraisers</span>
                        <span>Services</span>
                        <span>Voting Information Center</span>
                        <span>Privacy Policy</span>
                        <span>Privacy Center</span>
                        <span>Groups</span>
                        <span>About</span>
                        <span>Create Ad</span>
                        <span>Create Page</span>
                        <span>Developers</span>
                        <span>Careers</span>
                        <span>Cookies</span>
                        <span>Ad choices</span>
                        <span>Terms</span>
                        <span>Help</span>
                        <span>Contacting Uploading & Non-Users</span>
                    </div>
                    <div className="credits">
                        <span>Meta © 2023</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}