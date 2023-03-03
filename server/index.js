const express = require('express');
const bodyParser  = require( 'body-parser');
const mongoose  = require( 'mongoose');
const cors  = require( 'cors');
const dotenv  = require( 'dotenv').config();
const helmet  = require( 'helmet');
const morgan  = require( 'morgan');
const colors = require('colors');
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');

const clientRoutes  = require('./routes/client');
const generalRoutes  = require('./routes/general.js');
const managementRoutes  = require('./routes/management.js');
const salesRoutes  = require('./routes/sales.js');

/* DATA IMPORTS - *** ONLY ADD DATA ONE TIME *** */
// const User = require('./models/User.js');
// const { dataUser } = require('./data/index.js');
// const Transaction = require('./models/Transaction.js');
// const { dataTransaction } = require('./data/index.js');
// const Product = require('./models/Product.js');
// const { dataProduct} = require('./data/index.js');
// const ProductStat = require('./models/ProductStat.js');
// const { dataProductStat} = require('./data/index.js');
// const AffliateStat = require('./models/AffiliateStat.js');
// const { dataAffiliateStat} = require('./data/index.js');
// const OverallStat = require('./models/OverallStat.js');
// const { dataOverallStat} = require('./data/index.js');

/* APP CONFIGURATION */
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(errorHandler);

/* APP ROUTES */
app.use('/client', clientRoutes);
app.use('/general', generalRoutes);
app.use('/management', managementRoutes);
app.use('/sales', salesRoutes);

/* MONGOOSE & APP SERVER SETUP */
connectDB()

/* *** ONLY ADD DATA ONE TIME *** */
// User.insertMany(dataUser);
// Transaction.insertMany(dataTransaction);
// Product.insertMany(dataProduct);
// ProductStat.insertMany(dataProductStat);
// AffliateStat.insertMany(dataAffiliateStat);
// OverallStat.insertMany(dataOverallStat);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Express Server connected: port(${PORT})`.bgGreen.white)
});


