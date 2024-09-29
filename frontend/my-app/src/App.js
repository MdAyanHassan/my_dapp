import React, { useState } from 'react';
import { BrowserProvider } from 'ethers';

const App = () => {
    const [userAddress, setUserAddress] = useState('');
    const [positions, setPositions] = useState([]);

    // Connect wallet function
    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const provider = new BrowserProvider(window.ethereum);
                await provider.send("eth_requestAccounts", []);
                const signer = await provider.getSigner();
                const address = await signer.getAddress();
                setUserAddress(address);
                fetchPositions(address);
            } catch (error) {
                console.error(error);
            }
        } else {
            alert("Please install MetaMask!");
        }
    };

    // Fetch positions using the backend API
    const fetchPositions = async (address) => {
        const response = await fetch('http://localhost:5000/api/positions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ address }),
        });
        const data = await response.json();
        setPositions(data);
        console.log(positions);
    };

    return (
        <div>
            <h1>Uniswap v3 Liquidity Positions</h1>
            <button onClick={connectWallet}>Connect Wallet</button>
            {userAddress && <h2>Address: {userAddress}</h2>}
            <h3>Your Positions:</h3>
            {
            positions && Array.isArray(positions) && positions.length > 0 ? ( 
            <ul>
                {positions.map((position, index) => (
                    <li key={index}>
                        {position.token0.name}/{position.token1.name} - Liquidity: {position.liquidity}
                    </li>
                ))}
            </ul>) : (<p>No positions found for this user.</p>)
            }
        </div>
    );
};

export default App;
