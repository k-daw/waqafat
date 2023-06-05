var quranText = require('../quran.json');
// type quranJson = {
//     variants: Array,
// }
let [timer, timingMonitor] = [false, () => timer = !timer ? Date.now() : `${Date.now() - timer}ms`]

let ayas = []
console.log( quranText[2][2]);

for (let i = 0; i < quranText.length; i++) {
    ayas.push(quranText[i][2]);
}// getRawText();

console.log(ayas)
// console.log("insert timing :",timingMonitor());

timingMonitor();

const index = ayas.filter(element => element.includes("لا إله إلا هو"));
console.log("worst search:", timingMonitor());
console.log("index: ", index.length);
