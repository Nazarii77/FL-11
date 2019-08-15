// Task 1
  const defaults = { a: 123, b: 777 };
  const options = { a: 456 };
  const configs = assign({}, defaults, options); // => {a: 456, b: 777}

  // Task 2
  const obj1 = { prop: 5 };
  const obj2 = create(obj1);

  Object.getPrototypeOf(obj2) === obj1; // => true
  obj2.prop; // => 5


  // Task3
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
