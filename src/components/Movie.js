import { useOutletContext, useParams } from "react-router-dom";

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Title</th>
                <th>Actors</th>
                <th>Plot</th>
                <th>Genre</th>
                <th>Imdb Rating</th>
                <th>Director</th>
                <th>Year</th>
                <th>Date Added</th>
            </tr>
        </thead>
    )
}

const TableBody = () => {
    const [movies] = useOutletContext();
    const params = useParams();
    const foundMovie = movies.find((movie) => {
        return movie.title === params.movie;
    });
    return (
        <tr key={1}>
            <td>{foundMovie.title}</td>
            <td>{foundMovie.actors}</td>
            <td>{foundMovie.plot}</td>
            <td>{foundMovie.genre}</td>
            <td>{foundMovie.imdbRating}</td>
            <td>{foundMovie.director}</td>
            <td>{foundMovie.year}</td>
            <td>{foundMovie.dateAdded}</td>
        </tr>
    )
}

const Movie = () => {
    return (
        <div>
            <TableHeader />
            <TableBody />
        </div>
    )
}

export default Movie;