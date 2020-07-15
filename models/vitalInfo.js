module.exports = function(sequelize, DataTypes) {
    const VitalInfo = sequelize.define("VitalInfo", {
     article_title: DataTypes.STRING,
     article_author: DataTypes.STRING,
     article_source: DataTypes.STRING,
     article_body: DataTypes.STRING
    });
    return VitalInfo;
  };