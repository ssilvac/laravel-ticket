import { useFetch } from "./../Utils";

const UserService  = {
    getAllUsers : function() {
        return useFetch('/getAllUsers');
    }
};

export default UserService;
