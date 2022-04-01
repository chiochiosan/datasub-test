import { useState } from "react"
import Web3 from "web3/dist/web3.min";
import './App.css';

function App() {

  const [login, loginMM] = useState('');

  async function checkWeb3() {

    var web3 = new Web3(window.ethereum);

    try {

      const accounts = await web3.eth.getAccounts();

      if (accounts.length === 0) {

        return loginMM("MetaMask is locked - please login");

      } else {

        return loginMM(accounts[0]);

      }

    } catch (e) {

      console.error("web3 provider error", e.message)
      return e.message;

    }

  }

  return (
    <div className="container">
      <button onClick={checkWeb3}>Get Public Key</button>
      <p>{login}</p>
    </div>
  );



}

export default App;
