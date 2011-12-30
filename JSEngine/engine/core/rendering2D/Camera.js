/**
 * @author rahul.kumar
 */
function Camera(cameraWidth , cameraHeight , boundsWidth,boundsHeight){
    this.cameraWidth = cameraWidth;
    this.cameraHeight = cameraHeight;
    this._boundsWidth = boundsWidth;
    this._boundsHeight = boundsHeight;
	
    this._boundsMaxX = 0;
    this._boundsMinX = 0;
    this._boundsMaxY = 0;
    this._boundsMinY = 0;   
    
    this.cameraX = 0;
    this.cameraY = 0;	
    
    this._viewPortWidth = cameraWidth;
    this._viewPortHeight = cameraHeight;
    this._baseViewPortWidth = cameraWidth;
    this._baseViewPortHeight = cameraHeight;

    this._cameraOffsetX= 0; // Places origin in center of view port.
    this._cameraOffsetY= 0; // Places origin in center of view port.

    this.backBufferCanvas = document.createElement("canvas");
    this.backBufferCanvas.width = this.cameraWidth;
    this.backBufferCanvas.height = this.cameraHeight;
    this.backBufferCtx = this.backBufferCanvas.getContext('2d');
    
    
    this.mainCanvas = document.createElement("canvas");
    this.mainCanvas.width = this.cameraWidth;
    this.mainCanvas.height = this.cameraHeight;
    this.mainCtx = this.mainCanvas.getContext('2d');
    
    
    this._zoom = 1;
    this._previousZoom = 1;
    this._layers = new Layers();
    this._objects = {};
    
    this.updateBounds();
    this.updateCameraOffset();
    
	
};

Camera.prototype.addObject = function (object,layerId){
    if (this._objects[ object.colorId ] ) {
        console.log(this+ "addObject COLLISION AT " + object.colorId);
    }
    object.setDestroyCallback(this.destroyObject );
    this._objects[ object.colorId ] = object;
    this._layers.addObject( object, layerId );;
};
    
Camera.prototype.getObjectAt = function(x,y){
    x /= _zoom;
    y /= _zoom;
    var val = _mouseCanvasData.getPixel( x, y ).toString( 16 );
    while ( val.length < 6 ) {
        val = "0" + val;
    }
    var colorId = "0xFF" + val;
    return _objects[ colorId ];
};
    
Camera.prototype.destroyObject = function(object){
    if ( _objects[ object.colorId ] ) {
        delete _objects[ object.colorId ];
    }
};
    
Camera.prototype.makeNewObjectId = function(){
    var val = _currId.toString( 16 );
    while ( val.length < 6 ) {
        val = "0" + val;
    }
    var newId = "0xFF" + val;
    _currId += 1;
    return newId;
};
    
Camera.prototype.addLayer = function( id){
    this._layers.addWithId( id );
};
    
Camera.prototype.moveCamera = function( x, y){
    this.cameraX += x / this._zoom;
    this.cameraY += y / this._zoom;
    this.clampCameraToBounds();
    this.updateCameraOffset();
};
    
Camera.prototype.setCameraSize = function( w,h){
    _baseViewPortWidth = w;
    _baseViewPortHeight = h;
    _cameraSizeIsDirty = true;
};
    
Camera.prototype.setZoom = function(val){
    if ( this._zoom != val ) {
        this._previousZoom = this._zoom;
        this._zoom = val;
        this._zoomIsDirty = true;
    }
};
    
    
Camera.prototype.updateCameraSize = function(){
    this._viewPortWidth = this._baseViewPortWidth / this._zoom;
    this._viewPortHeight = this._baseViewPortHeight / this._zoom;
    if ( this._viewPortWidth < 0 ) this._viewPortWidth = 1;
    if ( this._viewPortHeight < 0 ) this._viewPortHeight = 1;
        
    //        this.backBufferCanvas = document.createElement("canvas");
    //        this.backBufferCanvas.width = this.cameraWidth;
    //        this.backBufferCanvas.height = this.cameraHeight;
    //        this.backBufferCtx = this.backBufferCanvas.getContext('2d');
    //        if ( this._viewPortWidth < 8191 && this._viewPortHeight < 8191 && ( this._viewPortWidth * this._viewPortHeight ) < 16777215 ) {
    //            this._canvasData.dispose();
    //            this._canvasData = new BitmapData( _viewPortWidth, _viewPortHeight );
    //            _canvas.bitmapData = _canvasData;
    //            _mouseCanvasData.dispose();
    //            _mouseCanvasData = new BitmapData( _viewPortWidth, _viewPortHeight );
    //            _mouseCanvas.bitmapData = _mouseCanvasData;
    //        }
    // this._viewPortWidth = this.backBufferCanvas.width;
    // this._viewPortHeight = this.backBufferCanvas.height;
       
    //  this.mainCanvas.width  = this._viewPortWidth;
    // this.mainCanvas.height  = this._viewPortHeight;
        
    this.updateBounds();
    this.updateCameraOffset();
    this.clampCameraToBounds();
    this._cameraSizeIsDirty = false;
};
    
    
Camera.prototype.updateBounds = function(){
    if (this._viewPortWidth < this._boundsWidth ) {
        this._boundsMinX = ( this._viewPortWidth - this._boundsWidth ) * .5;
        this._boundsMaxX = ( this._boundsWidth - this._viewPortWidth ) * .5;
    } else {
        this._boundsMinX = ( this._boundsWidth - this._viewPortWidth ) * this._zoom;
        this._boundsMaxX = ( this._viewPortWidth - this._boundsWidth ) * this._zoom;
    }
    if ( this._viewPortHeight < this._boundsHeight ) {
        this._boundsMinY = ( this._viewPortHeight - this._boundsHeight ) * .5;
        this._boundsMaxY = ( this._boundsHeight - this._viewPortHeight ) * .5;
    } else {
        this._boundsMinY = ( this._boundsHeight - this._viewPortHeight ) * this._zoom;
        this._boundsMaxY = ( this._viewPortHeight - this._boundsHeight ) * this._zoom;
    }
};
    
