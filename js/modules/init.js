//Temporary array to hold loaded JSON data
let arrEmployees= []
//Fetch JSON data
async function fetchUsers(){
    try {
        const response = await fetch('../data/employees.json')
        const users = await response.json();
        //Confirm JSON data was received
        console.log(users);
        //Iterate through data and store in temporary array
        for (let user of users) {
            arrEmployees.push(
            `${user.id} ${user.name} ${user.ext} ${user.email} ${user.department}`)
        }   
    } catch(error) {
        console.log(error);
    }
}
fetchUsers();

//EXPORT the module for loaded JSON data
export {fetchUsers};

