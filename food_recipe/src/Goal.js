import Axios from 'axios';
import { useState } from 'react';
import Calorie from './Calorie';
import "./App"
import {get } from 'jquery';
const Goal = () => {
    const [gender, setgender] = useState('male');
    const [age, setage] = useState("0");
    const [height, setheight] = useState("130");
    const [weight, setweight] = useState("40");
    const [level, setlevel] = useState("1");
    const [goal, setgoal] = useState("maintain");
    const [weightgoal, setweightgoal] = useState({
        "calorie": 1705,
        "balanced": {
            "protein": 100.73453093812364,
            "fat": 46.96407185628734,
            "carbs": 219.84630738522944
        },
        "lowfat": {
            "protein": 110.85560430793782,
            "fat": 37.40526525727958,
            "carbs": 231.23254886318313,
        },
        "lowcarbs": {
            "protein": 121.15014050582106,
            "fat": 56.810517864311514,
            "carbs": 177.27619429947805
        },
        "highprotein": {
            "protein": 141.9690265486726,
            "fat": 42.52212389380525,
            "carbs": 188.60619469026562
        }
    });

    const options = {
        method: 'GET',
        url: 'https://fitness-calculator.p.rapidapi.com/macrocalculator',
        params: {
            age: `${age}`,
            gender: `${gender}`,
            height: `${height}`,
            weight: `${weight}`,
            activitylevel: `${level}`,
            goal: `${goal}`
        },
        headers: {
            'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com',
            'X-RapidAPI-Key': '8603829eaamsh1ad93b5c4da833dp15fc1ejsn3a124ca74445'
        }
    };



    async function getWeight() {
        Axios.request(options).then(function(response) {

            setweightgoal(response.data.data);
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
        for = "intensity" > Age(0 - 80) < /label><br/ >
        <
        input min = "0"
        max = "80"
        id = "intensity"
        className = 'ingredient'
        style = {
            { width: '78%', fontSize: "20px", textAlign: "center", fontWeight: '20px' } }
        type = "number"
        placeholder = 'Enter the number of days'
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
        for = "intensity" > weight(40 - 160) < /label><br/ >
        <
        input min = "1"
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
        label
        for = "intensity" > Activity Level(1 - 7) < /label><br/ >
        <
        input min = "1"
        max = "7"
        id = "intensity"
        className = 'ingredient'
        style = {
            { width: '78%', fontSize: "20px", textAlign: "center", fontWeight: '20px' } }
        type = "number"
        placeholder = 'Enter the number of activity level'
        value = { level }
        onChange = {
            (e) => setlevel(e.target.value) }
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
        select onChange = {
            (e) => { setlevel(e.target.value) } }
        required style = {
            { textAlign: 'center', paddingTop: '10px', paddingBottom: '10px', fontSize: "20px", fontWeight: '20px', marginTop: "20px", width: '80%' } } >

        <
        option value = "maintain" > maintain < /option> <
        option value = "mildlose" > mild lose < /option> <
        option value = "weightlose" > weight lose < /option> <
        option value = "extremelose" > extreme lose < /option> <
        option value = "mildgain" > mild gain < /option> <
        option value = "weightgain" > weight gain < /option> <
        option value = "extremegain" > extreme gain < /option>

        <
        /select><br/ > < br / >
        <
        button className = 'btn--submit'
        onClick = { body }
        type > Check Your BMI < /button>

        <
        /form>

        {
            Object.keys(weightgoal).length > 0 &&
                <
                div className = ""
            style = {
                    { marginLeft: "30%", padding: "10px", marginTop: "17px", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", width: "40%", backgroundColor: "grey" } } >
                You should eat food with this content: < br / >
                Calorie: { weightgoal.calorie } < br / >
                Balanced: < br / >
                <
                ul >
                <
                li > Protein: { weightgoal.balanced.protein } < /li> <
                li > Fat: { weightgoal.balanced.fat } < /li> <
                li > Carbs: { weightgoal.balanced.carbs } < /li> <
                /ul>
            Low Fats:
                <
                ul >
                <
                li > Protein: { weightgoal.lowfat.protein } < /li> <
                li > Fat: { weightgoal.lowfat.fat } < /li> <
                li > Carbs: { weightgoal.lowfat.carbs } < /li> <
                /ul> <
                br / >
                Low Carbs:
                <
                ul >
                <
                li > Protein: { weightgoal.lowcarbs.protein } < /li> <
                li > Fat: { weightgoal.lowcarbs.fat } < /li> <
                li > Carbs: { weightgoal.lowcarbs.carbs } < /li> <
                /ul> <
                br / >
                High protein:
                <
                ul >
                <
                li > Protein: { weightgoal.highprotein.protein } < /li> <
                li > Fat: { weightgoal.highprotein.fat } < /li> <
                li > Carbs: { weightgoal.highprotein.carbs } < /li> <
                /ul>


            <
            br / >
                <
                /div>
        } <
        /div>
    );




};

export default Goal;