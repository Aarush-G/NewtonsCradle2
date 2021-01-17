class Rope {
    constructor(bodyA,bodyB,offSetX,offSetY){
        this.offSetX=offSetX;
        this.offSetY=offSetY;
        var options ={
            bodyA:bodyA,
            bodyB:bodyB,
          //  stiffness : 1,
           // lenght : 10,
            pointB:{x:this.offSetX,y:this.offSetY}
        }
        this.Rope = Constraint.create(options);
        World.add(world,this.Rope);

    }
    display(){
        var pointA = this.Rope.bodyA.position;
        var pointB = this.Rope.bodyB.position;
        strokeWeight(2);
        
        var Anchor1X=pointA.x;
        var Anchor1Y=pointA.y;

        var Anchor2X=pointB.x+this.offSetX;
        var Anchor2Y= pointB.y+this.offSetY

        line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
    }
}