// let ct2 = document.getElementById('content-2');
// let textHTML = '<b>This is Header</b>';
// ct2.innerHTML = textHTML;

// let discountButton = document.getElementById('discount-button');
// let message = document.getElementById('message');

// function showMessage() {
//     message.innerHTML = 'No Time!';
// }
// discountButton.addEventListener('click', () => {
//     console.log('Arrow Func!');
// })

// //Arrow Function
// let saySometing = () => {
//     console.log('Arrow Func!');
// }
// saySometing()

// //Array
// let fruits = ['Apple', 'Banana', 'Carrot'];
// console.log(fruits)
// console.log(fruits[0])

// let score = [82, 75, 48, 64, 36]
// let passedCount = 0;

// //map
// let passFailScore = score.map((score) => {
//     if (score >= 50) {
//         return 'Passed';
//     } return 'Failed';
// })
// console.log(score);
// console.log(passFailScore);

// //Filter
// let passScore = score.filter((score) => {
//     return score >= 50;
// })
// console.log(score);
// console.log(passScore);

// //Reduce
// let sumScore = score.reduce((sum, score) => {
//     return sum + score;
// })
// console.log(score);
// console.log(sumScore)

// //Find
// let failedScore = score.find((score) => {
//     return score < 50;
// })
// console.log(failedScore)

// //FindIndex
// let failedScoreIDX = score.findIndex((score) => {
//     return score < 50;
// })
// console.log(failedScoreIDX)

// //every
// let everyonePassed = score.every((score) => {
//     return score >= 50;
// })
// console.log(everyonePassed);

// //some
// let somePassed = score.some((score) => {
//     return score >= 50;
// })
// console.log(somePassed);

// //Foreach
// score.forEach((score) => {
//     if (score >= 50) {
//         passedCount++;
//     }
// })
// // console.log(passedCount);

// //Object
// let rabbits = [
//     {
//         name: 'Mimi',
//         breed: 'Lion Head',
//         color: 'White',
//         weight: 1.2
//     },
//     {
//         name: 'Joly',
//         breed: 'Boba',
//         color: 'Black',
//         weight: 1.5
//     },
//     {
//         name: 'Loli',
//         breed: 'Lion',
//         color: 'Green',
//         weight: 2.0
//     },
// ];

// let name = 'Jody'

// let rabbit = {
//     name: 'Mimi',
//     breed: 'Lion Head',
//     color: 'White',
//     weight: 1.2,
//     talk() {
//         console.log(this.name + ', Oung oung');
//     },
//     weithtDetail() {
//         if (this.weight < 1) {
//             return 'Less than BMI!'
//         } else if (this.weight > 2) {
//             return 'More than BMI!'
//         }
//         return 'Normal BMI';
//     }
// };
// // console.log(rabbit);
// // console.log(rabbit.name);

// // // rabbit.name = 'กระตอย'
// // // console.log(rabbit.name);

// // //Array + Object
// // rabbits.forEach((rabbit) => {
// //     console.log(rabbit.name + ' , ' + rabbit.breed);
// // })

// //Method This
// rabbit.talk()
// console.log(rabbit.weithtDetail());

// //Constructor
// function Rabbit(name, breed, color, weight) {
//     this.name = name;
//     this.breed = breed;
//     this.color = color;
//     this.weight = weight;
//     this.talk = function () {
//         console.log(this.name + ', Oung oung');
//     }
// }

// // New
// let rabbit1 = new Rabbit('Mimi', 'Lion Head', 'White', '1.5')
// let rabbit2 = new Rabbit('Momo', 'Dwarf Head', 'Black', '1.2')

// rabbit1.talk()
// rabbit2.talk()

// //var let const
// let human = 'Brother'
// human = 'Litter Brother'

// if (2 > 1) {
//     let fish = 'Tuna'
//     console.log(human); //1
//     console.log(fish); //2
// }

// console.log(human); //3
// // console.log(fish); //4

// //Random with timeout In
// let lyricArray = [
//     'แงงๆ',
//     'ลาลาๆ',
//     'ฉันจะพาเธอลอย',
//     'ไปในต่างโลก',
// ];

// let randomButton = document.getElementById('random')
// let stopButton = document.getElementById('stop')
// let output = document.getElementById('output')

// let timeoutID = 0;

// randomButton.addEventListener('click', () => {
//     // setTimeout(() => { //when click
//     //     let n = lyricArray.length
//     //     let index = Math.floor(Math.random() * n)
//     //     let lyric = lyricArray[index]
//     //     output.inert = lyric;
//     // }, 3000)

//     timeoutID = setInterval(() => { //random loop
//         let n = lyricArray.length
//         let index = Math.floor(Math.random() * n)
//         let lyric = lyricArray[index]
//         output.inert = lyric;
//     }, 3000)

//     stopButton.addEventListener('click', () => {
//         clearInterval(timeoutID)
//     })
// });

// Click Change Color
// let messages = document.querySelector('.message')
// let spoilButton = document.querySelector('.spoil-button')

// spoilButton.addEventListener('click', () => {
//     if (messages.style.display == 'none') {
//         messages.style.display = 'block';
//     } else {
//         messages.style.display = 'none';
//     }
// })

// let messages = document.querySelector('.message')
// messages.classList.replace('orange-box', 'green-box')

