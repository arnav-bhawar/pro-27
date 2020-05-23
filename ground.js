class Ground{
    constructor(){
        options = {
            isStatic : true
        }
        
        this.body = Bodies.rectangle(200,350,400,30);
    }


    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x , pos.y , 400,30);
    }
}

