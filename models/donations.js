module.exports = function(sequelize, DataTypes) {
    const Donations = sequelize.define("Donations", {
     link_title: DataTypes.STRING,
     link_text: DataTypes.STRING,

    });
    return Donations;
  };