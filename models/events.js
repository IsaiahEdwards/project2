module.exports = function(sequelize, DataTypes) {
  const Events = sequelize.define("Events", {
    title: DataTypes.STRING,
    // Date and time
    start: DataTypes.STRING,
    // organization
    groupId: DataTypes.STRING,
    // location
    location: DataTypes.STRING,
    // event type
    type: DataTypes.STRING,
  });
  return Events;
};
