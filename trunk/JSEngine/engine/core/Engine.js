/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function Engine(camera){
    
    this.camera = camera;
    this.eventDispatcher = new EventDispatcher();
    
    //mouse positions
    document.onmousemove = Engine.prototype.refreshMouseXY
    this.enterFrame();
};

//later on , mouse positions should be only for engine
Engine.prototype.refreshMouseXY = function(event){
    ev = event || window.event;
    Engine.prototype.mouseX = ev.pageX;
    Engine.prototype.mouseY = ev.pageY;
};


Engine.prototype.enterFrame = function(){
    this.eventDispatcher.dispatchEvent(new GameEvent(GameEvent.ENTER_FRAME,null));
    window.requestAnimFrame(this.enterFrame.bind(this));
     if(this.camera)this.camera.onTick(1);
};



window.requestAnimFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(callback,element) {
        window.setTimeout(callback, 1000 / 60);
    };

})();
