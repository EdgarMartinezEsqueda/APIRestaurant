const { DataTypes } = require("sequelize");
const sequelize = require("../database/database"); // import the db conection

// Create the restaurant model
const restaurantModel = sequelize.define( "Restaurants", {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    rating: { type: DataTypes.STRING(1), allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    site: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, validate: { isEmail : true } },
    phone: { type: DataTypes.STRING },
    street: { type: DataTypes.STRING, allowNull: false },
    city: { type: DataTypes.STRING, allowNull: false },
    state: { type: DataTypes.STRING, allowNull: false },
    lat: { type: DataTypes.DOUBLE(18, 15), allowNull: false },
    lng: { type: DataTypes.DOUBLE(18, 15), allowNull: false },
}, {
    timestamps: false   // Don't include createdAt and updatedAt
});

module.exports = restaurantModel;
