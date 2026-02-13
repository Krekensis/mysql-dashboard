require('dotenv').config();
const express = require('express');
const cors = require('cors');

const tablesRoutes = require('./routes/tables');
const schemaRoutes = require('./routes/schema');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/tables', tablesRoutes);
app.use('/api/schema', schemaRoutes);

app.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
});
