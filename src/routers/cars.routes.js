import express from "express";
import carsData from "../data/cars.json" with { type: "json" };

const router = express.Router();

router.get("/", (req, res) => {

    const { limit = 10, category = "" }= req.query;
    
    
    res.json(carsData
        .filter(c => c.categorie.trim().toLowerCase()
        .includes(category.trim().toLowerCase()))
        .slice(0, limit))
});


router.get("/:id", (req,res) => {
   
    const { id } = req.params;

    const element = carsData.find(car => car.id === Number(id))

    if(!element) {
        res.status(404).json({
            message: "Aucun véhicule ne corresponds."
        })
        return;
    }
    res.status(200).json(element)

})

export default router;
