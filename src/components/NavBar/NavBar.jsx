import { Link } from 'react-router-dom'
import styles from './NavBar.modules'

const NavBar = ({ user, handleLogout }) => {

  const publicLinks = (
    <ul>
      <li><Link to="/login">Log In</Link></li>
      <li><Link to="/signup">Sign Up</Link></li>
    </ul>
  )


  const protectedLinks = (
    <ul>
      {/* <li>Welcome, {user.name}</li> */} 
      //! uncomment this out when backend is connecting
      <li><Link to="/profiles">Profiles</Link></li>
      <li><Link to="/birds">Birds</Link></li>

      <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
      <li><Link to="/changePassword">Change Password</Link></li>
    </ul>
  )

  return (
    <nav className={styles.container}>
      {/* <NavLink to={'/'}><img src={Logo} alt="Logo" /></NavLink> */}
      {user ? protectedLinks : publicLinks}
    </nav>
  )
}

//! need to get logo in front-end, then uncomment out return area

export default NavBar
