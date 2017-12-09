/** Со звездочкой */
/**
 * Создать страницу с кнопкой
 * При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией
 * Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 * Запрощено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/**
 * homeworkContainer - это контейнер для всех ваших домашних заданий
 * Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер
 *
 * @example
 * homeworkContainer.appendChild(...);
 */
let homeworkContainer = document.querySelector('#homework-container');

/**
 * Функция должна создавать и возвращать новый div с классом draggable-div и случайными размерами/цветом/позицией
 * Функция должна только создавать элемент и задвать ему случайные размер/позицию/цвет
 * Функция НЕ должна добавлять элемент на страницу
 *
 * @return {Element}
 */

function createDiv() {

    let newDiv = document.createElement('DIV');

    function SetRandomSize(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function SetRandomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    let widthSise = SetRandomSize(10, 500);
    let heightSise = SetRandomSize(100, 500);
    let top = SetRandomSize(50, 200);
    let left = SetRandomSize(50, 500);

    newDiv.classList.add('draggable-div');
    newDiv.style.position = 'relative';
    newDiv.style.width = widthSise + 'px';
    newDiv.style.height = heightSise + 'px';
    newDiv.style.backgroundColor = SetRandomColor();
    newDiv.style.top = top + 'px';
    newDiv.style.left = left + 'px';

    return newDiv;

}

/**
 * Функция должна добавлять обработчики событий для перетаскивания элемента при помощи drag and drop
 *
 * @param {Element} target
 */
function addListeners(target) {

    target.onmousedown = function(e) {

        target.style.cursor = 'pointer';
        target.style.position = 'absolute';

        moveAt(e);

        document.body.appendChild(target);
        target.style.xIndex = 1000;

        function moveAt(e) {

            target.style.top = e.pageY - target.offsetHeight / 2 + 'px';
            target.style.left = e.pageX - target.offsetWidth / 2 + 'px';
        }

        document.onmousemove = function(e) {

            moveAt(e);
        }

        target.onmouseup = function() {

            document.onmousemove = null;
            target.onmouseup = null;
        }
    }
}

let addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function() {
    // создать новый div
    let div = createDiv();

    // добавить на страницу
    homeworkContainer.appendChild(div);
    // назначить обработчики событий мыши для реализации d&d
    addListeners(div);
    // можно не назначать обработчики событий каждому div в отдельности, а использовать делегирование
    // или использовать HTML5 D&D - https://www.html5rocks.com/ru/tutorials/dnd/basics/
});

export {
    createDiv
};
