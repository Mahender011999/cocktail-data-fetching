import React, { useEffect, useState } from 'react'

const URL ="https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

function App() {
  const [drinksData,setDrinksData] = useState([])
  const [searchData,setSearchData] = useState('')
 

  const fetchDrinks = async (apiURL) =>{
    const response = await fetch(apiURL)
    const {drinks} = await response.json()
    setDrinksData(drinks);
   }

  useEffect(()=>{
    const correctUrl = `${URL} ${searchData}`
    fetchDrinks(correctUrl)
  },[searchData])

    
  return (
    <center>
    <div>
      <input type='text' value={searchData}  name='search' onChange={(e)=>setSearchData(e.target.value)} placeholder='Search Somithing New......' />
      <hr/>
      <ul>
      {  drinksData.map((eachItem)=>{
              const {idDrink,strDrink,strCategory,strGlass,strDrinkThumb} = eachItem
        return (
          <li key={idDrink}>
          <h1>{strDrink}</h1>
          <p>{strCategory}</p>
          <p>{strGlass}</p>
          <img src={strDrinkThumb} alt="" style={{height:"80px",width:"60px"}} />
          </li>
        )
      })}
      </ul>
    </div>
    </center>
  )
}

export default App
