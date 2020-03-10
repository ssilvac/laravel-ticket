import React from 'react';
import ReactDOM from "react-dom";

function User(){

    return(
        <div>
            <h1>VISTA USUARIO</h1>
        </div>
    );
}

export default User;

if (document.getElementById('yield-user')) {
    ReactDOM.render(<User />, document.getElementById('yield-user'));
}
