module.exports = function(sequelize, DataTypes) {
    const Dates = sequelize.define("Dates", {
     event_title: DataTypes.STRING,
     event_date: DataTypes.STRING,
     event_time: DataTypes.STRING,
     organization: DataTypes.STRING,
     event_loc: DataTypes.STRING,
     event_desc: DataTypes.STRING,
    });
    return Dates;
  };