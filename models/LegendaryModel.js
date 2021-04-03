function LegendaryModel(id, name, description, type, healthPoints, specialAttack, defense, attack, experience, specialDefense) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.type = type;
    this.healthPoints = healthPoints;
    this.attack = attack;
    this.specialAttack = specialAttack;
    this.experience = experience;
    this.defense = defense;
    this.specialDefense = specialDefense;
}

module.exports = LegendaryModel;