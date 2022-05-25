import Axios from 'axios';
import { useState } from 'react';
import "./App"
const Calorie = () => {
        const [query, setquery] = useState("1");
        const [activities, setactivities] = useState([]);
        const [activityid, setactivityid] = useState("co_45");
        const [day, setday] = useState("1");
        const [weight, setweight] = useState("40");
        const [calorie, setcalorie] = useState([{ "burnedCalorie": "", "unit": "calorie" }]);
        const options = {
            method: 'GET',
            url: 'https://fitness-calculator.p.rapidapi.com/burnedcalorie',
            params: { activityid: `${activityid}`, activitymin: `${day}`, weight: `${weight}` },
            headers: {
                'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com',
                'X-RapidAPI-Key': '8603829eaamsh1ad93b5c4da833dp15fc1ejsn3a124ca74445'
            }
        };


        //   Get activity



        const activity = {
            method: 'GET',
            url: 'https://fitness-calculator.p.rapidapi.com/activities',
            params: { intensitylevel: `${query}` },
            headers: {
                'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com',
                'X-RapidAPI-Key': '8603829eaamsh1ad93b5c4da833dp15fc1ejsn3a124ca74445'
            }
        };

        async function getActivity() {
            await Axios.request(activity).then(function(response) {
                setactivities(response.data.data);

                console.log(activities)
            }).catch(function(error) {
                console.error(error);
            });;

        }

        async function getCalorie() {
            await Axios.request(options).then(function(response) {
                setcalorie(response.data.data);

                console.log(calorie.burnedCalorie);
            }).catch(function(error) {
                console.error(error);
            });;

        }

        const submit = (e) => {
            setquery(e.target.value);
            getActivity()
        }
        const calories = (e) => {
            e.preventDefault();
            getCalorie();

        }




        return ( <
            div style = {
                { textAlign: 'center' } } >

            <
            form >

            <
            label
            for = "intensity" > Activity Intensity Level(1 - 7) < /label><br/ >
            <
            input min = "1"
            max = "7"
            id = "intensity"
            className = 'ingredient'
            style = {
                { width: '78%', fontSize: "20px", textAlign: "center", fontWeight: '20px' } }
            type = "number"
            placeholder = 'Enter the intensity level'
            value = { query }
            onChange = { submit }
            /><br/ > < br / >
            <
            label
            for = "Activity" > Activity Type(Description) < /label><br/ >

            <
            select onChange = {
                (e) => { setactivityid(e.target.value) } }
            required style = {
                { paddingTop: '10px', paddingBottom: '10px', fontSize: "20px", fontWeight: '20px', marginTop: "20px", width: '80%' } } > {
                activities.map((activity) => {
                        return ( < option value = { activity.id } > { activity.activity }({ activity.description }) < /option>)

                        })
                }

                <
                /select> <
                br / >
                <
                label
                for = "intensity" > Days < /label><br/ >
                <
                input min = "1"
                id = "intensity"
                className = 'ingredient'
                style = {
                    { width: '78%', fontSize: "20px", textAlign: "center", fontWeight: '20px' } }
                type = "number"
                placeholder = 'Enter the number of days'
                value = { day }
                onChange = {
                    (e) => setday(e.target.value) }
                /><br/ > < br / >
                <
                label
                for = "intensity" > Weight(when you started the activity 40 - 160) < /label><br/ >
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
                type onClick = { calories } > Check Calorie Burned < /button>

                <
                /form>

                {
                    Object.keys(calorie).length > 0 &&
                        <
                        div className = ""
                    style = {
                            { marginLeft: "30%", padding: "10px", marginTop: "17px", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", width: "40%", backgroundColor: "grey" } } >
                        Amount Burned: { calorie.burnedCalorie } < br / >
                        Units: { calorie.unit } < br / >
                        <
                        /div>
                }

                <
                /div>




            );
        };

        export default Calorie;