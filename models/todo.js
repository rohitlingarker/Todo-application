"use strict";
const { Model, Op } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
      Todo.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }

    static addTodo({ title, dueDate }) {
      return this.create({ title: title, dueDate: dueDate, completed: false });
    }
    static async remove(id) {
      return this.destroy({
        where: {
          id,
        },
      });
    }

    static getTodos() {
      return this.findAll();
    }
    static async overdue() {
      return this.findAll({
        where: {
          dueDate: {
            [Op.lt]: new Date(),
          },
          completed: false,
        },
      });
    }
    static async dueToday() {
      return this.findAll({
        where: {
          dueDate: {
            [Op.eq]: new Date(),
          },
          completed: false,
        },
      });
    }
    static async dueLater() {
      return this.findAll({
        where: {
          dueDate: {
            [Op.gt]: new Date(),
          },
          completed: false,
        },
      });
    }
    static async completedItems() {
      return this.findAll({
        where: {
          completed: true,
        },
      });
    }
    setCompletionStatus(bool) {
      return this.update({ completed: bool });
    }

    markAsCompleted() {
      return this.update({ completed: true });
    }
  }
  Todo.init(
    {
      title: DataTypes.STRING,
      dueDate: DataTypes.DATEONLY,
      completed: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Todo",
    }
  );
  return Todo;
};
