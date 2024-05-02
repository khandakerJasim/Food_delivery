const Category = require("./../model/Categoryschema");

exports.Categorypost = async (req, res) => {
  const category = req.body.category;
  const file = req.file.filename;

  try {
    const newcategory = new Category({
      category: category,
      image: file,
    });
    const savecategory = await newcategory.save();

    res.status(200).json({
      success: true,
      message: "category data post successfully",
      data: savecategory,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "error",
      error: err.message,
    });
  }
};
