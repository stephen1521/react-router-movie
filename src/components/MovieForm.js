import React from 'react';


// title 
const Title = (props) => {
    return <h1>Movie Form</h1>;
}

//display movies
const TableHeader = (props) => {
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

const TableBody = (props) => {
    const rows = props.MovieData.map((row, index) => {
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
                    <button onClick={()=>props.deleteOne(index, row.title)}>Delete</button>
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
const MovieForm = (props) => {
    const { 
        MovieData, 
        deleteOne 
        } = props
    return (
        <div>
            <Title />
            <table>
                <TableHeader />
                <TableBody MovieData={MovieData}
                deleteOne={deleteOne}/>
            </table>
        </div>
    )
}

export default MovieForm;