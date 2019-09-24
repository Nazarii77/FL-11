const $list = $(".list");
const $input = $("#add-input");
const $add = $("#add-submit");

 
$add.on( "click",function adding(){
    var node = document.createTextNode($input.val());
    let li = document.createElement('li');
    li.setAttribute('class', 'item');
    let spn = document.createElement('span');
    spn.setAttribute('class', 'item-text');
    spn.appendChild(node)
    let btn = document.createElement('button');
    btn.setAttribute('class', 'item-remove');
    btn.textContent = 'Remove';
    li.appendChild(spn);
    li.appendChild(btn);
    $input.val('') ;
    $list.append(li);
});

$list.on("click", "button.item-remove", function(){
    this.parentNode.parentNode.removeChild(this.parentNode);
});

$list.on("click", "span.item-text", function(event){
    $target = $(event.target);
    $target.addClass("done");
});

