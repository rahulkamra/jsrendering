/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function Entity(type){
    this.type = type;
    this.isFixed = true;
    this.fillColor = "red";
}

Entity.prototype = new DisplayObject();


