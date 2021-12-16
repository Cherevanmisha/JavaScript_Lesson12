// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
//
// let elementsByClassName = document.getElementsByClassName('posts')[0];
//
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(posts => {
//         for (const postElement of posts) {
//             let divElement = document.createElement('div');
//             divElement.innerText = `${postElement.id} ${postElement.title} ${postElement.body}`
//             let buttonElement = document.createElement('button');
//             buttonElement.innerText = 'open';
//             buttonElement.onclick = function () {
//                 fetch(`https://jsonplaceholder.typicode.com/posts/${postElement.id}/comments`)
//                     .then(response => response.json())
//                     .then(posts => {
//                      let coment = document.createElement('div');
//                         divElement.appendChild(coment)
//                         for (const comentElement of posts) {
//                             let com = document.createElement('div');
//                             com.innerText = comentElement.body;
//                             coment.appendChild(com)
//
//                         }
//
//                     });
//             };
//             divElement.appendChild(buttonElement)
//             elementsByClassName.append(divElement)
//         }
//
//     });
