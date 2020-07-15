module.exports = function(sequelize, DataTypes) {
    const Petitions = sequelize.define("Petitions", {
     link_title: DataTypes.STRING,
     link_text: DataTypes.STRING,

    });
    return Petitions;
  };