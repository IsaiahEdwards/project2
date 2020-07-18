module.exports = function(sequelize, DataTypes) {
  const Links = sequelize.define("Links", {
    link_title: DataTypes.STRING,
    link_text: DataTypes.STRING,
    link_type: DataTypes.STRING,
  });
  return Links;
};
