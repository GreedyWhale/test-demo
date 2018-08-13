import Vue from 'vue';
import VButton from './components/VButton.vue';

Vue.component('v-button', VButton);

new Vue({
  el: '#app',
  methods: {
    print() {
      console.log('Hello,World')
    }
  }
})