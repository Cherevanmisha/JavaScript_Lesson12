// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок
//     виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться
//     всі коментарі поточного поста



let elementsByClassName = document.getElementsByClassName('users')[0];


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const postElement of users) {
            let divElement = document.createElement('div');
            divElement.innerText = `${postElement.id} ${postElement.name} ${postElement.username} `



            let buttonElement = document.createElement('button' );
            buttonElement.innerText = 'open' ;
            buttonElement.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/users/${postElement.id}/posts`)
                    .then(response => response.json())
                    .then(posts => {
                     let coment = document.createElement('div');
                        divElement.appendChild(coment)
                        for (const comentElement of posts) {
                            let com = document.createElement('div');
                            com.innerText = comentElement.body;
                            coment.appendChild(com);


                            let htmlButtonElement = document.createElement('button');
                            htmlButtonElement.innerText = 'add';
                            htmlButtonElement.onclick = function () {
                                fetch(`https://jsonplaceholder.typicode.com/posts/${postElement.id}/comments`)
                                    .then(response => response.json())
                                    .then(posts => {

                    let htmlDivElement = document.createElement('div');
                                        divElement.appendChild(htmlDivElement)
                                        for (const comElement of posts) {
                                            let htmlDivElement1 = document.createElement('div');
                                        }
                    });
            };
            divElement.appendChild(buttonElement)
            elementsByClassName.append(divElement)
        }

    });
