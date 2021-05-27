class Slingshot{
    constructor(bodyA,pointB){
     var options={
         bodyA:bodyA,
         pointB:pointB,
         stiffness:0.04,
         length:1
     }
      this.sling= Constraint.create(options);
      this.pointB=pointB
      World.add(world,this.sling)
    }
    
    fly(){
        this.sling.bodyA=null;

    }
    display(){
        if(this.sling.bodyA){
            var point1=this.sling.bodyA.position
            var point2=this.sling.pointB
            strokeWeight(4);
            stroke("turquoise");
            line(point1.x,point1.y, point2.x,point2.y);

        }
    }
    

}