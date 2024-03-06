const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Product model represents products in your application
class Product extends Model {}

// Initialize the Product model with attributes and configuration
Product.init(
  {
    // Unique identifier for each product
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      // Add comment for clarification
      comment: 'Unique identifier for each product'
    },
    // Name of the product
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
      // Add comment for clarification
      comment: 'Name of the product'
    },
    // Price of the product
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      // Add comment for clarification
      comment: 'Price of the product'
    },
    // Stock quantity of the product
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // Add comment for clarification
      comment: 'Stock quantity of the product'
    },
    // Foreign key referencing the category to which the product belongs
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      },
      // Add comment for clarification
      comment: 'Foreign key referencing the category to which the product belongs'
    },
  },
  {
    sequelize,
    timestamps: false, // Disable timestamps
    freezeTableName: true, // Prevent Sequelize from pluralizing table names
    underscored: true, // Use snake_case for column names
    modelName: 'product', // Model name
    // Add comment for clarification
    comment: 'Model representing products in the database'
  }
);

// Export the Product model
module.exports = Product;
