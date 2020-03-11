import React , { useState, useEffect }from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ListTicket from "./Tickets/ListTickets";
import FormTicket from "./Tickets/FormTicket";
import NotFound from "./NotFound";

import TicketService from "../services/TicketService";
import UserService from "../services/UserService";

function AdminProfile(){

    const tickets = TicketService.getAllTickets();
    const users = UserService.getAllUsers();

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/home'
                   render={
                       () => { if (!tickets) {
                               return <div>Loading...</div>;
                           } else {
                               return ( <ListTicket tickets={ tickets } typeUser='admin' /> )
                           }
                       }
                   }
                />

                <Route path='/create-ticket'
                   render={
                       () => {
                           if (!users) {
                               return <div>Loading...</div>;
                           } else {
                               return (  <FormTicket users={ users } /> )
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

export default AdminProfile;

if (document.getElementById('yield-admin')) {
    ReactDOM.render(<AdminProfile />, document.getElementById('yield-admin'));
}
