import React, { useState } from 'react';

function Form (props) {
    const [title, setTitle] = useState('');
    const [actors, setActors] = useState([]);
    const [plot, setPlot] = useState('');
    const [genre, setGenre] = useState('');
    const [imdbRating, setImdbRating] = useState('');
    const [director, setDirector] = useState('');
    const [year, setYear] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        const movie = {
            title: title,
            actors: actors,
            plot: plot,
            genre: genre,
            imdbRating: imdbRating,
            director: director,
            year: year,
            dateAdded: ''
        }
        props.filterMovies(movie);
        reset();
    }

    const reset = () => {
        setTitle("");
        setActors([]);
        setPlot("");
        setGenre("");
        setImdbRating(0.0);
        setDirector("");
        setYear(0);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <label htmlFor="title">Title:</label>
            <input type='text'
                    id='title'
                    name='title'
                    value={title}
                    onChange={e => setTitle(e.target.value)}/><br/>
            <label htmlFor="actors">Actors:</label>
            <input type='text'
                    id='actors'
                    name='actors'
                    value={actors}
                    onChange={e => setActors(e.target.value)}/><br/>
            <label htmlFor="Plot">Plot:</label>
            <input type='text'
                    id='plot'
                    name='plot'
                    value={plot}
                    onChange={e => setPlot(e.target.value)}/><br/>
            <label htmlFor="genre">Genre:</label>
            <input type='text'
                    id='genre'
                    name='genre'
                    value={genre}
                    onChange={e => setGenre(e.target.value)}/><br/>
            <label htmlFor="imdbRating">imdbRating:</label>
            <input type='text'
                    id='imdbRating'
                    name='imdbRating'
                    value={imdbRating}
                    onChange={e => setImdbRating(e.target.value)}/><br/>
            <label htmlFor="director">Director:</label>
            <input type='text'
                    id='director'
                    name='director'
                    value={director}
                    onChange={e => setDirector(e.target.value)}/><br/>
            <label htmlFor="year">Year:</label>
            <input type='text'
                    id='year'
                    name='year'
                    value={year}
                    onChange={e => setYear(e.target.value)}/><br/>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form;