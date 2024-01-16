'use strict';

const { Model } = require('sequelize');
// const Player = require('./player');

module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.hasMany(models.Player);
    }
  }
  Country.init({
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    flag: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Country',
  });
  return Country;
};