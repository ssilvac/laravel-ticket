import React , { useState }from 'react';

import TicketService from "../../services/TicketService";

function Ticket(prop){
    const [ticket, setTicket] = useState(prop.ticket);
    const typeUser = prop.typeUser;

    const handlePedirBtn = async (id, e) => {
        e.preventDefault();
        const result = await TicketService.takeTicket(id);
        setTicket(result);
    };

    let disabled = false;

    if(ticket.ticket_pedido){
        disabled = 'disabled';
    }

    let btn = '';
    if(typeUser == 'User') {
        btn = <a href="#" className={`btn btn-primary ${disabled ? "disabled" : ""}`} onClick={() => handlePedirBtn(ticket.id, event)} disabled={disabled} >{(ticket.ticket_pedido) ? 'En proceso...' : 'Tomar ticket'}</a>;
    }

    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Asignado a { ticket.user.name }</h5>
                <p className="card-text">{ticket.desc}</p>
                {btn}
            </div>
        </div>
    );
}

export default Ticket;
