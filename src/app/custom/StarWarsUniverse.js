class StarWarsUniverse{
    constructor(){
        this.entities = [];
    }
}

class StarWarsUniverse extends Entity{

    async init(){
        let entity = new Entity();
        let response  = await fetch('https://swapi.booost.bg/api');
        let data = await response.json();
        entity = data;
    }

}
