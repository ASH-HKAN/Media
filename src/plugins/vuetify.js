// import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import Carouse13d from 'vue-carousel-3d'
Vue.use(Vuetify);
// Vue.use(Carouse13d)
export default new Vuetify({

    icons: {
        iconfont: 'md' || 'fa'
    },

    // theme: {
    //     themes: {
    //         dark: {
    //             background: '#2F3346'
    //         }
    //     }
    // }

});
