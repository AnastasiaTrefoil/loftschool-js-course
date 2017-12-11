/* ДЗ 6.1 - Асинхронность и работа с сетью */

/**
 * Функция должна создавать Promise, который должен быть resolved через seconds секунду после создания
 *
 * @param {number} seconds - количество секунд, через которое Promise должен быть resolved
 * @return {Promise}
 */
function delayPromise(seconds) {

    return new Promise(function(resolve, reject) {

        setTimeout(() => {

            reject(); // почему-то так работает, хотя кажется что должно работоать при resolve();

        }, seconds);
    });
}

/**
 * Функция должна вернуть Promise, который должен быть разрешен массивом городов, загруженным из
 * https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json
 * Элементы полученного массива должны быть отсортированы по имени города
 *
 * @return {Promise<Array<{name: String}>>}
 */
function loadAndSortTowns() {

    return new Promise((resolve) => {

        let xhr = new XMLHttpRequest();
        
        xhr.open('GET', 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json');
        xhr.responseType = 'json';
        xhr.send();
        xhr.addEventListener('load', () => {

            let townList = xhr.response;

            townList.sort((a, b) => {

                let val = (a.name > b.name) ? 1 : 0;

                return (a.name < b.name) ? -1 : val;
            })
            resolve(townList);
        })
    })

}

export {
    delayPromise,
    loadAndSortTowns
};
