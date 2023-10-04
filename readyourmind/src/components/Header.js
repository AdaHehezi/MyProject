import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <nav className="navbar navbar-light navbar-expand-sm sticky-top bg-light">
        <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                <span className="navbar-toggler-icon"> </span>
            </button>
         
           <div className="collapse navbar-collapse" id="Navbar">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link" >
                            <span className="fa fa-home fa-lg"></span> Home</Link></li>
                    <li className="nav-item">
                        <Link to="/Readmind" className="nav-link" >
                            <span className="fa fa-list fa-lg"></span> Read Mind Game</Link></li>
                    <li className="nav-item">
                        <Link to="/AboutMe" className="nav-link">
                            <span className="fa fa-info fa-lg"></span> About Me</Link></li>
                    <li className="nav-item">
                        <Link to="/ContactMe" className="nav-link">
                            <span className="fa fa-address-card fa-lg"></span> Contact Me</Link></li>
                 </ul>             
               
                </div>
        </div>

    </nav>
    );
}
 
export default Header;