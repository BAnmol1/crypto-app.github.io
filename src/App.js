import React,{ useEffect,useState} from 'react';
import './App.css';
import Axios  from 'axios';
import Coin from './components/Coin';
function App() {
  const [coinsList,setCoinsList]=useState([]);
  const [searchCoin,setSearchCoin]=useState("");
  useEffect(()=>{
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then((response)=>{
       setCoinsList(response.data.coins);
    })
  },[]);
  const filteredCoins=coinsList.filter((coin)=>{
    return coin.name.toLowerCase().includes(searchCoin.toLowerCase())
  });
  return (
    <div className="App">
      <div className='cryptoHeader'>
        <input type="text" placeholder="Bitcoin..." onChange={(e)=>setSearchCoin(e.target.value)}/>
      </div>
      <div className='cryptoDisplay'>{filteredCoins.map((coin,i)=>{
            return <Coin name={coin.name} icon={coin.icon} price={coin.price} symbol={coin.symbol} rank={coin.rank}/>
      })}</div>
    </div>
  );
}

export default App;
