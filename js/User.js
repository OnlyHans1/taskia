class User {

    constructor() {
        this.users = this.getUsers() || [];
    }

    saveUser(userData) {
        const newUser = {
            id: Date.now(),
            ...userData,
        };

        this.users.push(newUser);
        localStorage.setItem('users', JSON.stringify(this.users));

        // return window.location.href = '../signin.html';

        return {
            success: true,
        }
    }

    signInUser(usernameByInput){
        const userExits = this.users.some(user => user.username.toLowerCase() === usernameByInput.toLowerCase());

        if(userExits){
            return {
                success: true,
                username,
            };
        } 
        else {
            return {
                success: false,
                message: 'Data tidak ada',
            };
        }
    }

    getUsers() {
        return JSON.parse(localStorage.getItem('users')) || [];
    }
}