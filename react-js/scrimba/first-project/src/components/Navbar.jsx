import reactLogo from '../assets/react.svg'

export default function Navbar(){
    return(
        <nav className='navbar'>
          <div className='navlogo'>
              <img src={reactLogo} className="logo" alt="React logo" width='28.93px' />
              <h2>ReactFacts</h2>
          </div>
          <div>
            <h3>React Course - Project 1</h3>
          </div>
        </nav>
    )
}