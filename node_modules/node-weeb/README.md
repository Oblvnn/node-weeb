<p align="center">
A Feature-rich weeb wrapper by <a href="https://oblivionsan.tk">Oblivion さん</a>
</p>
<p align="center">
<a href="https://nodei.co/npm/node-weeb/"><img src="https://nodei.co/npm/node-weeb.png"></a>
</p>

## Features
  - Lightweight.
  - Kitsu anime & manga search functions.
  - Random action images from [Weebs.CF](https://weebs.cf/random/)
  - Neko.Life search functions

## How to install
  - install [Node.JS](https://nodejs.org/en/)
  - `npm install -i node-weeb`

## Example
```js
const weeb = require('node-weeb');

weeb.anime('bleach').then(res => {
    var data = JSON.parse(res).data[0];.
    console.log(data.attributes.titles.en);
    console.log(data.id);
    console.log(data.attributes.synopsis);
});

weeb.manga('rosario vampire').then(res => {
    var data = JSON.parse(res).data[0];
    console.log(data.attributes.titles.en);
    console.log(data.id);
    console.log(data.attributes.synopsis);
});

weeb.random('hug').then(res => {
    console.log(res);
});

weeb.nekoLife('fact').then(res => {
    var data = JSON.parse(res).fact;
    console.log(data);
});
```

## Author
- **OblivionSan** - [@OblivionSan](https://twitter.com/OblivionSan) | [Discord](https://discord.oblivionsan.tk) | [Website](https://oblivionsan.tk)