/** Personatge.js */
class Personatge {
    constructor({name, level, equipment}){
        this.name = name
        this.level = level
        this.weapon = equipment.weapon
        this.armor = equipment.armor
    }
    get getAbility() {
        return this.weapon.ability
    }
    get getCharacterStats() {
        let ability = this.weapon.ability
        let hasAbility = ability !== null ? ability : 'Cap habilitat especial'
        let armor = this.armor
        let hasArmor = armor !== null ? armor : 'Sense armadura'
        return `<br>Name: "${this.name}"<br>Level: "${this.level}"<br>Weapon: "${this.weapon.name}"<br>Damage: "${this.weapon.damage}"<br>Ability: "${hasAbility}"<br>Armor: "${hasArmor}"<br>`
    }
}