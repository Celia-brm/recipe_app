const router = require("express").Router();

const {
    getAll,
    getById,
    insertDish,
    updateDish,
    deleteDish,
} = require("./controller");


router.get("/", getAll);
router.get("/:id", getById);

router.post("/register", insertDish);

router.put("/:id", updateDish);
 
router.delete("/:id", deleteDish);

module.exports = router;
