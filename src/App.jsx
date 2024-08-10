import Burger from './assets/burger.png'
import Pizza from './assets/pizza.png'
import French from './assets/french.png'
import Card from './components/Card'
import './App.css'

function App() {
  

  return (
    <>  
        {/* Header */}
        <div className="header">
          <input type="text" placeholder="Search Item" />
          <button>Search</button>
        </div>

        {/* Explore Foods */}
        <h1 style={{textAlign:'center', margin:'30px'}}>Explore Foods</h1>
        <div className='exploreFoods'>
          <img className='img-box' src={Burger}/>
          <img className='img-box' src={Pizza}/>
          <img className='img-box' src={French} />
        </div>

        {/* Food Menu */}
        <div className='FoodMenu'>
        <h1 style={{marginTop:30,marginBottom:30}}>Food Menu</h1>
        <Card/>
        <Card/>
        <Card/>
        </div>
      
    </>
  )
}

export default App
