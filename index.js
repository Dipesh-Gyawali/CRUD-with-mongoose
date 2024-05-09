const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/E-comm");
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

const saveInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = new Product({
    name: "jjjjjjj 100",
    price: 200,
    brand: "maxx",
    category: "Mobile",
  });
  const result = await data.save();
  console.log(result);
};

const updateInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.updateOne(
    { name: "jjjjjjj 100" },
    {
      $set: { price: 10000000, name: "z-5" },
    }
  );
  console.log(data);
};

const deleteInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.deleteOne({ name: "max 100" });
  console.log(data);
};

const findInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.find({ name: "z-5" });
  console.log(data);
};

findInDB();
