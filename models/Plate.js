const mongoose = require("mongoose");

const PlateSchema = new mongoose.Schema(
  {
    color: { type: String, required: true },
    price: { type: String, required: true },
    fields: { type: String, required: true },
    name: { type: String, required: true },
    start_time: { type: Date, required: true },
    offer: { type: Boolean, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Plate", PlateSchema);
