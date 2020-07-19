module.exports = function(sequelize, DataTypes) {
  const Feedbacks = sequelize.define("Feedbacks", {
    name: DataTypes.STRING,
    comment: DataTypes.STRING,
  });
  return Feedbacks;
};
