/* J-LESS */

//Selector
function _$(_string){
    var string = new String(_string);
    var mode;

    string.search(".") == 0 ? mode = "getElementsByClassName" : 0;
    string.search("#") == 0 ? mode = "getElementById" : 0;

    switch(mode){
        case "getElementById":
            var element = document.querySelector(string);

            return element;
        break;
        case "getElementsByClassName":
            var elements = document.querySelectorAll(string);

            return elements;
        break;
        default: 
            var tag = string;
            var elements = document.querySelectorAll(tag);

            return elements;
    }    
}


// Event 
HTMLElement.prototype.on = function(event, callback){
    this.addEventListener(event, callback);
}

function eventFire(el, etype){
    if (el.fireEvent) {
        el.fireEvent('on' + etype);
    } else {
        var evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj);
    }
}