import '../App.css'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div style={{margin:5, padding:5}}>
        <FaFacebook style={{width:30,height:30,color:'blue',marginRight:15,cursor:'pointer'}}/>
        <FaInstagram style={{width:30,height:30,marginRight:15,cursor:'pointer'}}/>
        <FaTwitter style={{width:30,height:30,color:'blue',cursor:'pointer'}}/>
        </div>
        
        <p style={{marginBottom:10,fontSize:20}}>All rights reserved. Designed By<span style={{color:'crimson'}}> Muhammad Ali</span></p>
      </footer>
    </div>
  )
}

export default Footer