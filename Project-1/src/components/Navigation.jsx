const Navigation = () => {
    return (<nav className="container"> 
        <div className="nikelogo">
          <img src="/images/brand_logo.png" alt="nike-logo" />
        </div>
  
        <ul>
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
  
        <button>
          Login
        </button>
      </nav>);
};

export default Navigation;