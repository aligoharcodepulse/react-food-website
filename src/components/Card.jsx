import Burger from '../assets/burger.png'

const Card = () => {
  return (
    <div>
      <div className='row'>
        <div style={{display:'flex',width:'100%',border:'1px solid transparent',borderRadius:'7px',backgroundColor:'#fff', padding:10, margin:10}}>
        <img src={Burger} style={{width:110,height:110,marginRight:20, border:'1px solid transparent',borderRadius:'5px'}} />
            <div className='details'>
            <h3 style={{fontSize:'22px'}}>Food Title</h3>
            <p style={{fontSize:'20px'}}>$2.3</p>
              <p>Made with italian sauce, chicken, and organice vegetables.</p>
              <button style={{padding:8, marginTop:7, backgroundColor:"crimson", color:'#fff',border:'0px solid transparent',borderRadius:'3px',cursor:'pointer'}}>Order Now</button>
            </div>
        </div>
        <div style={{display:'flex',width:'100%',border:'1px solid transparent',borderRadius:'7px',backgroundColor:'#fff', padding:10, margin:10}}>
        <img src={Burger} style={{width:110,height:110,marginRight:20, border:'1px solid transparent',borderRadius:'5px'}} />
            <div className='details'>
            <h3 style={{fontSize:'22px'}}>Food Title</h3>
            <p style={{fontSize:'20px'}}>$2.3</p>
              <p>Made with italian sauce, chicken, and organice vegetables.</p>
              <button style={{padding:8, marginTop:7, backgroundColor:"crimson", color:'#fff',border:'0px solid transparent',borderRadius:'3px',cursor:'pointer'}}>Order Now</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Card
