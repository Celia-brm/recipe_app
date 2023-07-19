const {
    findAll,
    findById,
    insertOne,
    updateOne,
    deleteOne,
} = require("./model");


const getAll = ({ req, res }) => {
  findAll()
    .then(([dishs]) => {
      res.status(200).json(dishs);
    })
    .catch((err) => console.error(err));
};

const getById = (req, res) => {
  const { id } = req.params;
  findById(id)
    .then(([dish]) => {
      !dish ? res.status(400).json("ressource with the specified id does not exist") : res.status(200).json(dish);
    })
    .catch((err) => console.error(err));
};


const insertDish = async (req, res, next) => {
  try {
    const { name, ingredient, recipe_step, time, serving, image} = req.body;
      const result = await insertOne({ name, ingredient, recipe_step, time, serving, image});
      res.status(201).json({ id: result.insertId, name, ingredient, recipe_step, time, serving, image});
  } catch (err) {
    console.error(err);
    res.status(500).send({
      error: err.message,
    });
  }
};


const updateDish = (req, res) => {
  const id = req.dishId;
  const dish = req.body;
  updateOne(dish, id)
    .then((dish) => {
      if (dish.affectedRows === 1) {
        res.status(204).json({ id, ...dish });
      } else {
        res.status(404).json("No dish found with this ID");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json("error server");
    });
};


const deleteDish = (req, res) => {
  const { id } = req.params;
  deleteOne(id)
    .then((result) => {
      res.sendStatus(204).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json("error server");
    });
};

module.exports = {
  getAll,
  getById,
  insertDish,
  updateDish,
  deleteDish,
};
