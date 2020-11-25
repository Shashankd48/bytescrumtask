const mongoose = require("mongoose");
var PersonSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: true,
         maxlength: 32,
         minlength: 3,
      },
      dob: {
         type: String,
         required: true,
      },
   },
   { timestamps: true }
);

module.exports = mongoose.model("Person", PersonSchema);
