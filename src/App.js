import './Styles/main.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Chart from './components/Chart';
import Search from './components/Search';
import PaginationPrev from './components/PaginationPrev';
import PaginationNext from './components/PaginationNext';


const App = () => {
  const crypto_URL = 'https://api.coingecko.com/api/v3/'

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const [cryptoName, setCryptoName] = useState([]);//crypto data by name of the crypto
  const [currency, setCurrency] = useState('')//name of crypto currency

  const [crypto, setCrypto] = useState([]);//crypto data 200 items

  const [currentPage, setCurrentPage] = useState(1)//num of the page
  const [cryptoPerPage] = useState(10)//name of items on  page




  const handelChange = (e) => { //getting the name from the search line
    setCurrency(e.target.value)

  }
  const handleSubmit = (e) => { //cleaning the search line
    e.preventDefault();
    setCurrency("")
  }

  useEffect(() => { //getting the data from the api by the name of the crypto currency
    const fetchCrypto = async () => {
      setError(false);
      setLoading(true);
      try {
        const result = await axios.get(`${crypto_URL}coins/${currency}/market_chart?vs_currency=usd&days=30&interval=daily`);
        setCryptoName(result.data.prices);
        console.log('crypto', result.data);
        setLoading(false);
      }
      catch (error) {
        setError(true);
        setLoading(false);
      }
    }
    fetchCrypto()
  }, [currency]);

  useEffect(() => { //getting the data from the api for the 200 crypto 
    const fetchCrypto = async () => {
      setError(false);
      setLoading(true);
      try {
        const result = await axios.get(`${crypto_URL}coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false`);
        setCrypto(result.data);
        setLoading(false);
        // console.log('crypto', result.data);
      }
      catch (error) {
        setError(true);
        setLoading(false)
      }
    }
    fetchCrypto()
  }, []);



  const handleChoice = (id) => { //setting the name by the chose in the navbar (by id)
    setCurrency(id)
    console.log(id)
  }
  const timestamp = loading
    ? ""
    : cryptoName.map((item) => new Date(item[0]).toLocaleDateString()); //mapping the dates from the api call

  const prises = loading
    ? ""
    : cryptoName.map((item) => item[1]); //mapping the prises from the api call

  const indexOfLastPost = currentPage * cryptoPerPage; //number of items already seen 
  const indexOfFirstPost = indexOfLastPost - cryptoPerPage;// num of total pages 
  const currentCoins = crypto.slice(indexOfFirstPost, indexOfLastPost);//cutting 10 from the data

  const next = () => { //getting the next page
    setCurrentPage(currentPage => currentPage + 1)
  }
  const prev = () => { //getting the prev page
    setCurrentPage(currentPage => currentPage - 1)
  }
  return (
    <div >

      <div className="arrow">
        <PaginationPrev
          prev={prev}
          currentPage={currentPage}
        />
        {currentCoins.map((item, index) => (
          <Navbar
            key={index}
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.current_price}
            change={item.market_cap_change_percentage_24h}
            handleChoice={handleChoice}
          />
        ))}
        <PaginationNext
          next={next}
          currentPage={currentPage}
        />
      </div>

      <Search
        handelChange={handelChange}
        handleSubmit={handleSubmit}
        currency={currency}
      />
      {loading ? "" :
        <Chart
          timestamp={timestamp}
          prises={prises}
          loading={loading}
          currency={currency}
        />}
    </div>
  );
}

export default App;
