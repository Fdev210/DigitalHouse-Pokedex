module.exports = (sequelize, DataTypes) => {
    const Coaches = sequelize.define("Coaches", 
    {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(100),
        }        
    },{
        tableName: 'COACHES',
    });

    Coaches.associate = function(models) {
        Coaches.belongsToMany(models.Legendary, {
            through: models.CoachLegendary,
            foreignKey: 'COACHES_ID',
            otherKey: 'LEGENDARIES_ID'
    });
}

    return Coaches

}
