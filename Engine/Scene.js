class Scene{
    constructor(name){
        this.name = name;
        this.gameObjects = [];
    }

    update(){
        for(let gameObject of this.gameObjects){
            gameObject.update();
        }
    }

    draw(ctx){
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        for(let gameObject of this.gameObjects){
            gameObject.draw(ctx);
        }
    }

    remove(){
        let toRemove = this.gameObjects.filter(g=>g.markForDelete);

        this.gameObjects = this.gameObjects.filter(g=>!g.markForDelete);
    }

    restart(){
        this.gameObjects = [];
        this.start();
    }
}

export default Scene;