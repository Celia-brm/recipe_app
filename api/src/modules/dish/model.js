const db = require("../../config/db-config");

const findAll = () => {
  return db.execute("SELECT * FROM dish").then((data) => {
    return data;
  });
};

const findById = (id) => {
  return db
    .execute(
      "SELECT * FROM dish WHERE dish.id = ? ",
      [id]
    )
    .then((data) => {
      return data;
    });
};


const insertOne = (dish) => {
  const { lastName,firstName,birthday,phone,email, password } = dish;
  return db.execute(`insert into dish (name,ingredient,recipe_step,time, serving,image) values (?, ?, ?, ?, ?,?)`, [
    name,ingredient,recipe_step,time, serving,image
  ]);
};



const updateOne = (dishs, id) => {
  return db.query("update dish set ? WHERE id = ?", [dishs, id]).then(([result]) => result);
};


const deleteOne = (id) => {
  return db.execute("delete from dish where id = ?", [id]).then(([result]) => {
    return result;
  });
};




module.exports = {
  findAll,
  findById,
  insertOne,
  updateOne,
  deleteOne,
};
