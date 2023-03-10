import { useOutletContext } from "react-router-dom";
import Form from '../components/Form';

const HomePage = () => {
    const [_, __, addMovie] = useOutletContext();
    return (
        <div>
            <h1>HomePage</h1>
            <h3>Add Movie</h3>
            <Form addMovie={addMovie}/>
        </div>
    )
}

export default HomePage;