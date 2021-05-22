module.exports = (sequelize, DataTypes) => sequelize.define("Legendary", {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(100),
        },
        description: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.STRING
        },
        healthPoints: {
            type: DataTypes.FLOAT
        },
        specialAttack: {
            type: DataTypes.FLOAT
        },
        defense: {
            type: DataTypes.FLOAT
        },
        attack: {
            type: DataTypes.FLOAT
        },
        experience: {
            type: DataTypes.FLOAT
        },
        specialDefense: {
            type: DataTypes.FLOAT
        },        
    },{
        tableName: 'LEGENDARIES',
        timestamps: false,
    });
