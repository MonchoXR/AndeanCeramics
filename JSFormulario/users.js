class Users{
    constructor(){
        this.usersList=[];
    }

    addUser(user){
        this.usersList.push(user);
    }

    deleteUser(userId){
        console.log(userId);
    }

    generateUserId() {
		return Date.now();
	}
}

const USERS = new Users();