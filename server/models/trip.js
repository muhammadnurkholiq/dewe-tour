'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      trip.belongsTo(models.country, {
        as: "country",
        foreignKey: {
          name: "countryId",
        },
      });
    }
  };
  trip.init({
    title: DataTypes.STRING,
    countryId: DataTypes.INTEGER,
    accomodation: DataTypes.STRING,
    transportation: DataTypes.STRING,
    eat: DataTypes.STRING,
    day: DataTypes.INTEGER,
    night: DataTypes.INTEGER,
    dateTrip: DataTypes.DATEONLY,
    price: DataTypes.INTEGER,
    quota: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'trip',
  });
  return trip;
};