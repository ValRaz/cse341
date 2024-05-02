const express = require ('express');
const path = require ('path');
const dataRoutes = require('./backend/routes/dataRoutes');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '../frontend')));

app.use('/api', dataRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});