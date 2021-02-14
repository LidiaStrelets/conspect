const logins = ['just_Li_S', 'lidia.strelets', 'Lidia Strelets'];

  
// for (let i = 0; i < logins.length; i += 1){
//     if (userLogin === logins[i]) {
//         message = `User ${userLogin} found`;
//     }
//     else {
//         message = `User ${userLogin} not found`;
//     }
// }
// console.log(message);
 
// message = `User ${userLogin} not found`;

// for (const login of logins) {
//     if (userLogin === login) {
//         message = `User ${userLogin} found`;
//         break;
//     }
// }
// console.log(message);


// if (logins.includes(userLogin)) {
//     message = `User ${userLogin} found`;
// }
// else {
//     message = `User ${userLogin} not found`;
// }
// console.log(message);

function searchLogin(allLogins, userLogin = prompt('Enter your login')) {
    if (userLogin === null) {
        return 'Некорректный ввод, попробуйте еще раз';
    }
    
    return allLogins.includes(userLogin) ? `User ${userLogin} found` : `User ${userLogin} not found`;
}
console.log(searchLogin(logins));

