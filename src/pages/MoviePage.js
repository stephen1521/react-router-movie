import { Outlet, useNavigate, useOutletContext  } from "react-router-dom";

const MoviePage = () => {
    const [movies] = useOutletContext();
    const navigate = useNavigate();
    return (
        <div>
            <h1>Movie</h1>
            <select onChange={(e) => {
                navigate(`/MoviePage/${e.target.value}`);
            }}>
                <option></option>
                {movies.map((movie) => {
                    return (<option value={movie.title}>{movie.title}</option>)
                })}
            </select>
            <Outlet context={[movies]} />
        </div>
    )
}

export default MoviePage;