import { useState } from "react";

function AddMovie(props) {

    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const movieObj = {
            title: title,
            rating: rating
        }

        // invoke function in the parent component 
        props.callbackToCreate(movieObj);

        // clear form
        setTitle("");
        setRating("");
    }

    return (
        <section className="AddMovie box">
            <form onSubmit={handleSubmit}>

                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        required={true}
                        placeholder="enter the title"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </label>

                <label>
                    Rating:
                    <input
                        type="number"
                        min={1}
                        max={10}
                        name="rating"
                        required={true}
                        value={rating}
                        onChange={(e) => { setRating(e.target.value) }}
                    />
                </label>

                <button>Submit</button>
            </form>
        </section>
    );
}

export default AddMovie;