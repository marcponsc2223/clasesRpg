/** clases.js */
// 🚀 Tenim un objecte anidat que representa un personatge d’un RPG. Aquest personatge pot tenir o no equipament, i les armes poden tenir o no una habilitat especial. 
// Si no té armadura, aquesta propietat tindrà valor “null”. Fes servir optional chaining per gestionar els casos en què falten equipament o habilitats.
let p = document.getElementById('p')
// Seguint el model de l’exercici anterior, crea un array d’objectes amb 4 o 5 personatges. 
const personatges = [
    { name: 'Warrior', level: 25, equipment: {weapon: {name: "Sword", damage: 20, ability: "Slash"}, armor: 'Barbarian Armor'}},
    { name: 'Wizzard', level: 20, equipment: {weapon: {name: "Wand", damage: 15, ability: null}, armor: null}},
    { name: 'Black Prior', level: 30, equipment: {weapon: {name: "One Handexd Sword", damage: 25, ability: "Shield Crush"}, armor: 'Knight Armor'}},
    { name: 'Highlander', level: 40, equipment: {weapon: {name: "Two Handed Sword", damage: 45, ability: null}, armor: null}},
    { name: 'Centurion', level: 90, equipment: {weapon: {name: "Gladius", damage: 35, ability: "Romanic Punch"}, armor: 'Romanic Armor'}}
]
let personatgesMap = personatges.map(data => new Personatge(data))
// Recorre l’array i mostra les dades dels personatges, l’equipament que tenen i l’habilitat especial de l’arma, si en té (en cas contrari, retorna "Cap habilitat especial").
// Si no té armadura caldrà mostrar “Sense armadura”.
for (const personatge of personatgesMap) {
    p.innerHTML += personatge.getCharacterStats
}
