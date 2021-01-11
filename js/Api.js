const cars = [{
        brand: 'Nissan Tsuru',
        model: '6511yh',
        color: '#hh5432',
        year: '2011',
        price: 10000,
        picture: 'https://cdn.pixabay.com/photo/2015/05/28/23/12/auto-788747_960_720.jpg',
    },
    {
        brand: 'Chevrolet Gli',
        model: '2001gt',
        color: '#hh5432',
        year: '2001',
        price: 100,
        picture: 'https://cdn.pixabay.com/photo/2015/05/28/23/12/auto-788747_960_720.jpg',
    },
    {
        brand: 'Ferrari',
        model: '476ht',
        color: '#hh5432',
        year: '2001',
        price: 100000,
        picture: 'https://cdn.pixabay.com/photo/2015/05/28/23/12/auto-788747_960_720.jpg',
    },
    {
        brand: 'Chevrolet',
        model: '2561yt',
        color: '#hh5432',
        year: '2001',
        price: 100000,
        picture: 'https://cdn.pixabay.com/photo/2015/05/28/23/12/auto-788747_960_720.jpg',
    },
];

function recursiveFor(i, array, fn) {
    if (i < array.length) {
        fn(array[i], i);
        recursiveFor(i + 1, array, fn);
    }
}

function actionEach(element, i) {
    console.log(element.brand + " " + i)
}

function each(array, fn) {
    recursiveFor(0, array, fn);
}

function actionFilter(element) {
    return element.price < 100000;
}

function customFilter(array, fn) {
    let filter = [];
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            filter.push(array[i])
        }
    }
    return filter;
}

function actionMap(element) {
    return Math.sqrt(element.price);
}

function customMap(array, fn) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(fn(array[i]));
    }
    return result;
}

function actionFind(element) {
    return element.price == 100;
}

function customFind(array, fn) {
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            return array[i];
        }
    }
}

function actionFind(element) {
    return element.price == 10000;
}

function customFind(array, fn) {
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            return array[i];
        }
    }
}

function actionFindIndex(element) {
    return element.price == 100;
}

function customFindIndex(array, fn) {
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            return i;
        }
    }
}

function actionContain(element, compare) {
    return element.model == compare;
}

function customContain(compare, array, fn) {
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i], compare)) {
            return true;
        }
    }
}
each(cars, actionEach);
console.log(customFilter(cars, actionFilter));
console.log(customMap(cars, actionMap));
console.log(customFind(cars, actionFind));
console.log(customFindIndex(cars, actionFindIndex));
console.log(customContain('6511yh', cars, actionContain));