'use strict';

const { Model } = require('sequelize');
const Club = require('./club');
const Country = require('./country');
const Position = require('./position');

module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Club);
      this.belongsTo(models.Country);
      this.belongsTo(models.Position);
    }
  }
  Player.init({
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    positionId: DataTypes.INTEGER,
    clubId: DataTypes.INTEGER,
    countryId: DataTypes.INTEGER,
    number: DataTypes.INTEGER,
    birthday: DataTypes.DATE,
    photo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Player',
  });

  return Player;
};