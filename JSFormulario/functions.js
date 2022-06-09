function handleSubmit(e){
    e.preventDefault();
    // console.dir(e.target);

    let name = e.target[0].value;
	let email = e.target[1].value;
	let comments = e.target[2].value;
    let id = e.target[3].value;


    createNewUser(name, email, comments, id);
	
};

// const handleSubmit = (e) => {
//     e.preventDefault();
//     console.dir(e.target);
// }

const createNewUser = (name, email, comments) => {

    const id = USERS.generateUserId();
	const newUser = new User(name, email, comments, id);
	USERS.addUser(newUser);

};