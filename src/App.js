import React,{useState} from 'react'

const App = () =>{
    let [coins , setCoins] = useState(0);

    return(
        <div>
            <h1>Number of coins : {coins}</h1>
            <button onClick={() => (coins<=9 ? setCoins(coins+1) :"") }>Increment</button>
            <button onClick={() =>(coins>=1 ? setCoins(coins-1): "" )}>Decrement</button>
            <button onClick={() => {setCoins(0)} }>Reset</button>
        </div>
    )
    
}

export default App;