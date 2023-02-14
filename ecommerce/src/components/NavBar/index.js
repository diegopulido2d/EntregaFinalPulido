import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "../../assets/images/logo.png"
import NavBarCategoryList from "../NavBarCategoryList";
import CartWidget from "../CartWidget";
import { fetchCopy } from "../../utils/getMock";
import { cats } from "../../utils/categories";

const NavBar = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {

        fetchCopy(cats)
        .then((result) => {
            setCategories(result)
        })
        .catch((error) => {console.error(error)});
        
    },[]);


    return (
        <div className="navBar">
            <div className="navBarInner">
                <div className="navBarLogoContainer">
                    <Link to="/">
                        <img src={logo} alt=""/>
                        <h2><strong>Cann</strong>App</h2>
                    </Link>
                </div>
                <div className="navBarContentContainer">
                    <NavBarCategoryList>
                    {categories.map((i) => (
                        <Link to={`/category/${i.categoryUrl}`} key= {i.id}><li>{i.categoryName}</li></Link>
                    ))}
                    </NavBarCategoryList>
                    <CartWidget notificationNumber={2} url="/" />
                </div>
            </div>
        </div>
    )
}

export default NavBar