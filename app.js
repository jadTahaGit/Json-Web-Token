const express = require('express');
const mongoose = require('mongoose');

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
