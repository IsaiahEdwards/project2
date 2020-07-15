module.exports = function(sequelize, DataTypes) {
    const Businesses = sequelize.define("Businesses", {
     link_title: DataTypes.STRING,
     link_text: DataTypes.STRING,

    });
    return Businesses;
  };