const Plate = require("../models/Plate");

const router = require("express").Router();

//CREATE

router.post("/", async (req, res) => {
  const plate = req.body;

  const plateStartDate = new Date(plate.start_time).getTime()
  const today = new Date().getTime()
  const plateWords = plate.name.split(' ').length

  if (plateWords < 2) {
    return res.status(500).json({
      error: 'The plate name is too short'
    });
  }

  if (Number(plate.price) < 9 || Number(plate.price) > 25) {
    return res.status(500).json({
      error: 'The price must be between 9 and 25'
    });
  }

  const newPlate = new Plate({
    ...plate,
    price: `${plate.price}$`,
    offer: plateStartDate > today ? true : false
  });

  try {
    const savedPlate = await newPlate.save();
    res.status(200).json(savedPlate);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedPlate = await Plate.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedPlate);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Plate.findByIdAndDelete(req.params.id);
    res.status(200).json("Plate has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET PLATE
router.get("/find/:id", async (req, res) => {
  try {
    const plate = await Plate.findById(req.params.id);
    res.status(200).json(plate);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL PLATES
router.get("/", async (req, res) => {
  try {
    const plates = await Plate.find();

    res.status(200).json(plates);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
