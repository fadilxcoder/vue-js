const https = require('https');
const fs = require('fs');
const filePath = './src/vue.js';
const jsonUrl = 'https://unpkg.com/vue@3.3.4/dist/vue.esm-browser.js'; // ...browser.prod.js

https.get(jsonUrl, (response) => {
    let data = '';
    response.on('data', (chunk) => { data += chunk; });
    response.on('end', () => {
        fs.writeFile(filePath, data, (error) => {
            if (error) {
                console.error('Vue.js core failed to initialise.', error);
            } else {
                console.log('Vue.js core initialised successfully.');
            }
        });
    });
}).on('error', (error) => {
    console.error('Vue.js core failed to build.', error);
});