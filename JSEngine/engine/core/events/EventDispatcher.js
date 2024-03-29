/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function EventDispatcher(){
    this._listeners  = {};
};


EventDispatcher.prototype.addListener = function(type, listener){
    if (typeof this._listeners[type] == "undefined"){
        this._listeners[type] = [];
    }

    this._listeners[type].push(listener);
};

EventDispatcher.prototype.dispatchEvent = function (event){
    if (typeof event == "string"){
        event = {
            type: event
        };
    }
    
    if (!event.target){
        event.target = this;
    }

    if (!event.type){  //false
        throw new Error("Event object missing 'type' property.");
    }
    if (this._listeners[event.type] instanceof Array){
        var listeners = this._listeners[event.type];
        for (var i=0, len=listeners.length; i < len; i++){
            listeners[i].call(this, event);
        }
    }
};

EventDispatcher.prototype.removeListener = function (type, listene){
    if (this._listeners[type] instanceof Array){
        var listeners = this._listeners[type];
        for (var i=0, len=listeners.length; i < len; i++){
            if (listeners[i] === listener){
                listeners.splice(i, 1);
                break;
            }
        }
    }
};