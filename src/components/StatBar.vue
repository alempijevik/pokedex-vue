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
                if (name in this.translation) {
                    return this.translation[name];
                }
                return name
            },
            getPercentage (statNum, statName) {
                let max = 0;
                switch (statName) {
                    case 'hp':
                        max = 255;
                        break;
                    case 'attack':
                        max = 190;
                        break;
                    case 'defense':
                        max = 230;
                        break;
                    case 'sp.atk':
                        max = 194;
                        break;
                    case 'sp.def':
                        max = 230;
                        break;
                    case 'speed':
                        max = 200;
                        break;
                    case 'total':
                        max = 720;
                        break;
                    default:
                        break;
                }
                let result = (statNum * 100) / max;
                return result.toString() + '%'
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
    padding: 20px;
}

.stat_label {
    position: absolute;
    top: -15px;
    left: 20px;
    background-color: #232222;
    padding: 0px 4px;
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

</style>