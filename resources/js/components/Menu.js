import React from 'react';
import { Link } from 'react-router-dom';

function Menu({slc}){

    return(
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className={ (slc == 'list') ? `nav-link active` : 'nav-link' }
                      to={`/home`}
                >Listado de tickets</Link>
            </li>

            <li className="nav-item">
                <Link className={ (slc == 'create') ? `nav-link active` : 'nav-link' }
                      to={`/create-ticket`}
                >Crear</Link>
            </li>
        </ul>
    );
}

export default Menu;

