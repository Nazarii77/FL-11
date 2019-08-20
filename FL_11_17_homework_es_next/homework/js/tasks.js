function maxElement(arrayToProcess) {
    return Math.max(...arrayToProcess);
}

const array = [1, 2, 3, 4, 56, 7, 8, 76, 5, 241, 5, 356, 567, 2];

console.log(maxElement(array));




function copyArray(arrayToProcess) {
    return [...arrayToProcess];
}

const array2 = [1, 2, 3];
const copiedArray = copyArray(array2);
console.log(array2, copiedArray);
console.log(array2 === copiedArray);



function addUniqueId(obj) {
    const clone = Object.assign({}, obj, {
        'id': Symbol()
    });
    return clone;
}


const target1 = {
    name: 123
};
const target2 = {
    name: 123
};

console.log(addUniqueId(target2).id === addUniqueId(target1).id);




function regroupObject(obj) {
    let newObj = {
        university: obj.details.university,
        user: {
            age: 11,
            firstaname: obj.name,
            id: 1
        }
    };
    return newObj;

}

const oldObj = {
    name: 'someone',
    details: {
        id: 1,
        age: 11,
        university: 'UNI'
    }
};

console.log(regroupObject(oldObj));




function findUniqueElements(array) {
    let unique = [...new Set(array)];
    return unique;
}

const array = [1, 1, 23, 3, 4, 5, 6, 5, 4, 23, 2, 1, 1, 1, 1, 1]

console.log(findUniqueElements(array));




function hideNumber(phonenumber) {
    phonenumber = phonenumber.slice(-4);
    return phonenumber.padStart(10, '*');;


}

const phonenumber = '0123456789'

console.log(hideNumber(phonenumber));




function throwErrorIfMissing() {
        throw new Error('Missing property');
    }

function add(a = throwErrorIfMissing() , b = throwErrorIfMissing()) {
    return a + b;
}

console.log(add(1, 3));

console.log(add(1));