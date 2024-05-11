const express = require('express');
const router = express.Router();
const contactsControl = require('../controllers/contacts');

router.get('/', contactsControl.getAll);

router.get('/:id', contactsControl.getOne);

router.post('/', contactsControl.addContact);

router.put('/:id', contactsControl.updateContact);

router.delete('/:id', contactsControl.deleteContact);

module.exports = router;