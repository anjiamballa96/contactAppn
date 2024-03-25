const express = require("express");
const {
  getAllContact,
  getContactbyId,
  updateContact,
  deleteContacyById,
  createContact,
} = require("../controllers/contactController");
const router = express.Router();

router.route('/').get(getAllContact).post(createContact);
router.route('/:id').get(getContactbyId).put(updateContact).delete(deleteContacyById)

module.exports = router;
