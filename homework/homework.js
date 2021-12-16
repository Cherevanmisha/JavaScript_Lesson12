
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         let htmlDivElement = document.createElement('div');
//         htmlDivElement.classList.add('htmlDivElement')
//         for (const datum of data) {
//            let divElement = document.createElement('div');
//             divElement.classList.add('datum');
//             divElement.innerHTML =`
//                         <h3>ID: ${datum.id}</h3>
//                         <h4>Name: ${datum.name}</h4>
//                         <h5>Email: ${datum.email}</h5>
//                         <h6>Body: ${datum.body}</h6>`;
//             htmlDivElement.appendChild(divElement);
//             document.body.appendChild(htmlDivElement)
//         }
//     });





//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments


// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(response => response.json())
//     .then(coments => {
//         for (const comentElement of coments) {
//             let comDivElement = document.createElement('div');
//             comDivElement.classList.add('comment')
//
//             let coment= document.createElement('div');
//             coment.innerText = `${comentElement.postId}`;
//
//             let idElement = document.createElement('div');
//             idElement.innerText = `${comentElement.id}`;
//
//             let nameElement = document.createElement('div');
//             nameElement.innerText = `${comentElement.name}`;
//
//             let emailElement = document.createElement('div');
//             emailElement.innerText = `${comentElement.email}`;
//
//             let bodyElement = document.createElement('div');
//             bodyElement.innerText = `${comentElement.body}`;
//
//
//             comDivElement.append(coment,idElement,nameElement,emailElement,bodyElement)
//             document.body.appendChild(comDivElement)
//         }
//     });


