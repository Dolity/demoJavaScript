const avatarImg = document.querySelector('.avatar');
const fullnameText = document.querySelector('.fullname');
const emailText = document.querySelector('.email');

async function getUser() {
    try {
        const response = await fetch('https://reqres.in/api/users/8');
        const json = await response.json();
        const user = json.data;

        avatarImg.src = user.avatar;
        fullnameText.textContent = `${user.first_name} ${user.last_name}`;
        emailText.textContent = user.email;

    } catch (error) {
        console.log(error.message);
    }
}
getUser();

// fetch('https://reqres.in/api/users/5')
//     .then((response) => {
//         return response.json();
//     })
//     .then((json) => {
//         const user = json.data;
//         avatarImg.src = user.avatar;
//         fullnameText.textContent = `${user.first_name} ${user.last_name}`;
//         emailText.textContent = user.email;
//     })
//     .catch((error) => {
//         console.log(error.message);
//     });

// const userList = document.querySelector('.user-list');

// fetch('https://reqres.in/api/users')
//     .then((response) => {
//         return response.json();
//     })
//     .then((json) => {
//         const users = json.data;
//         users.forEach((user) => {
//             const userItem = document.createElement('div');
//             userItem.classList.add('user-item');

//             const avatarImg = document.createElement('img');
//             avatarImg.classList.add('avatar');
//             avatarImg.src = user.avatar;

//             const fullnameText = document.createElement('h3');
//             fullnameText.classList.add('fullname');
//             fullnameText.textContent = `${user.first_name} ${user.last_name}`;

//             const emailText = document.createElement('p');
//             emailText.classList.add('email');
//             emailText.textContent = user.email;

//             userItem.append(avatarImg, fullnameText, emailText);
//             userList.append(userItem);
//         });
//     })
//     .catch((error) => {
//         console.log(error.message);
//     });

// const registerForm = document.querySelector('.register-form');
// const emailInput = document.querySelector('#email-input');
// const passwordInput = document.querySelector('#password-input');



// function registerSubmit(event) {
//     event.preventDefault();

//     const user = {
//         email: emailInput.value,
//         password: passwordInput.value,
//     };

//     fetch('https://reqres.in/api/register/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json;charset=utf-8' },
//         body: JSON.stringify(user),
//     })
//         .then((response) => {
//             return response.json();
//         })
//         .then((json) => {
//             alert('Register id = ' + json.id) + ' Success';
//         })
//         .catch((error) => {
//             console.log(error.message);
//         });
// }

// registerForm.addEventListener('submit', registerSubmit);