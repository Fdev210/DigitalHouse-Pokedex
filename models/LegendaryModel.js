function LegendaryModel(id, name, image, description, type, healthPoints, specialAttack, defense, attack, experience, specialDefense) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;
    this.type = type;
    this.healthPoints = healthPoints;
    this.specialAttack = specialAttack;
    this.defense = defense;
    this.attack = attack;
    this.experience = experience;
    this.specialDefense = specialDefense;    
}

module.exports = LegendaryModel;