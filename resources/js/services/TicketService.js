import {postFetch, useFetch, getFetch} from "./../Utils";

const TicketService  = {
    getAllTickets : () => {
        return useFetch('/getAllTickets');
    },
    getTickets : () => {
        return useFetch('/getTickets');
    },
    createTicket: (data) => {
        return postFetch('/createTicket', data);
    },
    takeTicket: (id) => {
        return getFetch(`/takeTicket/${id}`);
    }
};

export default TicketService;
