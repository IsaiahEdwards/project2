module.exports = function (sequelize, DataTypes) {
    const Feedback = sequelize.define("Feedback", {
        name: DataTypes.STRING,
        comment: DataTypes.STRING
    });
    return Feedback;
};