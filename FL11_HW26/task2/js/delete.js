const $list = $(".list");
$list.on("click", "button.item-remove", function deleting(){
    this.parentNode.parentNode.removeChild(this.parentNode);
});
