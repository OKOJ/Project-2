module.exports = (sequelize, DataTypes) => {
    const Items = sequelize.define("Items", {
        productName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        seller: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT
        }
    });

    // Example.associate = function(models) {
    //   models.Example.belongsTo(models.User, {
    //     onDelete: "CASCADE",
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };
    return Items;
};