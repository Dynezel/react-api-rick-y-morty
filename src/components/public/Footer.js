import React, {useState} from 'react'

const Footer = () => {

  const [clicks, setClicks] = useState(0)

  const handleClick = () => {
    setClicks(clicks + 1)
  }

  return (
    <div>
      <div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p class="col-md-4 mb-0 text-body-secondary">&copy; 2023 Company, Inc 
    Clicks = {clicks} </p>

    <span
     className = "col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
     onClick= {handleClick}
    >
      <img 
      className = "App-logo"
      src = "./public/logo512.png"
      alt = "logo"
      
      />
      
    </span>

    <ul class="nav col-md-4 justify-content-end">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
    </ul>
  </footer>
</div>
    </div>
  )
}

export default Footer
