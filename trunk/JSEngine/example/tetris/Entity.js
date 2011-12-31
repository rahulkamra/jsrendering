/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function Entity(id,spatialManager){
    this.isFixed = true;
    this.fillColor = "red";
    console.log(spatialManager,"Entity");
    DisplayObject.apply(this, [id,spatialManager]);
}
Entity.prototype = new DisplayObject();


