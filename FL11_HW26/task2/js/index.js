const todos = [
  {
    text: "Buy milk",
    done: false
  },
  {
    text: "Play with dog",
    done: true
  }
];

const $list = $(".list");
const $input = $("#add-input");
const $add = $("#add-submit");


$add.click(function(){
  //alert("Add was clicked.");
    this.todos +=  [
    {
      text: "Buy milk",
      done: false
    }

];

});
console.log(todos);
