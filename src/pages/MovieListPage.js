import React from 'react';
import { useOutletContext } from "react-router-dom";
import SearchBar from '../components/SearchBar';
import MoviesForm from '../components/MovieForm';

// title 
const Title = () => {
    return <h1>All Movies</h1>;
}

// Movie Form
const MovieForm = () => {
    const [movies,deleteOne,_, searchTable] = useOutletContext();
    return (
        <div>
            <Title />
            <h3>Search(Enter empty string to reset list)</h3>
            <SearchBar searchTable={searchTable}/>
            <br></br>
            <div>
                <MoviesForm movies={movies} deleteOne={deleteOne}/>
            </div>
        </div>
    )
}

export default MovieForm;