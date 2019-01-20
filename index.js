const weeb = require('node-weeb');

weeb.anime('bleach').then(res => {
    var data = JSON.parse(res).data[0]; // Parse JSON.
    console.log(data.attributes.titles.en);
    console.log(data.id);
    console.log(data.attributes.synopsis);
});

weeb.manga('rosario vampire').then(res => {
    var data = JSON.parse(res).data[0]; // Parse JSON.
    console.log(data.attributes.titles.en);
    console.log(data.id);
    console.log(data.attributes.synopsis);
});

weeb.random('hug').then(res => {
    console.log(res);
});

// Endpoint for Nekos.Life - https://github.com/Nekos-life/nekos-dot-life/blob/master/endpoints.json
// Or use the JSON file given.
const nekoLifeJSON = require('./nekoLife.json');

weeb.nekoLife(nekoLifeJSON.nsfw.trap, 'img').then(res => {
    var data = JSON.parse(res).url; // Parse JSON.
    console.log(data);
});
// without img.
weeb.nekoLife('fact').then(res => {
    var data = JSON.parse(res).fact; // Parse JSON.
    console.log(data);
});