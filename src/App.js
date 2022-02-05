import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './component/LandingPage';
import CreateProposal from './component/CreateProposal';
import ViewProposal from './component/ViewProposal';
import { ChakraProvider } from '@chakra-ui/react';
import { ethers } from 'ethers';
import abi from './utils/Buildspace.json';

const App = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  const contractABI = abi.abi;
  const contractAddress = '0x3CD266509D127d0Eac42f4474F57D0526804b44e';

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      }
      console.log("We have the ethereum object", ethereum);

      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found")
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <>
      <ChakraProvider>
        <Router>
          <Routes>
            <Route exact path='/' element={< LandingPage />}></Route>
            <Route exact path='/createProposal' element={< CreateProposal />}></Route>
            <Route exact path='/ViewProposal' element={< ViewProposal />}></Route>
          </Routes>
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;