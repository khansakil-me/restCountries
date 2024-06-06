
import { useEffect, useState } from 'react'
import './App.css'
import Country from './count/Country'

function App() {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])
  

  return (
    <>
    <div className='cont'>
      {countries.map(country => <Country key={country.cca3} country={country}></Country>)}
    </div>
    </>
  )
}

export default App
