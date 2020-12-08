/* J-LESS */

/**
 * Seletor de elementos 
 * (.) para selecionar classes
 * (#) para selecionar elementos
 * @param {*} string Elemento HTML
 */
function $(string){
    let string = new String(_string);
    let mode;

    string.search(".") == 0 ? mode = "getElementsByClassName" : 0;
    string.search("#") == 0 ? mode = "getElementById" : 0;

    switch(mode){
        case "getElementById":
            let element = document.querySelector(string);

            return element;
        break;
        case "getElementsByClassName":
            let elements = document.querySelectorAll(string);

            return elements;
        break;
        default: 
            let tag = string;
            let elements = document.querySelectorAll(tag);

            return elements;
    }    
}


// Event 
HTMLElement.prototype.on = function(event, callback){
    this.addEventListener(event, callback);
}


// Disparador de eventos 
// Utilizado para disparar eventos sozinhos
function eventFire(el, etype){
    if (el.fireEvent) {
        el.fireEvent('on' + etype);
    } else {
        let evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj);
    }
}