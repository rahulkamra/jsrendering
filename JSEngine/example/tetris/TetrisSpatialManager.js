/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function TetrisSpatialManager(){
    
};

TetrisSpatialManager.prototype = new SpatialManager();



TetrisSpatialManager.prototype.screenToCoordinate = function(point){
    var newPoint = new Point(0, 0);
    newPoint.x = point.x/this.stepSize;
    newPoint.y = point.y/this.stepSize;
    return point;
}

TetrisSpatialManager.prototype.coordinateToScreen = function(point){
    var newPoint = new Point(0, 0);
    newPoint.x = point.x*this.stepSize;
    newPoint.y = point.y*this.stepSize;
    return point;
}

TetrisSpatialManager.stepSize = 10;


