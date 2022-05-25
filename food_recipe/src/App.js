import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Base from "./Base"
import Health from "./Health"
import Calorie from './Calorie';
import Mass from "./Body_mass";
import Weight from "./Weight";
import Goal from './Goal';

function App() {





    return ( <
        BrowserRouter >
        <
        Routes >
        <
        Route path = "/"
        element = { < Layout / > } >
        <
        Route index element = { < Base / > }
        /> <
        Route path = "recipe"
        element = { < Home / > }
        /> <
        Route path = "health"
        element = { < Health / > }
        /> <
        Route path = "calorie"
        element = { < Calorie / > }
        /> <
        Route path = "bmi"
        element = { < Mass / > }
        /> <
        Route path = "weight"
        element = { < Weight / > }
        /> <
        Route path = "goal"
        element = { < Goal / > }
        /> <
        /Route> <
        /Routes> <
        /BrowserRouter>
    );

}

export default App;