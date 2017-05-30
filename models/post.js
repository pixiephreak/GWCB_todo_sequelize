module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Post", {
    task: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    completed: {
      type: DataTypes.BOOLEAN
    }
  });
  return Task;
};
