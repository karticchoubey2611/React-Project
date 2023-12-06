import './Navigation.css'

const Navigation = () => {
  return (
    <nav className='nav-container'>
        <div className="logo">
            <img src="/images/logo.png" alt="Logo" />
        </div>

        <ul>
            <li>Home</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>
    </nav>
  )
};

export default Navigation;