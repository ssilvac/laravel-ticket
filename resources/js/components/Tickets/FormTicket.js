import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import TicketService from "../../services/TicketService";
import Menu from "../Menu";




function FormTicket({users}){

    const [selectedUser, setSelectedUser] = useState("");
    const [desc, setDesc] = useState("");

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        const sendData = {
            'user_id' : selectedUser,
            'desc' : desc
        };

        const result = await TicketService.createTicket(sendData);

        if( result.error ) {
            alert("Ha ocurrido un error al crear el ticket, \nPor favor verifique el formulario.");
            return;
        }

        location.href="/home";
    }

    return(
        <div className="container">

            <Menu slc='create' />
            <br/><br/>

            <h4>CREAR TICKET</h4>
            <br />

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="select">Asignar a:</label>
                    <select id="select-user" className="form-control" onChange={e => setSelectedUser( e.target.value ) }>
                        <option>Seleccione un usuario...</option>

                        {users.map( (user, index) => (
                            <option key={user.id} value={user.id}>{user.name}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="description">Descripción</label>
                    <textarea className="form-control" id="description" rows="3" onChange={e => setDesc(e.target.value)} ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Crear</button>
            </form>
        </div>
    );
}

export default FormTicket;
