const { Router } = require("express");
const router = Router();
const controllerRestaurante = require("../controllers/ctrlRestaurantes");

router
    .get("/", controllerRestaurante.getAllRestaurantes)
    .get("/:id", controllerRestaurante.getRestauranteByID)
    .post("/", controllerRestaurante.createRestaurante)
    .put("/", controllerRestaurante.updateRestaurante)
    .delete("/:id", controllerRestaurante.deleteRestaurante);

module.exports = router;