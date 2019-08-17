  // Task3 NO ES6 CLASSES

  function Pokemon() {
      this.getType = () => {
          return this.type
      };
      this.getSpecie = () => {
          return this.specie
      };
      this.canFly = () => {
          return this.canfly
      };
  }

  function Charmander() {
      this.canfly = false;
      this.type = 'Fire';
      this.specie = 'Lizard Pokémon';
      this.evolve = () => new Charmeleon();
      Pokemon.call(this);
  }

  function Charmeleon() {
      this.canfly = false;
      this.specie = 'Flame Pokémon';
      this.type = 'Fire';
      this.evolve = () => new Charizard();
      Pokemon.call(this);
  }

  function Charizard() {
      this.canfly = true;
      this.specie = 'Flame Pokémon';
      this.type = 'Fire';
      this.evolve = () => this;
      Pokemon.call(this);
  }
  Charmander.prototype = Object.create(Pokemon.prototype);
  Charmander.prototype.constructor = Charmander;

  Charmeleon.prototype = Object.create(Pokemon.prototype);
  Charmeleon.prototype.constructor = Charmeleon;

  Charizard.prototype = Object.create(Pokemon.prototype);
  Charizard.prototype.constructor = Charizard;

  const charmander = new Charmander();
  const charmeleon = new Charmeleon();
  const charizard = new Charizard();

  charmander.getType(); // -> “Fire”
  charmander.getType() === charmeleon.getType(); // -> true
  charmeleon.getType() === charizard.getType(); // -> true

  charmander.evolve().constructor === Charmeleon; // -> true
  charmeleon.evolve().constructor === Charizard; // -> true

  charmander.getSpecie(); // -> “Lizard Pokémon”
  charmeleon.getSpecie(); // -> “Flame Pokémon”
  charizard.getSpecie() === charmeleon.getSpecie(); // -> true

  charmander.canFly(); // -> false
  charmander.canFly() === charmeleon.canFly(); // -> true
  charizard.canFly(); // -> true


  function Pichu() {
      this.canfly = false;
      this.type = 'Electric';
      this.specie = 'Mouse Pokémon';
      Pokemon.call(this);
      this.evolve = () => new Pikachu();
  }

  function Pikachu() {
      this.canfly = false;
      this.specie = 'Mouse Pokémon';
      this.type = 'Electric';

      Pokemon.call(this);
      this.evolve = () => new Raichu();
  }

  function Raichu() {
      this.canfly = true;
      this.specie = 'Mouse Pokémon';
      this.type = 'Electric';

      Pokemon.call(this);
      this.evolve = () => this;
  }
  Pichu.prototype = Object.create(Pokemon.prototype);
  Pichu.prototype.constructor = Pichu;

  Pikachu.prototype = Object.create(Pokemon.prototype);
  Pikachu.prototype.constructor = Pikachu;

  Raichu.prototype = Object.create(Pokemon.prototype);
  Raichu.prototype.constructor = Raichu;


  Pokemon.prototype.getPokemonType = function() {
      return this.type;
  }

  const pichu = new Pichu();
  pichu.getPokemonType(); // => Pichu

  const pikachu = pichu.evolve();
  pikachu.getPokemonType(); // Pikachu
  pikachu.constructor === Pikachu; // true

  const raichu = pikachu.evolve();
  raichu.getPokemonType(); // Raichu
  raichu.constructor === Raichu; // true

  const raichu2 = raichu.evolve(); // return raichu back as it's maximum level
  raichu2 === raichu; // true