/* ДЗ 1 - Функции */

/*
 Задание 1:

 Функция должна принимать один аргумент и возвращать его
 */
function returnFirstArgument(arg) {	
	return arg;
}
console.log(returnFirstArgument('Поехали :)'));
/*
 Задание 2:

 Функция должна принимать два аргумента и возвращать сумму переданных значений
 Значение по умолчанию второго аргумента должно быть 100
 */
function defaultParameterValue(a, b) {
	var b = b || 100;
	return a + b;	
}
console.log(defaultParameterValue(40));
/*
 Задание 3:

 Функция должна возвращать все переданные в нее аргументы в виде массива
 Количество переданных аргументов заранее неизвестно
 */
function returnArgumentsArray() {
	var arr = [];
	for (var i = 0; i < arguments.length; i++) {
		arr[i] = arguments[i];
	}
	return arr;
}
console.log(returnArgumentsArray('a', 'b', 'c', 'd'));
/*
 Задание 4:

 Функция должна принимать другую функцию и возвращать результат вызова переданной функции
 */

function returnFnResult(fn) { 
	return Fun(); 
} 
function Fun() { 
 	var arr = [2,4,6], sum = 0; 
 	for (var i =0 ; i< arr.length; i++) { 
 		sum +=arr[i]; 
 	} return sum; 
}
console.log(returnFnResult(Fun));


/*
 Задание 5:

 Функция должна принимать число (значение по умолчанию - 0) и возвращать функцию (F)
 При вызове F, переданное число должно быть увеличено на единицу и возвращено из F
 */
function returnCounter(number) {
	
	var number = number || 0;

	return function() {
		return number++;
	};
};

var result = returnCounter(7);
console.log( result() );
console.log( result() );
console.log( result() )

/*
 Задание 6 *:

 Функция должна принимать другую функцию (F) и некоторое количество дополнительных аргументов
 Функция должна привязать переданные аргументы к функции F и вернуть получившуюся функцию
 */
function bindFunction(fn, context) {

	return function() {
		return fn.apply(context, arguments);
	};
}
var user = {
	firstName: 'Пока!',
	sayHi: function() {
		console.log(this.firstName);
	}
}
var bound = bindFunction(user.sayHi, user);
bound();


export {
    returnFirstArgument,
     defaultParameterValue,
    returnArgumentsArray,
    returnFnResult,
    returnCounter,
    bindFunction
}
