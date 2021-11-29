<template>
    <div class="col-lg-4">
        <div class="card" @click='test'>
            <span class="poke_id">#{{ id }}</span>
            <span class="type_icon"><img :src="primaryTypeIcon" alt="Type"><img v-if="secondaryTypeIcon"
                    :src="secondaryTypeIcon" alt="Type"></span>
            <div class="image_wrapper">
                <img class="poke_image" :src="pokeImage" alt="Pokemon Image">
            </div>
            <div class="info">
                <h3 class="name">{{ name }}</h3>
                <div class="extra_info">
                    <div> <small> Weight</small>
                        <h5 class="weight">{{ pokeWeight }}</h5>
                    </div>
                    <div> <small> Height</small>
                        <h5 class="height">{{ pokeHeight }}</h5>
                    </div>
                </div>
                <div class="type_data"> <small> Type:</small>
                    <h5 class="type">{{ primaryType }}<span v-if="secondaryType"> / {{ secondaryType }}</span></h5>
                </div>
            </div>
            <p>{{ primaryType }} {{ secondaryType }}</p>
            <img :src="pokeSprite" alt="Pokemon Sprite">
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
                openInfo: false,
                pokeSprite: `./images/sprites/${this.id}MS.png`,
                primaryTypeIcon: `./images/types/${this.primaryType}.png`,
                secondaryTypeIcon: this.secondaryType ? `./images/types/${this.secondaryType}.png` : '',
            };
        },
        methods: {

        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .card {
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
    
    small {
        opacity: 0.5;
    }
</style>