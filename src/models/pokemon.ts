export default class Pokemon {

    // 1. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
        public id: number,
        public hp: number = 100,
        public cp: number = 10,
        public name: string = '...',
        public picture: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/XXX.png',
        public types: Array<string> = ['Normal'],
        public created: Date = new Date()
    ) {
     // 2. Initialisation des propiétés d'un pokémons.
     this.id = id;
     this.hp = hp;
     this.cp = cp;
     this.name = name;
     this.picture = picture;
     this.types = types;
     this.created = created;
    }
   }