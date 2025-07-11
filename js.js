const users = [
    {
        id:1,
        firstName:"milad",
        lastName:"bahrami",
        age:38,
        gender:"male"
    },
    {
        id:2,
        firstName:"ahmad",
        lastName:"ahmadi",
        age:22,
        gender:"male"
    },
    {
        id:3,
        firstName:"mahsa",
        lastName:"bahrami",
        age:15,
        gender:"female"
    },
     {
        id:4,
        firstName:"mahdi",
        lastName:"ahmadi",
        age:27,
        gender:"male"
    },
    {
        id:5,
        firstName:"elahe",
        lastName:"khosravi",
        age:25,
        gender:"female"
    },
]

const userContainer = document.querySelector('.usercontainer')
const filterInput = document.querySelector('input')
const filterBtn = document.querySelector('button')


window.onload = function(){
    const userString = generateUsersElement(users)
    userContainer.innerHTML = userString
}



function generateUsersElement (users){
    let str = ''
    users.forEach((user) => str +=
     `
     <div class="userItem">
        <p><b>firstName : </b> ${user.firstName}</p>
        <p><b>lastName : </b> ${user.lastName} </p>
        <p><b>age : </b>${user.age}</p>
        <p><b> gender : </b> ${user.gender} </p>
     </div>
    `)
    return str
}

filterBtn.onclick = function(){
    const inputValue = filterInput.value
    const filteredUsers = users.filter(user => user.firstName.startsWith(inputValue))
    if(filteredUsers.length > 0){
        userContainer.innerHTML = generateUsersElement(filteredUsers)
    }else{
        userContainer.innerHTML = '<h2> user not found <h2>'
    }
 }

