const express = require("express");
const router = express.Router();
const {
   getAllPersons,
   createPerson,
   getPerson,
} = require("../controllers/home");
// @route    -  GET
// @desc    -   Get All data , Home Page
// @access  -   PUBLIC
router.get("/", getAllPersons);

// @route    -  POST
// @desc    -   Insert New Data
// @access  -   PUBLIC
router.post("/", createPerson);

// @route    -  POST   api/:term
// @desc    -   Create new Todo
// @access  -   PRIVATE
router.post("/:term", getPerson);

module.exports = router;
