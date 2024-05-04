const express = require('express');
const router = express.Router();
const contactsControl = require('../controllers/contacts');

router.get('/', contactsControl.getAll);

router.get('/:id', contactsControl.getOne);

module.exports = router;