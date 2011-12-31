/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function TetrisSpatialManager(){
    
};

TetrisSpatialManager.prototype = new SpatialManager();



TetrisSpatialManager.prototype.screenToCoordinate = function(point){
    var newPoint = new Point(0, 0);
    newPoint.x = point.x/TetrisSpatialManager.stepSize.stepSize;
    newPoint.y = point.y/TetrisSpatialManager.stepSize.stepSize;
    return point;
}

TetrisSpatialManager.prototype.coordinateToScreen = function(point){
    var newPoint = new Point(0, 0);
    newPoint.x = point.x*TetrisSpatialManager.stepSize.stepSize;
    newPoint.y = point.y*TetrisSpatialManager.stepSize.stepSize;
    console.log(newPoint.x)
    return point;
}

TetrisSpatialManager.stepSize = 10;


