module.exports = (sequelize, DataTypes) => {
    const CoachLegendary = sequelize.define("CoachLegendary", {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }    
    },{
        tableName: 'COACHES_LEGENDARIES',
        timestamps: false,
    });

    CoachLegendary.associate = function(models) {
        CoachLegendary.belongsTo(models.Coach, {
            as: 'coaches',
            foreignKey: 'COACH_ID'
        })
    }
    
    CoachLegendary.associate = function(models) {
        CoachLegendary.belongsTo(models.Legendary, {
            as: 'Legendaries',
            foreignKey: 'LEGENDARIES_ID'
        })
    }

    return CoachLegendary

}
