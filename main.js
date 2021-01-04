const listContent = document.querySelector('.list-content ul');
const input = document.querySelector('.input');
const listContentLi = document.querySelector('.list-ul').getElementsByTagName('li');
const btn = document.querySelector('.btn');


input.addEventListener('keyup', (e) => {

    if (input.value.length >= 3 && e.keyCode === 13) {
        let createLiElement = document.createElement('li');
        createLiElement.textContent = input.value;

        const listAll = document.querySelectorAll('li');
        listAll.forEach(val => {
            if (val.textContent === input.value) {
                createLiElement.textContent = input.value + ' - item is already in the list';
                createLiElement.style.color = 'blue';
                setTimeout(function () {
                    createLiElement.remove();
                }, 3000);
            };
        });

        listContent.appendChild(createLiElement);
        input.value = '';
    };
});

btn.addEventListener('click', () => {
    if (input.value.length >= 3) {
        let createLiElement = document.createElement('li');
        createLiElement.textContent = input.value;
        listContent.appendChild(createLiElement);
        input.value = '';
    };
})

listContent.addEventListener('click', () => {

    for (let list of listContentLi) {
        list.addEventListener('click', spanX)
    };
});

function spanX() {

    let temp = this.classList.toggle('spanX');

    if (this.classList.contains('spanX')) {
        let span = document.createElement('span');
        span.innerHTML = ' &#10008';
        span.style.cursor = 'pointer';
        this.appendChild(span);

        span.addEventListener('click', () => {
            span.parentElement.remove();
        })
    } else {
        // this.querySelectorAll('span')[0].remove();
        this.getElementsByTagName('span')[0].remove();
    }
}