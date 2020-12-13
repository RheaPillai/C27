class Slingshot{

constructor(bodyA,bodyB){
    var option = {
        bodyA : bird.body,
        bodyB : log6.body,
        length : 10,
        stiffness : 0.05
   
   }
   
        this.chain = Constraint.create(option)
        World.add(world,this.chain)
}

display(){
    var posA = this.chain.bodyA.position
    var posB = this.chain.bodyB.position
    push()
    

    strokeWeight(4)
    line(posA.x,posA.y,posB.x,posB.y)

    pop()


}










}