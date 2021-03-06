import "./style.css"
import { Navbar,NavbarBrand } from "reactstrap";
const Nav =()=>{
    return(
        <Navbar className="navLogo" expand="xl">
        <NavbarBrand  href="/">
          <h1>nearby Therapist</h1>
          <span>Find Your Top Local Therapists</span>
        </NavbarBrand>
      </Navbar>
    )
}
export default Nav;