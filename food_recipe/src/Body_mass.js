import Axios from 'axios';
import { useState } from 'react';
import Calorie from './Calorie';
import "./App"
import {get } from 'jquery';
const Mass = () => {
    const [age, setage] = useState("1");
    const [weight, setweight] = useState('40');
    const [height, setheight] = useState("130");
    const [bmi, setmass] = useState([{ "bmi": "", "health": "", "healthy_bmi_range": "" }]);

    const options = {
        method: 'GET',
        url: 'https://fitness-calculator.p.rapidapi.com/bmi',
        params: { age: `${age}`, weight: `${weight}`, height: `${height}` },
        headers: {
            'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com',
            'X-RapidAPI-Key': '8603829eaamsh1ad93b5c4da833dp15fc1ejsn3a124ca74445'
        }
    };

    async function getMass() {
        Axios.request(options).then(function(response) {

            setmass(response.data.data);
        }).catch(function(error) {
            console.error(error);
        });

    }
    const body = (e) => {
        e.preventDefault();
        getMass();
    }
    return ( <
        div style = {
            { textAlign: 'center' } } >
        <
        form >

        <
        label
        for = "intensity" > Age(0 - 80) < /label><br/ >
        <
        input min = "0"
        max = "80"
        id = "intensity"
        className = 'ingredient'
        style = {
            { width: '78%', fontSize: "20px", textAlign: "center", fontWeight: '20px' } }
        type = "number"
        placeholder = 'Enter the intensity level'
        value = { age }
        onChange = {
            (e) => setage(e.target.value) }
        /><br/ > < br / >

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
        label
        for = "intensity" > Weight 40 - 160(when you started the activity) < /label><br/ >
        <
        input min = "40"
        max = "160"
        id = "intensity"
        className = 'ingredient'
        style = {
            { width: '78%', fontSize: "20px", textAlign: "center", fontWeight: '20px' } }
        type = "number"
        placeholder = 'Enter the number of days'
        value = { weight }
        onChange = {
            (e) => setweight(e.target.value) }
        /><br/ > < br / >
        <
        button className = 'btn--submit'
        onClick = { body }
        type > Check Your BMI < /button>

        <
        /form>

        {
            Object.keys(bmi).length > 0 &&
                <
                div className = ""
            style = {
                    { marginLeft: "30%", padding: "10px", marginTop: "17px", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", width: "40%", backgroundColor: "grey" } } >
                Your Body Mass Index: { bmi.bmi } < br / >
                Healthy BMI Range: { bmi.healthy_bmi_range } < br / >
                Health: { bmi.health }

            <
            br / >
                <
                /div>
        } <
        /div>
    );




};

export default Mass;