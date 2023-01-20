const Restaurante = require("../models/restaurante"); 

// Get only one restaurante by id
const getRestauranteByID = async ( req, res ) => {
    try{
        let result = await Restaurante.findByPk( req.params.id );
        if(!result) 
            return res.status(400).json({ message: "Restaurant not found"})
        res.status(200).json( result ); 
    }catch(e) {
        return res.status(500).json({ message: "An error has occured", error: e });
    }
}

// Get all restaurants
const getAllRestaurantes = async ( req, res ) => {
    try{
        let results = await Restaurante.findAll();;
        res.status(200).json(results);
    }catch(e) {
        return res.status(500).json({ message: "An error has occured", error: e });
    }
}

// Add a new restaurant
const createRestaurante = async ( req, res ) => {
    const newRestaurant = Restaurante.build( req.body );  // Sequelize validate all fields
    try{    
        await newRestaurant.save(); // Save to database
        res.status(200).json({ 
            message: "New restaurante saved successfully",
            data: newRestaurant.dataValues
        });
    } catch (e){    // If something went wrong
        res.status(400).json( { message: `ERROR(S): ${ e.errors[0].message }` } );
    }
}

// Modify restaurant
const updateRestaurante = async ( req, res ) => {
    try{
        let { id, ...otros } = req.body;
        let resultado = await Restaurante.update(
            otros,
            { where: { id } }
        );  // update fields
        (resultado[0] === 1)
        ?   res.status(200).json( { message: "Restaurant updated successfully" })   // update successfully
        :   res.status(400).json( { message: "Restaurant not found" } );    // ID not found
    } catch(e) {
        res.status(500).json({ message: "An error has occured", error: e.errors[0].message });
    }
}

// Delete restaurant by id
const deleteRestaurante = async ( req, res ) => {
    try{
        let resultado = await Restaurante.destroy( { where: { id: req.params.id } } );  // Delete from database
        (resultado === 1)
        ?   res.status(200).json( { message: "Restaurant deleted successfully" })   // Delete successfully
        :   res.status(400).json( { message: "Restaurant not found" } );    // ID not found
    } catch(e) {
        res.status(500).json({ message: "An error has occured", error: e });
    }
}
// Se retornan todos las funciones anteriores
module.exports = {
    getRestauranteByID,
    getAllRestaurantes,
    createRestaurante,
    updateRestaurante,
    deleteRestaurante
};