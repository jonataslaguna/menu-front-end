import { useState } from "react";

const INITIAL_STATE = {
    name: '',
    imageUrl:'',
    price: 0,
}


function Form() {
    const [ formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!formData.name || !formData.imageUrl || !formData.price) {
            alert('Please fill all the fields');
            return;
        }
        console.log(formData);
    }

    return (
        <form onSubmit={ handleSubmit }>
        <label htmlFor="name">Name:</label>
        <input 
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange} 
        />

        <label htmlFor="imageUrl">Image url:</label>
        <input 
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
        />

        <label htmlFor="price">Price:</label>
        <input 
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
        />
        <button type="submit">Submit</button>
        </form>
    );
}

export default Form;