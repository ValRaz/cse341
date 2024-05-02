const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.get('/professional', async(req,res) => {
    try {
        const data = await dataController.fetchData();
        res.json(data);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

module.exports = router;