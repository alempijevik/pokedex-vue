<template>
    <div class="poke_stats_tab">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="pokemon_stats_wrapper mb-5">
                        <StatBar v-for="(stat, val) in pokeStats.stats"
                        :stat="stat" 
                        :statName="val"
                        :key="stat"
                        />
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="pokemon_stats_wrapper_2">
                        <div class="wrapper_background">
                            <div class="pokemon_stat_2">
                                <small><strong>Height:</strong></small>
                                <div>{{ pokeStats.height }}</div>
                            </div>
                            <div class="pokemon_stat_2">
                                <small><strong>Weight:</strong></small>
                                <div>{{ pokeStats.weight }}</div>
                            </div>
                            <div class="pokemon_stat_2">
                                <small><strong>Species:</strong></small>
                                <div>{{ pokeStats.species }}</div>
                            </div>
                            <div class="pokemon_stat_2">
                                <small><strong>Abilities:</strong></small>
                                <div v-for="ability in pokeStats.abilities" :key="ability">{{ ability }}</div>
                            </div>
                            <div class="pokemon_stat_2 text-center">
                                <small><strong>Type:</strong></small>
                                <div v-for="pokeType in pokeStats.type" :key="pokeType" :class="pokeType" :style="{ background: generateBackground(pokeType) }" class="pokemon_type">{{ pokeType }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import StatBar from './StatBar.vue'

    export default {
        components: {
            StatBar
        },
        props: {
          pokeStats: Object
        },
        data() {
            return {
                typeColor: this.$store.state.typeColor
            };
        },
        methods: {
            generateBackground (type) {
                let color = this.typeColor[type];
                // return color.split(',')[1] ? `linear-gradient(${color})` : color;
                return color.split(',')[1] ? `linear-gradient(${color.split(',')[0]} 30%,${color.split(',')[1]} 70%)` : color;
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.poke_stats_tab {
    padding: 40px 0;
}

.pokemon_stats_wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;    
    align-items: stretch;
    height: 100%;
    border: 2px solid #555;
    border-radius: 20px;
    padding: 10px;
}

.pokemon_stat_2 {
    position: relative;
    color: white;
    width: 50%;
}

small {
    opacity: 0.5;
}

.pokemon_stats_wrapper_2 {
    width: 100%;
    display: flex;
    padding: 10px;
    border-radius: 20px;
    border: 2px solid #555;
    position: relative;
    flex-wrap: wrap;
    height: 100%;
}

.pokemon_stat_2 div {
    display: flex;
    align-content: center;
    justify-content: center;
    font-weight: bold;
}

.wrapper_background {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: stretch;
    justify-content: center;
    background: #333;
    padding: 15px;
    border-radius: 15px;
    flex-wrap: wrap;
    height: 100%;

}

.pokemon_type {
    height: 32px;
    width: 138px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    border-radius: 5px;
}

.pokemon_stat_2:nth-of-type(5)  {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
}

.pokemon_stat_2:nth-of-type(5) small {
    width: 100%;
    margin-bottom: 5px;
}

</style>