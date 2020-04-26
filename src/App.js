import React, { useEffect, useState } from 'react';
import { Header } from './Components/Header';
import * as axios from 'axios'
import { ContentWrapper } from './Components/ContentWrapper';

function App() {
  const [data, setData] = useState([])


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://restcountries.eu/rest/v2/name/united')
        const { data } = response
        setData(Array.from(data))
      } catch(e) {
        console.log(e)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <Header />
      <ContentWrapper />
    </>
  );
}

export default App;
