function Layers() {
    this._layers = new Array();
    this._layersObj = {};
};

Layers.prototype.reset = function() {
    for(var id in _layersObj) {
        delete _layersObj[id];
    }
    _layersObj = new Object();
};

Layers.prototype.draw = function(canvas, mouseCanvas, cameraX, cameraY) {
    var len = this._layers.length;
    for(var i = 0; i < len; i++) {
        this.getAt(i).draw(canvas, mouseCanvas, cameraX, cameraY);
    }
};

Layers.prototype.tick = function(dt) {
    var len = this._layers.length;
    for(var i = 0; i < len; i++) {
        this.getAt(i).tick(dt);
    }
};
	
Layers.prototype.addObject  = function (object,layerId){
    this.getWithId( layerId ).add( object );
};
    
Layers.prototype.addWithId = function (id){
    if ( !this._layersObj[ id ] ) {
        var layer = new Layer(id);
        this._layersObj[ id ] = layer;
        this._layers.push( layer );
    }
};
    
    
Layers.prototype.getWithId = function (id) {
    return this._layersObj[ id ];
};
    
Layers.prototype.getAt = function (index) {
    return this._layers[index ];
};       