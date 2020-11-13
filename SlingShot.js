class SlingShot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length:250
        }
        this.sling = Constraint.create(options)
        this.pointB = pointB
     World.add(world,this.sling)
    }
    fly(){
        this.sling.bodyA = null
    }
    display(){
        if(this.sling.bodyA){
            strokeWeight(5)
            line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y)
        }
}
}