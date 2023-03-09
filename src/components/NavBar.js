import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/MovieListPage">All Movies</Link>
            <Link to="/MoviePage">One Movie</Link>
        </div>
    )
}
export default NavBar