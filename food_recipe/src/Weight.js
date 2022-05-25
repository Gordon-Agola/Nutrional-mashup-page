import Axios from 'axios';
import { useState } from 'react';
import Calorie from './Calorie';
import "./App"
import {get } from 'jquery';
const Weight = () => {
    const [gender, setgender] = useState('male');

    const [height, setheight] = useState("130");
    const [weight, setweight] = useState([{
        "Hamwi": "",
        "Devine": "",
        "Miller": "",
        "Robinson": ""
    }]);

    const options = {
        method: 'GET',
        url: 'https://fitness-calculator.p.rapidapi.com/idealweight',
        params: { gender: `${gender}`, height: `${height}` },
        headers: {
            'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com',
            'X-RapidAPI-Key': '8603829eaamsh1ad93b5c4da833dp15fc1ejsn3a124ca74445'
        }
    };



    async function getWeight() {
        Axios.request(options).then(function(response) {

            setweight(response.data.data);
        }).catch(function(error) {
            console.error(error);
        });

    }
    const body = (e) => {
        e.preventDefault();
        getWeight();
    }
    return ( <
        div style = {
            { textAlign: 'center' } } >
        <
        form >



        <
        label
        for = "intensity" > Height in cm(130 - 230) < /label><br/ >
        <
        input min = "1"
        id = "intensity"
        className = 'ingredient'
        style = {
            { width: '78%', fontSize: "20px", textAlign: "center", fontWeight: '20px' } }
        type = "number"
        placeholder = 'Enter the number of days'
        value = { height }
        onChange = {
            (e) => setheight(e.target.value) }
        /><br/ > < br / >
        <
        select onChange = {
            (e) => { setgender(e.target.value) } }
        required style = {
            { textAlign: 'center', paddingTop: '10px', paddingBottom: '10px', fontSize: "20px", fontWeight: '20px', marginTop: "20px", width: '80%' } } >

        <
        option value = "male" > male < /option> <
        option value = "female" > female < /option>



        <
        /select><br/ > < br / >
        <
        button className = 'btn--submit'
        onClick = { body }
        type > Check Your BMI < /button>

        <
        /form>

        {
            Object.keys(weight).length > 0 &&
                <
                div className = ""
            style = {
                    { marginLeft: "30%", padding: "10px", marginTop: "17px", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", width: "40%", backgroundColor: "grey" } } >
                Ideal Weight according to: < br / >
                Hamwi Theory: { weight.Hamwi } < br / >
                Devine Theory: { weight.Devine } < br / >
                Miller Theory: { weight.Miller } < br / >
                Robinson Theory: { weight.Robinson }

            <
            br / >
                <
                /div>
        } <
        /div>
    );




};

export default Weight;