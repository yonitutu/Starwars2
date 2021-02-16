class StarWarsUniverse{
    constructor(entities){
        this.entities = entities;
    }



async init(){ 

    let response = await fetch('https://swapi.booost.bg/api/')
    let data = await response.json();

    entities.push(data)

    while(data.next){
        response = await fetch(`${data.next}`);
        data = await response.json();
        this.entities.push(data);
    }

    const allStuff = this.entities
    .map((x) => x.results.map((c) => c)).flat();

    this.data.entities = allStuff;
    


}








}