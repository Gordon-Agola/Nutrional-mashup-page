import { APP_ID, API_KEY } from './keys';
import Axios from 'axios';
import { useState } from 'react';
import Recipe from './Recipe';


const Home = () => {
    const [query, setquery] = useState("");
    const [recipes, setrecipes] = useState([]);
    const [health, sethealth] = useState("alcohol-free");
    var url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`



    async function getRecipes() {
        var result = await Axios.get(url);
        setrecipes(result.data.hits)
        console.log(result.data)
    }
    const submit = (e) => {
        e.preventDefault();
        getRecipes();
    }
    return (

        <
        div className = "app" >


        <
        form className = "search"
        onSubmit = { submit } >
        <
        input className = 'ingredient'
        type = "text"
        placeholder = 'Enter the name nof the food'
        value = { query }
        onChange = {
            (e) => setquery(e.target.value) }
        /> <
        input className = 'btn--submit'
        type = 'submit'
        value = "Search" / >

        <
        /form> <
        div className = 'recipe_container' > {
            recipes.map(recipe => {
                return <Recipe recipe = { recipe }
                />
            })
        } <
        /div> <
        /div>
    );
};

export default Home;