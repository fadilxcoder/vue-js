import { createApp, ref } from './vue';
import axios from 'axios';

const app = createApp({
    data: function() {
        return {
            users: []
        }
    },
    methods: {
        getUsers: function() {
            var route = 'http://users.php.sqlite.app.local/api';
            var thisObj = this;
            axios.get(route)
            .then(function(response) {
                thisObj.users = response.data.payload;
                // console.log(response.data.payload);
            });
        }
    },
    created: function() {
        this.getUsers();
    },
});
app.mount('#app');

console.log('compiled !');