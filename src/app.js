import { createApp, ref } from './vue';
import axios from 'axios';

const app = createApp({
    data: function() {
        return {
            books: []
        }
    },
    methods: {
        getBooks: function() {
            const route = 'http://sf6.inbuilt.app.local/api/';
            var thisObj = this;
            const headers = {
                "content-type": "application/json"
            };
            const graphqlQuery = {
                "query": `
                    query GetAllBooks {
                        books {
                            id, 
                            title,
                            genre
                        }
                    }
                `,
                "variables": {}
            };
            axios({
                url: route,
                method: 'POST',
                header: headers,
                data: graphqlQuery
            })
            .then(function(response) {
                thisObj.books = response.data.data.books;
                //console.log(response);
            });
        }
    },
    created: function() {
        this.getBooks();
    },
});
app.mount('#app');

console.log('compiled !');