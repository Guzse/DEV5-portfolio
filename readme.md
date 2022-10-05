# Development 5 - Gilian Sterckx
![Anime1](https://media.tenor.com/p0kz7NOqxTkAAAAC/kaito-typing.gif)

## De Spread Operator (...)
Met de spread operator kan je geitereerde objecten uitpakken. Zo kan je bv. de values uit arrays gemakkelijk toevoegen aan andere arrays.
```js
let baseColors = [ '#ff0000', '#00ff00', '#0000ff'];
let allColors = [ '#ffff00', '#00ffff', '#ff00ff', ...baseColors];
// allColors = [ '#ffff00', '#00ffff', '#ff00ff', '#ff0000', '#00ff00', '#0000ff']
```
Op deze manier kan je snel en simpel met arrays spelen. Je hebt ook volledige controle over waar de variabelen terecht komen:
```js
let someNumbers = [ 4, 5, 6];
let decimals = [ 0, 1, 2, 3, ...someNumbers, 7, 8, 9];
// decimals = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
```
Maar het werkt op meer dan alleen arrays: elk object dat itereerbaar is (alle objecten die door een for-loop kunnen lopen) kan een spread operator op gebruikt worden.
```js
let richting = "IMD";
let arr = [...richting];
// arr = [ 'I', 'M', 'D'];
```
Ook kan de spread operator gebruikt worden om een clone te maken van een array, wat handig kan zijn wanneer je niet wil dat een deel code aanpassingen aan je originele data kan maken.
```js
let importantData = [ 'Gilian', 'wilt', 'goede', 'punten'];
let copy = [...importantData];
// importantData en copy hebben dezelfde values, maar aanpassingen aan copy worden niet naar importantData doorgewerkt.
```
De spread operator kan ook andere objecten klonen op dezelfde manier. Zo kan je ook objecten overschrijven met de data van andere objecten.
```js
const video1 = {
    title: 'Kill Bill: Volume 1',
    director: 'Quentin Tarantino'
}
const video2 = {
    title: 'Shrek 2',
    rating: '9.6'
}
const video3 = {
    ...video1,
    ...video2
}
// video 3 = {title: 'Shrek 2', director: 'Quentin Tarantino', rating: '9.6'}
```
Voor objecten te klonen word `Object.Assign()` wel als de beste optie gezien.

![Anime2](https://media.tenor.com/8b2-2a17wIAAAAAC/wow-world-of-warcraft.gif)
![Anime3](https://media.tenor.com/AnDsu9_zhRUAAAAd/khr-reborn.gif)
![Anime4](https://media.tenor.com/BJ-9w-MUVCMAAAAC/tis100-sad.gif)
![Anime5](https://media.tenor.com/462zlYzlx1UAAAAd/dr-dee-mary-and-the-witchs-flower.gif)
![Anime6](https://media.tenor.com/w-YULfQPlyIAAAAd/new-game-computer-crash.gif)
![NOTANIME???](https://media.tenor.com/gTg8ZSZMR6YAAAAC/scaler-create-impact.gif)
![Anime7](https://media.tenor.com/qXsgPu0UMHEAAAAC/xd-programming.gif)