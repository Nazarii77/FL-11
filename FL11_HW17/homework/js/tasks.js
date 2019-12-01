function maxElement(arrayToProcess) {
    return Math.max(...arrayToProcess);
}

function copyArray(arrayToProcess) {
    return [...arrayToProcess];
}

function addUniqueId(obj) {
    const clone = Object.assign({}, obj, {
        'id': Symbol()
    });
    return clone;
}

function regroupObject(obj) {
    let newObj = {
        university: obj.details.university,
        user: {
            age: obj.details.age,
            firstaname: obj.name,
            id: obj.details.id
        }
    };
    return newObj;
}


function findUniqueElements(array) {
    let unique = [...new Set(array)];
    return unique;
}


function hideNumber(phonenumber) {
    phonenumber = phonenumber.slice(-4);
    return phonenumber.padStart(10, '*');;
}


function throwErrorIfMissing() {
    throw new Error('Missing property');
}

function add(a = throwErrorIfMissing(), b = throwErrorIfMissing()) {
    return a + b;
}

sortArrayOfObjects = (arr, key) => {
    return arr.sort((a, b) => {
        if (a[key].toLowerCase() < b[key].toLowerCase()) {
            return -1;
        }
        if (a[key].toLowerCase() > b[key].toLowerCase()) {
            return 1;
        }
        return 0;
    });
};

function getNames(obj) {
    var arr = [];
    for (var i = 0; i < obj.length; i++) {
        arr.push(obj[i].name);
    }
    return arr;
}

function fetchJson(url) {

    return fetch(url)
        .then(request => request.text())
        .then((text) => {
            var obj = JSON.parse(text);
            var sKey = 'name';
            obj = sortArrayOfObjects(obj, sKey);
            return getNames(obj);
        })
        .catch(error => console.log(`ERROR: ${error.stack}`));
}

async function fetchJsonAsync(url) {
    try {
        const request = await fetch(url);
        const text = await request.text(); {
            var obj = JSON.parse(text);
            var sKey = 'name';
            obj = sortArrayOfObjects(obj, sKey);
            return getNames(obj);
        }
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}