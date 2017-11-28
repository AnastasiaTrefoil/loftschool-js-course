/* ДЗ 3 - работа с массивами и объеектами */

/*
 Задача 1:
 Напишите аналог встроенного метода forEach для работы с массивами
 */
function forEach(array, fn) {

    for (var i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }

}

/*
 Задача 2:
 Напишите аналог встроенного метода map для работы с массивами
 */
function map(array, fn) {

    var arr = [];

    for (var i = 0; i < array.length; i++) {
        arr.push(fn(array[i], i, array));
    }

    return arr;
}

/*
 Задача 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 */
function reduce(array, fn, initial) {
  
    var result = array[0],
        i = 1;

    if (initial) {

        result = initial;
        i = 0;

    }

    for (; i < array.length; i++) {
        result = fn(result, array[i], i, array);
    }

    return result;

}
/*
 Задача 4:
 Функция принимает объект и имя свойства, которое необходиом удалить из объекта
 Функция должна удалить указанное свойство из указанного объекта
 */
function deleteProperty(obj, prop) {

    delete obj[prop];

}

/*
 Задача 5:
 Функция принимает объект и имя свойства и возвращает true или false
 Функция должна проверить существует ли укзаанное свойство в указанном объекте
 */
function hasProperty(obj, prop) {

    return obj.hasOwnProperty(prop);
}

/*
 Задача 6:
 Функция должна получить все перечисляемые свойства объекта и вернуть их в виде массива
 */
function getEnumProps(obj) {

    var propArr = [];

    for ( var prop in obj) {
        propArr.push(prop);
    }

    return propArr;
}

/*
 Задача 7:
 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистра и вернуть в виде массива
 */
function upperProps(obj) {

    var propArr = [];

    for ( var prop in obj) {

        propArr.push(prop.toUpperCase());

    }

    return propArr;
    
}

/*
 Задача 8 *:
 Напишите аналог встроенного метода slice для работы с массивами
 */

function slice(array, from, to) {

    var newArr = [];

    from = from === undefined ? 0 : (typeof from !== 'number' ? 0 : (from < 0 ? (array.length + from < 0 ? 0 : array.length + from) : from));
    
    to = to === undefined ? array.length : (typeof to === 'number' ? (to < 0 ? array.length + to : (to > array.length ? array.length : to)) : '');
    
    if (to !== '') {

        for (; from < to; from++) {
            newArr.push(array[from]);
        }
    }

    return newArr;
}
/*
 Задача 9 *:
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {}

export {
    forEach,
    map,
    reduce,
    deleteProperty,
    hasProperty,
    getEnumProps,
    upperProps,
    slice,
    createProxy
};
