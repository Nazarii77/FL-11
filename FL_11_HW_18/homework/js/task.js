 


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
fetchJsonAsync('https://jsonplaceholder.typicode.com/users').then(res => console.log(res))