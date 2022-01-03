<template>
    <div class="col-lg-3">
            <div class="card" @click='toggleInfo' :style="{borderImage: borderColor()}">
            <span class="poke_id">#{{ id }}</span>
            <span class="type_icon">
                <img class="poke_type_icon" :src="primaryTypeIcon" alt="Type" loading="lazy" :style="{boxShadow: boxColor(primaryType)}">
                <img class="poke_type_icon" v-if="secondaryTypeIcon" :src="secondaryTypeIcon" alt="Type" loading="lazy" :style="{boxShadow: boxColor(secondaryType )}">
            </span>
            <div class="image_wrapper">
                <img class="poke_image" :src="pokeImage" alt="Pokemon Image" loading="lazy">
            </div>
            <div class="info">
                <h3 class="name">{{ name }}</h3>
                <div class="extra_info">
                    <div>
                        <small>Weight</small>
                        <h5 class="weight">{{ pokeWeight }}</h5>
                    </div>
                    <div>
                        <small>Height</small>
                        <h5 class="height">{{ pokeHeight }}</h5>
                    </div>
                </div>
                <div class="type_data">
                    <h6 class="type"><small>Type:</small> {{ primaryType }}<span v-if="secondaryType"> / {{secondaryType }}</span></h6>
                </div>
            </div>
            <img v-if="false" :src="pokeSprite" alt="Pokemon Sprite">
        </div>
    </div>

</template>

<script>
    export default {
        props: {
            id: String,
            name: String,
            pokeImage: String,
            primaryType: String,
            secondaryType: {
                type: String,
                default: ''
            },
            pokeWeight: String,
            pokeHeight: String,
        },
        data() {
            return {
                pokeSprite: `./images/sprites/${this.name.toLowerCase()}.png`,
                primaryTypeIcon: `./images/types/${this.primaryType}.png`,
                secondaryTypeIcon: this.secondaryType ? `./images/types/${this.secondaryType}.png` : '',
                classType: this.secondaryType ? `${this.primaryType.toLowerCase()}_${this.secondaryType.toLowerCase()}` : this.primaryType.toLowerCase(),
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
            test () {
                
            },
            toggleInfo () {
                this.$emit('toggle-info', this.id);
            },
            borderColor () {
                let primaryColor = `${this.typeColor[this.primaryType]}`;
                if (!this.typeColor[this.primaryType].split(',')[1] && !this.secondaryType) {
                        primaryColor += `, ${this.typeColor[this.primaryType]}`;
                }
                let secondaryColor = this.secondaryType ? `, ${this.typeColor[this.secondaryType]}` : '';
                let css = `linear-gradient(${primaryColor}${secondaryColor}) 50 space`;
                return css;
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
                let css = `0 0 10px ${color}`;
                return css;
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .card {
        border: 2.5px solid;
        background-color: rgb(54, 54, 54);
        background: linear-gradient(to bottom, rgb(43, 42, 42), rgb(27, 27, 27));
        border-radius: 10px;
        box-shadow: 0 3px 10px rgba(0, 0, 0, .6);
        margin: 0.8rem;
        padding: 1.4rem;
        text-align: center;
        color: #f1f1f1;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .poke_id {
        background-color: rgba(145, 145, 145, 0.2);
        padding: 0.1rem 0.3rem;
        border-radius: 0.6rem;
        font-size: 0.8em;
        position: absolute;
        left: 0.25rem;
        top: 0.25rem;
        font-weight: bold;
    }

    .type_icon {
        position: absolute;
        right: 0.3rem;
        top: 0.3rem;
        padding: 2px;
    }

    .type_icon img {
        margin: 2px;
    }

    .image_wrapper {
        background: linear-gradient(to bottom, rgba(214, 214, 214, 0.3), rgba(77, 77, 77, 0.1));
        box-shadow: 0 0 10px 10px rgba(202, 201, 201, .05);
        border-radius: 50%;
        width: 150px;
        height: 150px;
    }

    .poke_image {
        max-width: 85%;
        margin-top: 1.5rem;
        filter: saturate(130%) brightness(110%);
    }

    .name,
    .extra_info,
    .type_data {
        width: 100%;
    }

    .extra_info {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .info {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }

    small {
        opacity: 0.5;
    }

    .poke_type_icon {
        border-radius: 50%;
    }

</style>