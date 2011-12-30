
function Layer(id){
    this.id = id;
    this._objects = new Array();
    this._mouseCullX = 0;
    this._mouseCullY = 0;
};


Layer.prototype.draw = function(canvas,mouseCanvas,cameraX,cameraY){
    var maxX = canvas.width;
    //var minY:Number = 0;
    var maxY = canvas.height;
    var len = this._objects.length;
    var obj;
    var cameraX= ~cameraX + 1;
    var cameraY= ~cameraY + 1;
    var drawObj= 0;
    for ( var i = 0; i < len; i++ ) {
        obj = this._objects[ i ];
        obj.update();
        var x = obj.x + cameraX;
        var y = obj.y + cameraY;
        var w = obj.width;
        var h = obj.height;
            
        //  if ( w == 0 && h == 0 ) {
        obj.draw( canvas, mouseCanvas, cameraX, cameraY, this._mouseCullX - w, this._mouseCullY - h, this._mouseCullX + w, this._mouseCullY + h );
        drawObj++;
    //            } else {
    //                if ( x + w > 0 ) {
    //                    if ( x - w < maxX ) {
    //                        if ( y + h > 0 ) {
    //                            if ( y - h < maxY ) {
    //                                obj.draw( canvas, mouseCanvas, cameraX, cameraY, this._mouseCullX - w, this._mouseCullY - h, this._mouseCullX + w, this._mouseCullY + h);
    //                                drawObj++;
    //                            }
    //                        }
    //                    }
    //                }
    //            }
            
    }
};
    
Layer.prototype.tick = function(dt){
    var len = this._objects.length;
    var obj = {}
    for ( var i= 0; i < len; i++ ) {
        obj = this._objects[ i ];
        if ( obj.isAnimated ) {
            obj.tick( dt );
        }
    }
//  _objects.sortOn( [ "sortVal" ], Array.NUMERIC );
};
    
Layer.prototype.add = function(object){
    object.layer = this;
    this._objects.push( object );
};
Layer.prototype.remove = function(object){
    var index = this._objects.indexOf( object );
    if ( index > -1 ) {
        this. _objects.splice( index, 1 );
    }
};
    
Layer.prototype.getAt  = function (index){
    return this._objects[index];
};
    


