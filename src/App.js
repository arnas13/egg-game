import './App.css';
import {useState} from 'react'
import Farm from "./components/farm"
import Shop from "./components/shop"

function App() {
  const [money, setMoney] = useState(100)
  const [eggsInShop, setEggsInShop] = useState(20)
  const [myEggs, setMyEggs] = useState([])
  const [space, setSpace] = useState(1)
  const [error, setError] = useState({error: false, message: ""})

  const addError = (message) => {
    return setError({error: true, message})
  }

  const buyEgg = () => {
    if(myEggs.length < space) {
      if(money >= 5) {
        const egg = {
          stage: 1,
          price: 1,
          weight: 0
        }
        setMyEggs([...myEggs, egg])
        return setMoney(money-5)
      }
      return addError('There is not enough space')
    }
    return addError('There is not enough space')
  }

  const buySpace = () => {
    if(money >= 10) {
      setMoney(money-10)
      return setSpace(space+1)
    }
    return addError('There is not enough money')
  }
  const evolve = (index) => {
    const random = (num) => Math.round(Math.random() * num)
    
    if(myEggs[index].stage === 1 || myEggs[index].stage === 4) {
      if(random(2) === 1 || myEggs[index].stage === 4) {
        let eggs = myEggs.filter((egg, i) => i !== index)
        return setMyEggs([...eggs])
      }
    }

    

    let eggs = myEggs
    eggs[index].stage++
    eggs[index].price += random(10)
    eggs[index].weight += random(20)
    setMyEggs([...eggs])
  }

  const sell = (index) => {
    const bird = myEggs[index] 
    setMoney(money + bird.price + bird.weight / 2)

    const eggs = myEggs.filter((egg, i) => i !== index)
    return setMyEggs([...eggs])
  }

  return (
    <div className="app">
      <div className="text-center">Money: {money} $</div>
      <div className="d-flex center">
          <Shop eggs={eggsInShop} buy={buyEgg}/>
          <Farm evolve={evolve} 
                sell={sell}
                eggs={myEggs} 
                space={space} 
                buySpace={buySpace}/>
      </div>

      {error.error ? 
        <div className="error">
          {error.message}
        </div> : null }
      
    </div>
    
  );
}

export default App;
