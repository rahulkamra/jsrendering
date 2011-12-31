function DisplayObject(id,spatialManager){
    this.id = id;
    this._x = 0;
    this._y = 0;
    this._screenX = 0;
    this._screenY = 0;
    
    this._width = 0;
    this._height = 0;

    this.alpha = 0;
    this.isAnimated = false;
    this.isOver = false;

    this.mainCanvas = document.createElement("canvas");
    this.mainCanvas.width = this.width;
    this.mainCanvas.height = this.height;
    this.mainCtx = this.mainCanvas.getContext(Settings.RENDERING_TYPE);
    
    this.isPositionInvalidated = false;
    this.isBitmapInvalidated = true;
    this.isSizeInvalidated = true;
    
    if(!spatialManager)
       this.spatialManager = new DefaultSpatialManager();
    else
        this.spatialManager = spatialManager

};

DisplayObject.prototype.update = function(){

};

DisplayObject.prototype.draw = function( canvas, mouseCanvas, cameraX, cameraY, mouseCullX, mouseCullY, mouseCullW, mouseCullH){
    if(!canvas){
        return;
    }
    if(this.isSizeInvalidated){
        this.invalidateSize();
    }
    //bitmap is always invalidated after size , because image should be drawn when the size is set
    if(this.isBitmapInvalidated){
        this.invalidateBitmap();
    }
    if(this.isPositionInvalidated){
        this.invalidatePosition();
    }
    
    
    this.onDraw(canvas, mouseCanvas, cameraX, cameraY, mouseCullX, mouseCullY, mouseCullW, mouseCullH);
};

DisplayObject.prototype.onDraw = function ( canvas, mouseCanvas, cameraX, cameraY, mouseCullX, mouseCullY, mouseCullW, mouseCullH){
    
}

DisplayObject.prototype.toString = function(){
    return "[DisplayObject]";
};
DisplayObject.prototype.setDestroyCallback = function(func){
    this._destroyCallback = func;
};

DisplayObject.prototype.setPosition = function(point){
    this._x = point.x;
    this._y = point.y;
    this.isPositionInvalidated = true;
}

/**
 * 
 */
DisplayObject.prototype.setWidth = function(_width){
    this._width = _width;
    this.isSizeInvalidated = true;
};
DisplayObject.prototype.getWidth = function(){
    return this._width;
};

DisplayObject.prototype.setHeight = function(_height){
    this._height = _height;
    this.isSizeInvalidated = true;
};

DisplayObject.prototype.getHeight = function(){
    return this._height;
};

DisplayObject.prototype.invalidatePosition = function(){
    console.log(this.spatialManager);
    var screenPoint = this.spatialManager.coordinateToScreen(new Point(this._x, this._y));
    this._screenX = screenPoint.x;
    this._screenY = screenPoint.y;
    this.isPositionInvalidated = false;
};
DisplayObject.prototype.invalidateSize = function(){
    if(!this.mainCanvas){
        console.log("CAnvas not defined");
    }
    this.mainCanvas.width = this._width;
    this.mainCanvas.height = this._height;
    this.isSizeInvalidated = false;
};
DisplayObject.prototype.invalidateBitmap = function(){
    this.isBitmapInvalidated = false;
};