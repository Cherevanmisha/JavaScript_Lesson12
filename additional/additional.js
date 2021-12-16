// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться
//     всі коментарі поточного поста



let u1 = {
    name: 'vasya',
    greeting: function (msg, a, b) {
        console.log(`${msg} my name is ${this.name}`);
    }
}
let u2 = {name: 'anton'};
u1.greeting.call(u2, 'hi', 'asda', 'qwe');
u1.greeting.apply(u2, ['hi', 'asda', 'qwe']);