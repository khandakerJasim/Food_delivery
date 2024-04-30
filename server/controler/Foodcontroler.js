const Food = require("./../model/Foodschema");

exports.postfood = async (req, res) => {
  const { name, description, category, price } = req.body;
  const file = req.file.filename;
  try {
    const creatfood = new Food({
      name: name,
      description: description,
      category: category,
      price: price,
      image: file,
    });
    const savefood = await creatfood.save();
    res.status(200).json({
      success: true,
      message: "food api create successfully",
      data: savefood,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      err: err.message,
    });
  }
};

//get food
exports.getfood = async (req, res) => {
  try {
    const allfood = await Food.find({});
    res.status(200).json({
      success: true,
      message: "get all item successfully",
      data: allfood,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

//singleget

exports.singledata = async (req, res) => {
  const { id } = req.params;
  try {
    const singledata = await Food.findById({ _id: id });
    res.status(200).json({
      success: true,
      data: singledata,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

//deletedata

exports.deletedata = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteuser = await Food.findByIdAndDelete({ _id: id });
    res.status(200).json({
      success: true,
      messg: "delete data successfully",
      data: deleteuser,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      err: err.message,
    });
  }
};

//update food

exports.updatedata = async (req, res) => {
  const { name, price, category, description } = req.body;
  const { id } = req.params;
  try {
    const updateuser = await Food.findByIdAndUpdate(
      { _id: id },
      {
        name: name,
        description: description,
        category: category,
        price: price,
      },
      {
        new: true,
      }
    );

    const newuser = await updateuser.save();
    res.status(200).json({
      success: true,
      data: newuser,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      err: err.message,
    });
  }
};
