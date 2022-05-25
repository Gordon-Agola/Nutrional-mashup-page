import Axios from 'axios';
import { useState } from 'react';
import Calorie from './Calorie';
import "./App"
const Health = () => {

    return ( <
        div style = {
            { textAlign: 'center' } } >
        <
        a href = "/calorie"
        className = 'btn--submit'
        type = 'submit'
        style = {
            { color: "white", marginRight: 10, textDecoration: "none" } } > Burn Calorie < /a> <
        a href = "/bmi"
        className = 'btn--submit'
        type = 'submit'
        style = {
            { color: "white", marginRight: 10, textDecoration: "none" } } > Check your Body mass Index < /a> <
        br / > < br / >
        <
        a href = "/goal"
        className = 'btn--submit'
        type = 'submit'
        style = {
            { color: "white", marginRight: 10, textDecoration: "none" } } > Weight Goals < /a> <
        /div>
    );




};

export default Health;