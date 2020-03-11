import React from 'react';
import Ticket from "./Ticket";
import Menu from "./../Menu";

function ListTicket({tickets, typeUser}){

    return(
        <div className="container">

            <Menu slc='list' typeForm='create'/>

            <br/><br/>


            <h3>LISTADO TICKET</h3>

            <hr />

            {tickets.map( (ticket, index) => (

                <div key={ticket.id}>
                    <Ticket key={ticket.id} ticket={ticket} typeUser={typeUser} />
                    <br />
                </div>
                ))
            }
        </div>
    );
}

export default ListTicket;
