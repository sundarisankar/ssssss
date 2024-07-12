import React from "react";
import { useNavigate } from "react-router-dom";

function Cart()
{
    const navigate=useNavigate();

    return (<div>
        <p>A full-stack web developer is a person who can develop both client and server software.

In addition to mastering HTML and CSS, he/she also knows how to:

1.Program a browser (e.g. using JavaScript, jQuery, Angular, or Vue)
2.Program a server (e.g. using PHP, ASP, Python, or Node)
3.Program a database (e.g. using SQL, SQLite, or MongoDB)
</p>
        <br/>
        <button onClick={()=>navigate("/-1")}>back to home</button>

    </div>)
}
export default Cart;