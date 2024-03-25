const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: "string",
      required: [true, "Please add the contact name"],
    },
    email: {
      type: "string",
      required: [true, "Please add the contact email adress"],
    },
    phone: {
      type: "string",
      required: [true, "Please add the contact phone number"],
    },
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema)
