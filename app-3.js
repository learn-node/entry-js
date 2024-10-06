// Напишіть функцію delay(ms), яка повертає проміс, що виконується через ms мілісекунд.

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

wait(1000).then(() => console.log('1000 Hello!'));
wait(500).then(() => console.log('500 Hello!'));

(async() => {
    await wait(250);
    console.log('250 Hello!');
})();