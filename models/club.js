'use strict';

const { Model } = require('sequelize');
const Player = require('./player');

module.exports = (sequelize, DataTypes) => {
  class Club extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Player);
    }
  }
  Club.init({
    name: DataTypes.STRING,
    shortName: DataTypes.STRING,
    slug: DataTypes.STRING,
    city: DataTypes.STRING,
    stadium: DataTypes.STRING,
    establishmentDate: DataTypes.INTEGER,
    logo: DataTypes.STRING,
    history: DataTypes.STRING,
    website: DataTypes.STRING,
    facebook: DataTypes.STRING,
    twitter: DataTypes.STRING,
    youtube: DataTypes.STRING,
    instagram: DataTypes.STRING,
    tiktok: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Club',
  });

  return Club;
};
