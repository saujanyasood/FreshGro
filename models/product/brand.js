"use strict";
module.exports = (sequelize, DataTypes) => {
  const Brand = sequelize.define(
    "Brand",
    {
      name: DataTypes.STRING,
      slug: DataTypes.STRING,
      brandStatus: { type: DataTypes.ENUM, values: ["active", "inactive"] },
      isDeleted: DataTypes.BOOLEAN,
    },
    {}
  );
  Brand.associate = function (models) {
    Brand.belongsToMany(models.Product, { through: models.ProductBrand });
  };
  return Brand;
};
