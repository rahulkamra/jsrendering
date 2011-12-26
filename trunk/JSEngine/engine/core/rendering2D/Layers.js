function Layers() {
	var _layers = [];
	var _layersObj = {};

	this.reset = function() {
		for(var id in _layersObj) {
			delete _layersObj[id];
		}
		_layersObj = new Object();
	}

	this.draw = function(canvas, mouseCanvas, cameraX, cameraY) {
		var len = _layers.length;
		for(var i = 0; i < len; i++) {
			getAt(i).draw(canvas, mouseCanvas, cameraX, cameraY);
		}
	}

	this.tick = function(dt) {
		var len = _layers.length;
		for(var i = 0; i < len; i++) {
			getAt(i).tick(deltaTime);
		}
	}
	
	this.addObject  = function (object,layerId){
		
	}
	
}