const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel")

const getAllContact = asyncHandler(async (req, res) => {
  const allContacts = await Contact.find()
  res.status(200).json(allContacts);
});


const getContactbyId = asyncHandler(async (req, res) => {
  const getContact = await Contact.findById(req.params.id)
  if(!getContact){
    res.status(404)
    throw new Error('Contact not found')
  }
  res.status(200).json(getContact);
});


const updateContact = asyncHandler(async (req, res) => {
  const getContact = await Contact.findById(req.params.id)
  if(!getContact){
    res.status(404)
    throw new Error('Contact not found')
  }
  const updateCont = await Contact.findByIdAndUpdate(req.params.id,req.body,{new : true})
  res.status(200).json({ message: `Updated contact is ${req.params.id}`,updateContact : updateCont });
});


const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const creatCont = await Contact.create({name,email,phone})
  res.status(201).json(creatCont);
});


const deleteContacyById = asyncHandler(async (req, res) => {
  const getContact = await Contact.findById(req.params.id)
  if(!getContact){
    res.status(404)
    throw new Error('Contact not found')
  }
  const deleteCont = await Contact.findOneAndDelete(getContact)
  res.status(200).json({ message: `Deleted contact is ${req.params.id}`,deleteCont:deleteCont });
});

module.exports = {
  getAllContact,
  getContactbyId,
  updateContact,
  deleteContacyById,
  createContact,
};
