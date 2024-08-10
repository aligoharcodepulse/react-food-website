import '../App.css'
import Logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div>
    <nav className='navbar'>
        <img className='img' src={Logo} />
        <ul className="list">
            <li className='listItem'>Home</li>
            <li className='listItem'>About</li>
            <li className='listItem'>Foods</li>
            <li className='listItem'>Contact</li>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar
