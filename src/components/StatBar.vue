<template>
    <div class="poke_info_stats">
        <div class="stat_wrapper">
            <p class="stat_label"><small>{{generateFullStatName(statName)}}</small></p>
            <div class="stat_background" :class="statName">
                <div class="stat" :style="{ width: getPercentage(stat, statName) }"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            stat: Number,
            statName: String
        },
        data() {
            return {
                maxStats: {
                    "hp": 255,
                    "attack": 190,
                    "defense": 230,
                    "sp.atk": 194,
                    "sp.def": 230,
                    "speed": 200,
                    "total": 720
                },
                translation: {
                    "hp": 'Health',
                    "attack": 'Attack',
                    "defense": 'Defense',
                    "sp.atk": 'Special Attack',
                    "sp.def": 'Special Defense',
                    "speed": 'Speed',
                    "total": 'Total'
                }
            };
        },
        methods: {
            generateFullStatName (name) {
                return this.translation[name] ? this.translation[name] : name;
            },
            getPercentage (statNum, statName) {
                let result = (statNum * 100) / this.maxStats[statName];
                return `${result}%`;
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.stat_wrapper {
    width: 100%;
    display: flex;
    align-content: center;
    padding: 10px;
    height: 30px;
    border-radius: 20px;
    border: 2px solid #555;
    position: relative;
}

.stat {
    background: #2AC252;
    width: 100%;
    border-radius: 20px;
}

.stat_background {
    background: rgba(42, 194, 82, 0.2);
    width: 100%;
    border-radius: 20px;
    display: flex;
}

.poke_info_stats {
    padding: 10px;
    width: 50%;
    align-items: center;
    display: flex;
}

.stat_label {
    position: absolute;
    top: -15px;
    left: 20px;
    background-color: #232222;
    padding: 0px 4px;
}

.poke_info_stats:last-of-type {
    width: 100%;
}

.hp,
.hp .stat {
    background-color: #2AC252;
}

.hp {
    background-color: rgba(42, 194, 82, 0.2);
}
.hp .stat {
    background-color: #2AC252;
}

.attack {
    background-color: rgba(227, 66, 52, 0.2);

}

.attack .stat {
    background-color: #E34234;
}

.defense {
    background-color: rgba(65, 105, 225, 0.2);
}

.defense .stat {
    background-color: #4169e1;
}

.sp\.def {
    background-color: rgba(91, 171, 197, 0.2);
}

.sp\.def .stat {
    background-color: rgb(91, 171, 197);
}

.sp\.atk {
    background-color: rgba(250, 94, 167, 0.2);
}

.sp\.atk .stat{
    background-color: #fa5ea7;
}

.speed {
    background-color: rgba(252, 252, 100, 0.2);
}

.speed .stat {
    background-color: #fcfc64;
}

.total {
    background-color: rgba(102, 51, 153, 0.2);
}

.total .stat {
    background-color: #663399;
}

@media screen and (max-width: 991px) {
    .poke_info_stats {
        width: 100%;
    }
}

</style>