Camera.prototype.clampCameraToBounds = function(){
    if ( this.cameraX < this._boundsMinX ) this.cameraX = this._boundsMinX;
    else if ( this.cameraX > this._boundsMaxX ) this.cameraX = this._boundsMaxX;
    if ( this.cameraY < this._boundsMinY ) this.cameraY = this._boundsMinY;
    else if ( this.cameraY >this._boundsMaxY ) this.cameraY = this._boundsMaxY;
};
    
Camera.prototype.updateCameraOffset = function(){
        
    this._cameraOffsetX = this.cameraX - ( this._viewPortWidth >> 1 );
    this._cameraOffsetY = this.cameraY - ( this._viewPortHeight >> 1 )
};
    
Camera.prototype.updateZoom = function(){
    if ( this._zoom < .01 ) {
        this._zoom = .01;
    }
    this.backBufferCtx.scale(this._zoom/this._previousZoom, this._zoom/this._previousZoom)
    //   this._canvas.scaleX = _canvas.scaleY = _zoom;
    // this._mouseCanvas.scaleX = _mouseCanvas.scaleY = _zoom;
    this._zoomIsDirty = false;
    this._cameraSizeIsDirty = true;
    console.log("Updating Zoom");
};
    
Camera.prototype.onTick = function (dt){
    this._layers.tick( dt );
    this.draw();
};
    
Camera.prototype.draw = function(){
    if (this. _zoomIsDirty ) {
        this.updateZoom();
    }
    if ( this._cameraSizeIsDirty ) {
        this.updateCameraSize();
    }
        
    // this.backBufferCtx.clearRect ( 0 , 0 , this._viewPortWidth , this._viewPortHeight);
    //_canvasData.lock();
    //_mouseCanvasData.lock();
    //_canvasData.fillRect( _canvasData.rect, 0 );
    //_mouseCanvasData.fillRect( _mouseCanvasData.rect, 0 );
    //console.log(this._cameraOffsetX)
    this._layers.draw(this.backBufferCtx, this._mouseCanvasData, this._cameraOffsetX, this._cameraOffsetY );
        
    this.mainCtx.drawImage(this.backBufferCanvas, 0, 0)
//_canvasData.unlock();
//_mouseCanvasData.unlock();
}
    
Camera.prototype.screenToIso = function( x, y){
    var x = x / _zoom + _cameraOffsetX;
    var y = y / _zoom + _cameraOffsetY;
    return new Point(x,y)
}
		
Camera.prototype.isoToDisplay = function ( isoX, isoY){
    var pos = isoToFlat( isoX, isoY );
    pos.x *= _zoom;
    pos.y *= _zoom;
    pos.x += _baseViewPortWidth * .5 - _cameraX * _zoom ;
    pos.y += _baseViewPortHeight * .5 - _cameraY * _zoom;
    return pos;
}
		
Camera.prototype.isoToFlat = function( isoX, isoY){
    return new Point( isoToFlatX( isoX, isoY ), isoToFlatY( isoX, isoY ) );
}
		
Camera.prototype.isoToFlatX = function( isoX, isoY){
    return IsoMath.isoToScreen(new Pt(isoX,isoY,_z)).x
}
		
Camera.prototype.isoToFlatY = function( isoX, isoY){
    return IsoMath.isoToScreen(new Pt(isoX,isoY,_z)).y ;
}
