class StarWarsUniverse{

    async setData(){
        const entities = [];
        let response = await fetch('https://swapi.booost.bg/api/');
        let data = await response.json();

    }

}