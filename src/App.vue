<template>
  <div class="container" :class="{'active': openInfo}">
    <h1 class="title mb-5 mt-3 text-center">Pokédex</h1>
    <hr class="title_hr"/>
    <div class="row">
      <PokeCard v-for="pokemon in pokemonCollection" 
      :key="pokemon.id" 
      :id="pokemon.id" 
      :name="pokemon.name"
      :primary-type="pokemon.type[0]" 
      :secondary-type="pokemon.type[1]" 
      :poke-image="pokemon.img" 
      :poke-height="pokemon.height" 
      :poke-weight="pokemon.weight"
      @toggle-info="toggleInfo"/>
    </div>
  </div>
  <PokeInfo
   v-if="openInfo"
   @toggle-info="toggleInfo"
   :pokemon="currentPokemon"/>
</template>

<script>
  import PokeCard from './components/PokeCard.vue'
  import PokeInfo from './components/PokeInfo.vue'

  export default {
    name: 'App',
    components: {
      PokeCard,
      PokeInfo
    },
    data() {
      return {
        pokemonCollection: [],
        openInfo: false,
        currentPokemon: {}
      }
    },
    methods: {
      async fetchData(url) {
        let call = await fetch(url);
        let dataJson = await call.json();
        return dataJson;
      },
      checkCollectionStatus() {
        this.fetchData('./pokedex.json')
          .then(pokeData => {
            this.pokemonCollection = pokeData;
          })
      },
      toggleInfo (pokeId) {
        this.openInfo = !this.openInfo;
        if (this.openInfo) {
          this.currentPokemon = this.pokemonCollection.find(pokemon => pokemon.id === pokeId)
          console.log(this.currentPokemon);
          setTimeout(() => {
            let animation = document.querySelector('.center-on-page');
            animation.style.display = 'none';
          }, 3100);
        }
      }
    },
    beforeMount() {
      this.checkCollectionStatus()
    },
  }
</script>

<style>
.active {
  display: none;
}
.title {
  /* color: #FECC00; */
  color: white;
  font-size: 5em;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-shadow: 0 0 10px #375CAA,
                0 0 20px #375CAA,
                0 0 40px #375CAA,
                0 0 80px #375CAA,
                0 0 1200px #375CAA;
}

.hr_title {
  box-shadow: 0 0 10px #375CAA,
                0 0 20px #375CAA,
                0 0 40px #375CAA,
                0 0 80px #375CAA,
                0 0 1200px #375CAA;
  background-color: white;
}
</style>