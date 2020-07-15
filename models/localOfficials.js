module.exports = function(sequelize, DataTypes) {
    const LocalOfficials = sequelize.define("LocalOfficials", {
     article_title: DataTypes.STRING,
     article_author: DataTypes.STRING,
     article_source: DataTypes.STRING,
     article_body: DataTypes.STRING
    });
    return LocalOfficials;
  };