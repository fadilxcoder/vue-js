import { createApp, ref } from './vue';

createApp({
    setup() {
        const message = ref('Hello vue!')
        return {
            message
        }
    }
}).mount('#app')

console.log('compiled !');