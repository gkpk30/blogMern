const router = require("express").Router();
const Category = require("../models/Category");

//post category
router.post("/", async (req, res) => {
  const newCat = new Category(req.body);
  try {
    const savedCat = await newCat.save();
    res.status(200).json(savedCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

//find category

router.get("/", async (req, res) => {
    try {
      const catsQuery = await Category.find();
      res.status(200).json(catsQuery);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //delete category
router.delete("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
        await category.delete();
        res.status(200).json("Category has been deleted...");
       
  } catch (err) {
    res.status(500).json(err);
  }
});



  

module.exports = router;