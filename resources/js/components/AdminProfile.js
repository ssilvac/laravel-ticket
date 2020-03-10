import React from 'react';
import ReactDOM from "react-dom";

import ListTicket from "./Tickets/ListTickets";
import FormTicket from "./Tickets/FormTicket";

function AdminProfile(){

    return(
        <div>
            <h1>VISTA ADMIN</h1>

            <FormTicket />
            <ListTicket />
        </div>
    );
}

export default AdminProfile;

if (document.getElementById('yield-admin')) {
    ReactDOM.render(<AdminProfile />, document.getElementById('yield-admin'));
}
