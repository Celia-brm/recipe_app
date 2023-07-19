const db = require("../../config/db-config");

const findAll = () => {
  return db.execute("SELECT * FROM category").then((data) => {
    return data;
  });
};

const findById = (id) => {
  return db
    .execute(
      "SELECT * FROM category WHERE category.id = ? ",
      [id]
    )
    .then((data) => {
      return data;
    });
};


const insertOne = (category) => {
  const { lastName,firstName,birthday,phone,email, password } = category;
  return db.execute(`insert into category (name) values (?)`, [
    name
  ]);
};



const updateOne = (categorys, id) => {
  return db.query("update category set ? WHERE id = ?", [categorys, id]).then(([result]) => result);
};


const deleteOne = (id) => {
  return db.execute("delete from category where id = ?", [id]).then(([result]) => {
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
