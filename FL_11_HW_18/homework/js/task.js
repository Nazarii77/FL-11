

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
        addUser(obj[i].name);
    }
    return arr;
}
 

async function fetchJsonAsync(url) {
     try {
        const request = await fetch(url);
        const text = await request.text(); {
            var obj = JSON.parse(text);
            //console.log(Object.values(obj)); 

            var sKey = 'name';
            obj = sortArrayOfObjects(obj, sKey);
            return getNames(obj);
        }
      } catch (error) {
          console.log(`ERROR: ${error.stack}`);
      }
}


fetchJsonAsync('https://jsonplaceholder.typicode.com/users').then(res => console.log(res));



const rootNode = document.getElementById('root');

let maindiv = document.createElement('div');
maindiv.setAttribute('id', 'maindiv');
rootNode.appendChild(maindiv);
let divaddresult = document.createElement('div');
divaddresult.setAttribute('class', 'centered');
let ul = document.createElement('ul');
ul.setAttribute('id', 'mylist');
divaddresult.appendChild(ul);
maindiv.appendChild(divaddresult);

 

function addUser(name) {
		let li = document.createElement('li');
		li.setAttribute('class', 'li-uncheck');
		let label = document.createElement('label');
		label.setAttribute('class', 'label-class');
		label.setAttribute('onclick', 'editlabel(this)');
		//label.setAttribute('for', item.id);
		//label.setAttribute('id', item.id);
		let textrecovered = document.createTextNode(name);
		label.appendChild(textrecovered);



		let deletecheckbox = document.createElement('img');
		deletecheckbox.setAttribute('src', 'assets/img/remove-s.jpg');
		deletecheckbox.setAttribute('class', 'deleteimg');
		deletecheckbox.setAttribute('onclick', 'deleteToDO(this)');
		label.appendChild(deletecheckbox);

		let incheckbox = document.createElement('input');
		incheckbox.setAttribute('class', 'checkmark');
		incheckbox.setAttribute('type', 'checkbox');
		li.appendChild(incheckbox);
		li.appendChild(label);
		ul.appendChild(li);

}

 