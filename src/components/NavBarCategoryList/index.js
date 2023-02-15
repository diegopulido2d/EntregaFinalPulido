import "./style.css";

const NavBarCategoryList = ({children}) => {
    return (
        <ul className="navBarCategoryList">
            {children}
        </ul>       
    )
}

export default NavBarCategoryList