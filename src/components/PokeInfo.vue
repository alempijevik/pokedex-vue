<template>
    <div class="poke_info">
        <div class="poke_info_wrapper">
            <div class="image_section text-center" :style="{ backgroundColor: generateBackground() }">
                <div class="poke_info_header">
                   <div class="container">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="close_btn_wrapper" @click="toggleInfo">
                                    <img src="../../public/images/arrow-left-solid.svg" class="close_btn" />
                                    <h2 class="close_label">Pokédex</h2>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <h1 class="pokemon_info_name" :style="{ textShadow: '0px 0px 10px' + generateBackground() }">{{ pokemon.name }}</h1>
                            </div>
                            <div class="col-lg-4 d-flex justify-content-end">
                                <div class="pokemon_info_id"><span>#{{ pokemon.id }}</span></div>
                            </div>
                        </div>
                   </div>
                </div>
                <img class="poke_info_img" :src="pokemon.img" alt="Pokemon Image">
            </div>
            <div class="basic_info">
            </div>
            <StatTab 
                :pokeStats="statTabResources"
            />
        </div>
        <div class="center-on-page">
            <div class="pokeball">
                <div class="pokeball__button"></div>
            </div>
        </div>
    </div>
</template>

<script>
  import StatTab from './StatTab.vue'

    export default {
        components: {
            StatTab
        },
        props: {
            pokemon: Object
        },
        data() {
            const { stats, height, weight, species, abilities, type } = this.pokemon
            return {
                statTabResources: {
                    stats,
                    height, 
                    weight,
                    species,
                    abilities,
                    type 
                },
                primaryType: this.pokemon.type[0],
                secondaryType: this.pokemon.type[1] ? this.pokemon.type[1]: '',
                typeColor: {
                    'Bug': '#729f3f',
                    'Dragon': '#53a4cf, #f16e57',
                    'Fairy': '#fdb9e9',
                    'Fire': '#fd7d24',
                    'Ghost': '#7b62a3',
                    'Ground': '#f7de3f, #ab9842',
                    'Normal': '#a4acaf',
                    'Psychic': '#f366b9',
                    'Dark': '#707070',
                    'Electric': '#eed535',
                    'Fighting': '#d56723',
                    'Flying': '#3dc7ef, #bdb9b8',
                    'Grass': '#9bcc50',
                    'Ice': '#51c4e7',
                    'Poison': '#b97fc9',
                    'Rock': '#a38c21',
                    'Water': '#4592c4',
                    'Steel': '#9eb7b8'
                },
            };
        },
        methods: {
            toggleInfo () {
                this.$emit('toggle-info');
            },
            borderColor () {
                let primaryColor = `${this.typeColor[this.primaryType]}`;
                if (!this.typeColor[this.primaryType].split(',')[1] && !this.secondaryType) {
                        primaryColor += `, ${this.typeColor[this.primaryType]}`;
                }
                let secondaryColor = this.secondaryType ? `, ${this.typeColor[this.secondaryType]}` : '';
                let css = `radial-gradient(circle ${primaryColor} ${secondaryColor})`;
                console.log(css);
                return css;
            },
            generateBackground () {
                let color = this.typeColor[this.primaryType].split(',')[1] ? this.typeColor[this.primaryType].split(',')[0] : this.typeColor[this.primaryType];
                return color;
            },
            boxColor(type) {
                let color = this.typeColor[type];
                if (color.split(',')[1]) {
                    switch (type) {
                        case 'Flying':
                            color = '#91ABDF';
                            break;
                        case 'Dragon':
                            color = '#026DC1';
                            break;
                        case 'Ground':
                            color = '#D88452';
                            break;
                        default:
                                break;
                            }
                        }
                let css = `0 0 100px ${color}`;
                return css;
            }
        }
    }
    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.poke_info {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: #232222;
    color:  white;
    overflow-x: hidden;
    overflow-y: auto;

}

.poke_info_wrapper {
    height: 100%;
    width: 100%;
    transform: scale(0);
    animation: info_scale 1s forwards 3s;
}

.poke_info_header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
}

.image_section {
    background-image: url('../../public/images/pokeball.svg');
    background-position: center;
    background-size: cover;
    border-radius: 0 0 50% 50%;
    padding-top: 50px;
    position: relative;
}

.pokemon_info_name {
    /* margin: 10px; */
    position: relative;
    z-index: 4;
    padding: 10px;
    border-radius: 0 0 50% 50%;
    background-color: #232222;
    box-shadow: 0px 10px 10px black;
}

.poke_info_img {
    position: relative;
    z-index: 3;
    max-width: 100%;
}

.image_section::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background: #232222;
    bottom: -50%;
    border-radius: 50% 50% 0 0;
    right: 0;
    left: 0;
    margin: auto;
}

.pokemon_info_id {
    background-color: #232222;
    padding: 5px;
    font-size: 18px;
    border-radius: 15px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 40px;
    position: relative;
    z-index: 4;
    font-weight: bold;
}

.close_btn_wrapper {
    color: white;
    display: flex;
    margin: 10px;
    align-items: center;
    cursor: pointer;
    width: 20%;
}

.close_label {
    margin: 0;
}

.close_btn {
    width: 20px;
    margin: 10px;
    filter: invert(1);
}

@keyframes info_scale {
  100% { transform: scale(1) }
}

    /*LOADING ANIMATION */

.center-on-page *,
.center-on-page *::after,
.center-on-page *::before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.center-on-page {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  animation: vanish 3s ease-in-out forwards;
}
/* Poké Styles */
.pokeball {
  position: relative;
  width: 200px;
  height: 200px;
  background: #fff;
  border: 10px solid #000;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: inset -10px 10px 0 10px #ccc,
                        0px 0px 20px #fff;
  animation: fall .25s ease-in-out,
             shake 1.25s cubic-bezier(.36,.07,.19,.97) 3;
}
.pokeball::before,
.pokeball::after {
  content:"";
  position: absolute;
}
.pokeball::before {
  background: red;
  width: 100%;
  height: 50%;
}
.pokeball::after {
  top: calc(50% - 10px);
  width: 100%;
  height: 20px;
  background: #000;
}
.pokeball__button {
  position: absolute;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
  width: 60px;
  height: 60px;
  background: #7f8c8d;
  border: 10px solid #fff;
  border-radius: 50%;
  z-index: 10;
  box-shadow: 0 0 0 10px black;
  animation: blink .5s alternate 7;
}
/* Animation */
@keyframes blink {
  from { background: #eee;}
  to { background: #e74c3c; }
}
@keyframes shake {
  0% { transform: translate(0, 0) rotate(0); }
  20% { transform: translate(-10px, 0) rotate(-20deg); }
  30% { transform: translate(10px, 0) rotate(20deg); }
  50% { transform: translate(-10px, 0) rotate(-10deg); }
  60% { transform: translate(10px, 0) rotate(10deg); }
  100% { transform: translate(0, 0) rotate(0); }
}
@keyframes vanish {
  0% { opacity: 1; }
  80% { opacity: 1; }
  100% { opacity: 0;}
}
@keyframes fall {
  0% { top: -200px }
  60% { top: 0 }
  80% { top: -20px }
  100% { top: 0 }
}
</style>