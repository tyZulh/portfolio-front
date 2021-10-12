import logo from '../logo.svg'
import './Header.css'

const Header = () => {
  return (
    <header className="Header">
      <h1 className="Header-title">My react portfolio</h1>
      <img src={logo} className="Header-logo" alt="logo" />
    </header>
  )
}

export default Header
