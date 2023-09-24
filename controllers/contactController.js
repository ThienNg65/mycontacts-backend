const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getAllContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//@desc Create New contacts
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is :", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(201).json({ message: "Create contacts" });
});

//@desc Get contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Get contacts for ${req.params.id}` });
});

//@desc Update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update contacts for ${req.params.id}` });
});

//@desc Delete Contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete contacts for ${req.params.id}` });
});

const deleteAllContacts = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete contacts for ` });
});

module.exports = { getAllContacts, createContact, getContact, updateContact, deleteContact, deleteAllContacts };