import { Outlet, Link } from "react-router-dom";
import "./Layout.css"

const Layout = () => {
    return ( <
        >
        <
        nav className = "nav"
        id = "nav" >
        <
        ul >
        <
        li >
        <
        Link to = "/" > Home < /Link> <
        /li> <
        li >
        <
        Link to = "/recipe" > Recipe < /Link> <
        /li> <
        li >
        <
        Link to = "/weight" > Weight < /Link> <
        /li> <
        li >
        <
        Link to = "/health" > Health < /Link> <
        /li>

        <
        /ul> <
        /nav> <
        h1 style = {
            { color: 'white', textTransform: 'uppercase', textAlign: 'center' } } > Food Nutrional Mashup Application < /h1>

        <
        Outlet / >
        <
        />
    )
};

export default Layout;