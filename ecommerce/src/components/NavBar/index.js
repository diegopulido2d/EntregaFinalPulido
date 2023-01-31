import "./style.css";
import logo from "../../assets/images/logo.png"
import NavBarCategoryList from "../NavBarCategoryList";
import CartWidget from "../CartWidget";

const NavBar = () => {
    return (
        <div className="navBar">
            <div className="navBarInner">
                <div className="navBarLogoContainer">
                    <a href="/">
                        <img src={logo} alt=""/>
                        <h2><strong>Cann</strong>App</h2>
                    </a>
                </div>
                <div className="navBarContentContainer">
                    <NavBarCategoryList>
                        <a href="/"><li>Category 1</li></a>
                        <a href="/"><li>Category 2</li></a>
                        <a href="/"><li>Category 3</li></a>
                    </NavBarCategoryList>
                    <CartWidget notificationNumber={2} url="/" />
                </div>
            </div>
        </div>
    )
}

export default NavBar