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

 const addNode = document.getElementById('root');

 let headingAdd = document.createElement('h1');
 headingAdd.setAttribute('id', 'add-modify');
 let headingAddtext = document.createTextNode('Edit user');
 headingAdd.appendChild(headingAddtext);

 let divadd = document.createElement('div');
 divadd.setAttribute('id', 'adddiv');
 divadd.appendChild(headingAdd);

 let inputadd = document.createElement('input');
 inputadd.setAttribute('class', 'add-input');
 inputadd.setAttribute('id', 'userNameInput');

 let savebtn = document.createElement('button');
 savebtn.setAttribute('id', 'save-btn');
 savebtn.setAttribute('onclick', 'addNewUser(this)');
 savebtn.innerHTML = 'Save changes';



 let cancelebtn = document.createElement('button');
 cancelebtn.setAttribute('id', 'cancel-btn');
 cancelebtn.setAttribute('onclick', 'CancelAddUser()');
 cancelebtn.innerHTML = 'Cancel';

 divadd.appendChild(inputadd);
 divadd.appendChild(cancelebtn);
 divadd.appendChild(savebtn);

 addNode.appendChild(divadd);
 document.getElementById('adddiv').style.display = 'none';


 let copiedList = [];
 let objectToUpdate = {};
 let postsGlobal = [];
 let relevantCommentsGlobal = [];
 let allCommentsGlobal = [];

 const loadingicon = document.getElementById("loadingicon");

 function getByValue(arr, value) {

     var result = [];

     arr.forEach(
         function(o) {
             if (o.postId === value)
                 result.push(o);
         }
     );
     return result;

 }

 function displayPosts() {
 
     let ul = document.createElement('ul');
     ul.setAttribute('id', 'posts');

     for (var i = 0; i < postsGlobal.length; i++) {
         let li = document.createElement('li');
         li.setAttribute('class', 'li-posts');
         let label = document.createElement('label');
         label.setAttribute('class', 'label-class'); 
         label.setAttribute('id', postsGlobal[i].id);
         let textrecovered = document.createTextNode(postsGlobal[i].body);
         label.appendChild(textrecovered);

         li.appendChild(label);
         ul.appendChild(li);

         let p = document.createElement('p');
         let ptext = document.createTextNode('Comments to this post:');
         p.appendChild(ptext);
         ul.appendChild(p);

         for (var j = 0; j < relevantCommentsGlobal.length; j++) {
             if (postsGlobal[i].id === relevantCommentsGlobal[j].postId) {
                 let li2 = document.createElement('li');
                 li2.setAttribute('class', 'ol-comments');
                 let commentLabel = document.createElement('label');
                 commentLabel.setAttribute('class', 'label-class'); 
                 commentLabel.setAttribute('id', relevantCommentsGlobal[j].id);
                 let textrecoveredComment = document.createTextNode(relevantCommentsGlobal[j].body);
                 commentLabel.appendChild(textrecoveredComment);
                 li2.appendChild(commentLabel);
                 ul.appendChild(li2);
             }
         }

         divadd.appendChild(ul);
     }

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
         copiedList.push(obj[i]);
         addUser(obj[i].name, obj[i]);
     }
     getallLogos();
     return arr;
 }
 async function fetchJsonAsync(url) {
     try {
         showLoading();
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

 function updateUser(user) {
     showLoading();
     var id = user.id;
     fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
             method: 'PUT',
             body: JSON.stringify({
                 id: id,
                 name: user.name,
                 username: user.username,
                 email: user.email

             }),
             headers: {
                 "Content-type": "application/json; charset=UTF-8"
             }
         })
         .then(response => response.json())
         .then(json => console.log(json))
 }

 function deleteOnServer(id) {
     showLoading();
     fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
         method: 'DELETE'
     })
 }

 async function getPosts(userId) {
     postsGlobal = [];
     try {
         showLoading();
         const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
         const text = await posts.text(); {
             var objPosts = JSON.parse(text);

             for (var i = 0; i < objPosts.length; i++) {
                 postsGlobal.push(objPosts[i]);
                 getComments(objPosts[i]);
             }
         }
     } catch (error) {
         console.log(`ERROR: ${error.stack}`);
     }

 }

 async function getComments(post) {

     try {
         showLoading();
         if (typeof post !== 'undefined') {
             let postId = post.id;
             const comments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
             const text = await comments.text(); {
                 var objComments = JSON.parse(text);
                 for (var i = 0; i < objComments.length; i++) {
                     relevantCommentsGlobal.push(objComments[i]);
                 }

             }

         } else {
             const allcomments = await fetch(`https://jsonplaceholder.typicode.com/comments`);
             const text = await allcomments.text(); {
                 var objComments = JSON.parse(text);
                 for (var i = 0; i < objComments.length; i++) {
                     allCommentsGlobal.push(objComments[i]);
                 }
             }
         }

     } catch (error) {
         console.log(`ERROR: ${error.stack}`);
     }
     showLoading();
 }


 function displayList() {
     fetchJsonAsync('https://jsonplaceholder.typicode.com/users').then(res => res);
 }

 window.onload = function() {
     displayList();
 }

 function addUser(name, obj) {
     let li = document.createElement('li');
     li.setAttribute('class', 'li-uncheck');
     let label = document.createElement('label');
     label.setAttribute('class', 'label-class');
     label.setAttribute('onclick', 'editlabel(this)'); 
     label.setAttribute('id', obj.id);
     let textrecovered = document.createTextNode(name);
     label.appendChild(textrecovered);
     let deletecheckbox = document.createElement('img');
     deletecheckbox.setAttribute('src', 'assets/img/remove-s.jpg');
     deletecheckbox.setAttribute('class', 'deleteimg');
     deletecheckbox.setAttribute('onclick', 'deleteToDO(this)');
     label.appendChild(deletecheckbox);

     li.appendChild(label);
     ul.appendChild(li);

 }

 function showaddfunc(e) {
     document.getElementById('maindiv').style.display = 'none';
     document.getElementById('adddiv').style.display = 'block';
     document.getElementById('add-modify').innerHTML = 'Add user';
     addSwitchMod = 'Add';
     editelement = e;
 }

 function editlabel(e) {
     let postsToDelete = document.getElementById("posts");
     if (postsToDelete !== null && postsToDelete !== undefined) {
         postsToDelete.remove();
     }
     
     if (e.parentElement.className === 'li-uncheck') {
         showaddfunc(e);
         document.getElementById('add-modify').innerHTML = 'Edit user';
         addSwitchMod = 'Mod';
         edititemtext = editelement.textContent;
         document.getElementById('userNameInput').value = edititemtext;
     }
     objectToUpdate = copiedList.find(obj => obj.id.toString() === e.id);


     Promise.all([getPosts(e.id), getComments()]);

     getPosts(e.id).then(function() {
     	 showLoading();
         getComments().then(function() {
             displayPosts();
         });
     });
 }

 function addNewUser(obj) {
     let inputValue = document.getElementById('userNameInput').value;
         editelement.textContent = inputValue;
         editelement.setAttribute('class', 'label-class');

         let deletecheckbox = document.createElement('img');
         deletecheckbox.setAttribute('src', 'assets/img/remove-s.jpg');
         deletecheckbox.setAttribute('class', 'deleteimg');
         deletecheckbox.setAttribute('onclick', 'deleteToDO(this)');
         editelement.appendChild(deletecheckbox);

         document.getElementById('maindiv').style.display = 'block';
         document.getElementById('adddiv').style.display = 'none';

         objectToUpdate.name = inputValue;
         updateUser(objectToUpdate);
 }

 function CancelAddUser() {
     document.getElementById('maindiv').style.display = 'block';
     document.getElementById('adddiv').style.display = 'none';
 }

 function deleteToDO(e) {
     //to stop click event on beneath label
     let event = window.event
     event.cancelBubble = true;
     if (event.stopPropagation) {
         event.stopPropagation();
     }
     let li = e.parentElement.parentElement;
     li.setAttribute('class', 'li-uncheck');
     li.setAttribute('style', 'display:none');
     var id = e.parentNode.id;
     let objToDelete = copiedList.find(obj => obj.id.toString() === id);
     deleteOnServer(id);
     e.parentNode.parentNode.removeChild(e.parentNode);
     getallLogos();
 }

 function showLoading() {
     loadingicon.className = "show";
     setTimeout(() => {
         loadingicon.className = loadingicon.className.replace("show", "");
     }, 2000);
 }

 function ajax_get(url, callback) {
     var xmlhttp = new XMLHttpRequest();
     xmlhttp.onreadystatechange = function() {
         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
             try {
                 var data = JSON.parse(xmlhttp.responseText);
             } catch (err) {
                 console.log(err.message + " in " + xmlhttp.responseText);
                 return;
             }
             callback(data);
         }
     };

     xmlhttp.open("GET", url, true);
     xmlhttp.send();
 }

 function getallLogos() {
     const listItems = document.querySelectorAll("#root #maindiv .centered #mylist li");

     for (let i = 0; i < listItems.length; i++) {
         ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function(data) {
             let logo = document.createElement('img');
             logo.setAttribute('src', data[0]["url"]);
             logo.setAttribute('class', 'user-logo');
             listItems[i].appendChild(logo);
             showLoading();
         });
     }

 }