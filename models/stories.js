module.exports = function(sequelize, DataTypes) {
    const Stories = sequelize.define("Stories", {
     article_title: DataTypes.STRING,
     article_author: DataTypes.STRING,
     article_source: DataTypes.STRING,
     article_body: DataTypes.STRING
    });
    return Stories;
  };