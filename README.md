
# Uniswap V3 Positions dApp

This project is a decentralized application (dApp) built with **React**, **Ethers.js**, and **TheGraph**. It queries the **Uniswap V3 Subgraph** to fetch liquidity pool positions of a user by their wallet address.

## Features
- Connects to MetaMask to retrieve the user's wallet address.
- Fetches all the Uniswap V3 liquidity pool positions associated with the user's wallet.
- Displays token information, liquidity, and other details for each position.

## Technologies Used
- **React**: Frontend framework.
- **Ethers.js**: Interacting with the Ethereum blockchain and wallet connection.
- **The Graph Protocol**: For querying the Uniswap V3 subgraph.
- **Uniswap V3 Subgraph**: The data source for fetching user liquidity positions.
  
---

## Setup and Installation

### Prerequisites

Ensure you have the following installed:

1. **Node.js** and **npm**: You can download it from [here](https://nodejs.org/).
   - Verify installation:
     ```bash
     node -v
     npm -v
     ```

2. **MetaMask**: Make sure MetaMask is installed in your browser, as the app will use it to connect to the Ethereum network.

3. **Git**: Make sure you have Git installed to clone the repository:
   - Verify installation:
     ```bash
     git --version
     ```

---

### 1. Clone the Repository

To start, clone the repository to your local machine:

```bash
git clone https://github.com/MdAyanHassan/my_dapp.git
```

---

### 2. Install Dependencies

Install the required Node.js packages:

```bash
npm install
```

This will install all the dependencies listed in `package.json`, including:
- **React** for building the UI
- **Ethers.js** for blockchain interaction

---

### 3. Configure Environment

You'll need an Ethereum provider like MetaMask, so make sure you have it configured in your browser. The application will automatically detect MetaMask and ask for wallet permissions.

If you're using a specific subgraph endpoint or network, ensure that the correct subgraph URL is used in the `App.js` file. For this project, the URL is already set to the Uniswap V3 subgraph in App.js.

Example subgraph URL for Uniswap V3:
```js
const GRAPH_API_URL = 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3';
```

---

### 4. Running the Application Locally

Once all the dependencies are installed, you can start the application:

```bash
cd backend
node server.js
```
```bash
cd frontend/my-app
npm run start
```

This command will start the development server, and you should see the application running at `http://localhost:3000`. The server will be running at `http://localhost:5000`.

If MetaMask is installed, the app will prompt you to connect your wallet.

---

## Project Structure

The main files to take note of:
- **`src/App.js`**: The main component where MetaMask is connected, and the Uniswap V3 positions are fetched and displayed.
- **`backend/server.js`**: The backend server that serves the frontend application.

---

### How It Works

1. **Wallet Connection**: When the app loads, it prompts the user to connect their MetaMask wallet.
2. **Fetching Positions**: After the wallet is connected, the dApp queries the Uniswap V3 subgraph using the connected wallet's address to fetch any liquidity positions the user has provided.
3. **Displaying Data**: The positions are displayed on the frontend, showing relevant details like liquidity, token pairs, and position IDs.

---

## Querying the Uniswap V3 Subgraph

The dApp uses GraphQL to query the Uniswap V3 subgraph for liquidity positions of the connected wallet. Example GraphQL query:

```graphql
{
  positions(where: { owner: "WALLET_ADDRESS" }) {
    id
    liquidity
    token0 {
      symbol
    }
    token1 {
      symbol
    }
  }
}
```

You can find more information about the Uniswap V3 subgraph [here](https://thegraph.com/explorer/subgraph/uniswap/uniswap-v3).


## Troubleshooting

### Common Issues:
1. **MetaMask Not Connecting**:
   - Make sure MetaMask is installed and running in the browser.
   - Ensure you're connected to the correct Ethereum network.

2. **Subgraph Query Returning Empty Data**:
   - Verify that the wallet address has positions in Uniswap V3.
   - Check that the GraphQL query is correctly structured in `App.js`.

---

## Future Improvements

- Add pagination and filtering for positions.
- Integrate other DeFi protocols for a multi-protocol dashboard.
- Add real-time updates for position data using The Graph subscriptions.
- Style the UI for a better user experience.

---

## Contact

For any issues or further assistance, feel free to contact the maintainer at [mdayanhassan718@gmail.com].
