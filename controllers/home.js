const Person = require("../models/person");

exports.getAllPersons = (req, res) => {
   Person.find({})
      .select(["name", "dob"])
      .then((persons) => {
         res.status(200).json(persons);
      })
      .catch((error) => {
         console.log("No Todo Found", error);
      });
};

exports.createPerson = (req, res) => {
   const newPerson = new Person({
      name: req.body.name,
      dob: req.body.dob,
   });
   newPerson
      .save()
      .then((person) => {
         res.status(200).json({
            message: "Person Added successfully! 👍",
            person,
         });
      })
      .catch((error) => console.log("Failed to save Person in DB\n", error));
};

// { $or: [{ name: "Rambo" }, { breed: "Pugg" }, { age: 2 }] },
// Search A person by name or date of birth
exports.getPerson = async (req, res) => {
   // const term = req.body.term;
   const term = req.params.term;
   console.log(term);
   await Person.findOne({
      $or: [{ name: term }, { dob: term }],
   })
      .select(["name", "dob"])
      .then((persons) => {
         if (persons !== null) {
            res.status(200).json(persons);
         } else {
            res.status(200).json({ msg: "Person Not Found!" });
         }
      })
      .catch((error) => {
         console.log("No Todo Found", error);
      });
};
