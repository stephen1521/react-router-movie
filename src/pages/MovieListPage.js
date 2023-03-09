import React from 'react';
import { useNavigate, useOutletContext } from "react-router-dom";
// import SearchBar from '../components/SearchBar';

// title 
const Title = (props) => {
    return <h1>All Movies</h1>;
}

//display movies
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
    const [movies, deleteOne] = useOutletContext();
    const rows = movies.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.title}</td>
                <td>{row.actors}</td>
                <td>{row.plot}</td>
                <td>{row.genre}</td>
                <td>{row.imdbRating}</td>
                <td>{row.director}</td>
                <td>{row.year}</td>
                <td>{row.dateAdded}</td>
                <td>
                    <button onClick={()=>deleteOne(index, row.title)}>Delete</button>
                </td>
            </tr>
        )
    })
    if(rows.length === 0){
        return <tbody><tr><td>Not Found</td></tr></tbody>
    }else{
        return <tbody>{rows}</tbody>
    }
}

// Movie Form
const MovieForm = () => {
    return (
        <div>
            {/* <SearchBar /> */}
            <Title />
            <table>
                <TableHeader />
                <TableBody />
            </table>
        </div>
    )
}

export default MovieForm;