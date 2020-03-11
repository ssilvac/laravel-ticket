import React , { useState, useEffect }from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ListTicket from "./Tickets/ListTickets";
import NotFound from "./NotFound";

import TicketService from "../services/TicketService";

function UserProfile(){

    const tickets = TicketService.getTickets();

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/home'
                       render={
                           () => { if (!tickets) {
                               return <div>Loading...</div>;
                           } else {
                               return ( <ListTicket tickets={ tickets } typeUser='User' /> )
                           }
                           }
                       }
                />

                {/*Page Not Found*/}
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export default UserProfile;

if (document.getElementById('yield-user')) {
    ReactDOM.render(<UserProfile />, document.getElementById('yield-user'));
}
