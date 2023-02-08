class Game{
    static health = 3;
    static enterPosition = "north";
    static damage = 1;
    static tearRate = 40;
    static moveSpeed = 200;
    static score = 0;

    static monsterHealth = 2;

    static scenes = [];
    static currentSceneIndex = 0;
    static nextSceneIndex = -1;
    static numRooms = 0;

    static scene(){
        return Game.scenes[Game.currentSceneIndex];
    }

    static FindByType(type){
        return Game.scene().gameObjects.filter(g=>g.constructor.name == type);
    }

    static updateScene(){
        if (Game.nextSceneIndex != -1) {
            Game.currentSceneIndex = Game.nextSceneIndex;
            Game.nextSceneIndex = -1;
            Game.scene().restart();
        }
    }

    static changeScene(index){
        Game.nextSceneIndex = index;
    }
}

export default Game;