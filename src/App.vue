<template>
  <div class="container">
    <div class="row">
      <pokeCard v-for="pokemon in pokemonCollection" 
      :key="pokemon.id" 
      :id="pokemon.id" 
      :name="pokemon.name"
      :primary-type="pokemon.type[0]" 
      :secondary-type="pokemon.type[1]" 
      :poke-image="pokemon.img" 
      :poke-height="pokemon.height" 
      :poke-weight="pokemon.weight"/>
    </div>
  </div>
</template>

<script>
  import pokeCard from './components/pokeCard.vue'

  export default {
    name: 'App',
    components: {
      pokeCard
    },
    data() {
      return {
        pokemonCollection: []
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
      }
    },
    beforeMount() {
      this.checkCollectionStatus()
    },
  }
</script>

<style>

</style>