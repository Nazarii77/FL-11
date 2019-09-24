let myToDoApp = (function() {
    const $list = $(".list");
    let btnCtrls = {};

    // learning how to make plugin
    $.fn.pluginDone = function () {
        this.addClass("done");
    };

    let pluginDoneUsage = function (event) {
        $target = $(event.target);
        $target.pluginDone();  //this is plugin usage
    }

    let deleting = function () {
        this.parentNode.parentNode.removeChild(this.parentNode);
    }

    let addToDoClick = function(event) {
        let $input = $("#add-input");
        if ($input.val() == '') {$input.val('lazy todo')}
        let node = document.createTextNode($input.val());
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
        $input.val('');
        $list.append(li);
    };

    let bindBtnControls = function () {
        var self = {};
        self.myadd =  $("#add-submit");
        return self;
    };

    let bindFunctions = function() {
        // you can use jQuery
        //$("#add-submit").on("click", addToDoClick)
        $list.on("click", "button.item-remove", deleting);
        $list.on("click", "span.item-text", pluginDoneUsage);
        // but we have the controls object to use, so instead
        btnCtrls.myadd.on('click', addToDoClick );
    };

    let init = function () {
        btnCtrls = bindBtnControls();
        bindFunctions();
    };
    return {
        init: init
    };
})();

//usage
$("document").ready(function () {
    myToDoApp.init();
});
