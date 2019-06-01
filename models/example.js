module.exports = (sequelize, DataTypes) => {
  const Example = sequelize.define("Example", {
    text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  // Example.associate = function (models) {
  //   Example.belongsTo(models.User)
  // }
  Example.associate = function (models) {
    models.Example.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        name: false
      }
    });
  };
  return Example;
};