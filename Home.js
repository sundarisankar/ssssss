import React from "react";
import { useNavigate } from "react-router-dom";

function Home()
{
    const navigate=useNavigate();
    return (<div>
        <i><b>Full Stack Development refers to the development of both front end (client side) and back end (server side) portions of web applications.<br/></b></i> 
        <button onClick={()=>navigate("/cart")}>Back to home</button>
    </div>)
}
export default Home;