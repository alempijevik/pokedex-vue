import { createApp } from 'vue';
import App from './App.vue';
import { createStore } from 'vuex';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

const store = createStore({
    state() {
        return {
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
    }
});

const app = createApp(App);

app.use(store);
app.mount('#app');
