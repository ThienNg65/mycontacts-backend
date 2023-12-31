const express = require("express");

const router = express.Router();

const {
    getAllContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);

// Get all the contact or create new one
router.route('/').get(getAllContacts).post(createContact);


// Get a contact, update or delete by its id
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);


module.exports = router;