// Change Theme Light/Dark
// let body = document.body;
// let themeButton = document.querySelector('.theme-button')

// themeButton.addEventListener('click', () => {
//     body.classList.toggle('dark-theme');
// });

//Change Image SO GOOD
// let thumbnailImages = document.querySelectorAllector('.thumbnail-image')
// let bigImage = document.querySelector('.big-image')

// function changeImage(event) {
//     bigImage.scr = event.target.src;
// }

// function removeImage() {
//     bigImage.src = '';
// }

// thumbnailImages.addEventListener('click', changeImage => { });
// thumbnailImages.addEventListener('mouseover', changeImage => { });
// thumbnailImages.forEach((thumbnail) => {
//     thumbnail.addEventListener('mouseover', changeImage);
//     thumbnail.addEventListener('mouseout', changeImage);
// });

// form check SO GOOD
// let answers = document.querySelector('.answer');
// let errorMessage = document.querySelector('.error-message');
// let answerForm = document.querySelector('.answer-form')

// function checkAnswers(event) {
//     let tooLong = false;
//     answers.forEach((answer) => {
//         if (answer.value.length > 10) {
//             tooLong = true;
//         }
//     });
//     if (tooLong) {
//         errorMessage.style.display = 'block';
//         console.log('Too Long!');
//         event.preventDefault();

//     }
// }

// answers.forEach((answer) => {
//     answer.addEventListener('input', checkAnswers);
// })

// answerForm.addEventListener('submit', checkAnswers);

//Event Check Keyboard
// let imageIndex = 0;
// let imageLinks = ['rabbit.jpg', 'panda.jpg', 'bird.jpg'];
// let image = document.querySelector('.image');

// function prevImage() {
//     if (imageIndex > 0) {
//         imageIndex--;
//         image.src = imageLinks[imageIndex];
//     }
// }

// function nextImage() {
//     if (imageIndex < imageLinks.length - 1) {
//         imageIndex++;
//         image.src = imageLinks[imageIndex];
//     }
// }

// function keyUp(event) {
//     event.key
//     console.log(event.key);

//     if (event.key === 'ArrowLeft') {
//         prevImage();
//     }
//     else if (event.key === 'ArrowRight') {
//         nextImage();
//     }
// }

// document.addEventListener('keyup', keyUp);

// Event Scroll SO GOOD
// let topHeader = document.querySelector('.top-header');
// let lastScrollY = 0;

// window.addEventListener('scroll', () => {
//     if (window.scrollY > lastScrollY) {
//         topHeader.classList.add('hide');
//     } else {
//         topHeader.classList.remove('hide');
//     }
//     lastScrollY = window.scrollY;
// });

// Event Drag and drop pic for get new pic
// const pets = document.querySelectorAll('.pets');
// const equipSlot = document.querySelector('.equip-slot');
// const equipPet = document.querySelector('.equip-pet');

// // 1.Drag
// function dragPet(event) {
//     event.dataTransfer.setData('text/plain', event.target.id);
//     console.log(event.target.id);
// }
// pets.forEach((pets) => {
//     pets.addEventListener('dragstart', dragPet);
// });

// // 2.Drop
// function dropOverPet(event) {
//     event.preventDefault();
// }

// function dropPet(event) {
//     event.preventDefault();
//     const id = event.dataTransfer.getData('text/plain');
//     const image = document.querySelector('#' + id);
//     equipPet.scr = image.src;
// }
// equipSlot.addEventListener('dragover', dropOverPet);
// equipSlot.addEventListener('drop', dropPet);

// dom get html attribute
// const rabbitImg = document.querySelector('.content');
// const jsLink = document.querySelector('.js-link');
// const textInput = document.querySelector('.text-input');

// 1. Classic
// textInput.getAttribute('hidden-message');
// console.log(textInput.getAttribute('hidden-message'));

// textInput.setAttribute('hidden-message', 'set New!');

// console.log(rabbitImg.src);
// console.log(jsLink.href);
// console.log(textInput.hidedenMessage);

// 2. Modern
// console.log(textInput.dataset.hiddenMessage);
// textInput.dataset.hiddenMessage = 'set New!';


// Dom Add Remove HTML
// todoTitle = document.querySelector('.todo-title');
// addTodoButton = document.querySelector('.add-todo');
// todoList = document.querySelector('.todo-list');

// function removeTodo(event) {
//     event.target.parentNode.remove();
// }

// function addTodo() {
//     // let divHtml = '<div class="todo">';
//     // divHtml += '<h3>' + todoTile.value + '</h3>';
//     // divHtml += '<button type="button" class="remove-todo">Delete</button>';
//     // divHtml += '</div>';
//     // todoList.innerHTML += divHtml;

//     // div
//     const todo = document.createElement('div');
//     todo.classList.add('todo');

//     // h3
//     const h3 = document.createElement('h3');
//     h3.innerHTML = todoTitle.value;

//     // button
//     const button = document.createElement('button');
//     button.type = 'button';
//     button.classList.add('remove-todo');
//     button.innerHTML = 'Delete';
//     button.addEventListener('click', removeTodo);

//     // h3, button => div
//     todo.append(h3, button)

//     // div => todo list
//     todoList.prepend(todo);
// }

// addTodoButton.addEventListener('click', addTodo);

