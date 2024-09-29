const express = require('express');
const axios = require('axios');
//const { request, gql } = require('graphql-request');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Uniswap v3 Subgraph URL
const SUBGRAPH_URL = "https://gateway.thegraph.com/api/b9b4b49a0f8b426d5016672a0fbd689f/subgraphs/id/5zvR82QoaXYFyDEKLZ9t6v9adgnptxYpKpSbxtgVENFV";

// API endpoint to fetch user positions
app.post('/api/positions', async (req, res) => {
    const { address } = req.body;

    const query = `
    {
        positions(where: { owner: "${address}" }) {
            id
            liquidity
            token0 {
                symbol
                name
            }
            token1 {
                symbol
                name
            }
        }
    }`;

    try {
        const response = await axios.post(SUBGRAPH_URL, { query });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data from Uniswap subgraph' });
        console.log(error)
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
