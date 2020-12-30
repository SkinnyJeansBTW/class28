//create a class
class Slingshot{
    //properties for slingshot
    constructor(bodyA, pointB){
        var options = {
              //specifing bodyA and pointB
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
            
        }
      //specifing constraint for body and point
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        //adding sling to world
        World.add(world, this.sling);
    }
    //action when mouse is released
     fly(){
        this.sling.bodyA = null;

    }
//displaying everything
    display(){
        //
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            //stroke
            strokeWeight(4);
            //line that conects bird
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }
    
}