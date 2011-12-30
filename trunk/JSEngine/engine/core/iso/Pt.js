/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function Pt(x,y,z){
    if(x == undefined){
        x=0;
    }
    if(y == undefined){
        y=0;
    }
    if(z == undefined){
        z=0;
    }
    this.x = x;
    this.y = y;
    this.z = z;
    
    this.getLength = function(){
        return Math.sqrt(x * x + y * y + z * z);
    };
    this.clone = function(){
        return new Pt(x, y, z);
    };
    
//    this.toString() = function(){
//        return "x:" + x + " y:" + y + " z:" + z;
//    };
    
    
    
};
Pt.prototype = Point;

Pt.distance = function (ptA,ptB){
    var tx = ptB.x - ptA.x;
    var ty = ptB.y - ptA.y;
    var tz = ptB.z - ptA.z;
			
    return Math.sqrt(tx * tx + ty * ty + tz * tz);
}

Pt.theta = function (ptA,ptB){
    var tx = ptB.x - ptA.x;
    var ty = ptB.y - ptA.y;
			
    var radians= Math.atan(ty / tx);
    if (tx < 0)
        radians += Math.PI;
			
    if (tx >= 0 && ty < 0)
        radians += Math.PI * 2;
				
    return radians;
}

Pt.angle =function (ptA,ptB){
    return Pt.theta(ptA, ptB) * 180 / Math.PI;
}

Pt.polar =function (originPt,radius,theta){
    var tx = originPt.x + Math.cos(theta) * radius;
    var ty = originPt.y + Math.sin(theta) * radius;
    var tz = originPt.z
			
    return new Pt(tx, ty, tz);
}
Pt.interpolate =function (ptA,ptB,f){
    if (f <= 0)
        return ptA;
				
    if (f >= 1)
        return ptB;
				
    var nx = (ptB.x - ptA.x) * f + ptA.x;	
    var ny = (ptB.y - ptA.y) * f + ptA.y;	
    var nz = (ptB.z - ptA.z) * f + ptA.z;
			
    return new Pt(nx, ny, nz);
}

