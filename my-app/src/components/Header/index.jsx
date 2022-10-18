import { Link, Outlet } from "react-router-dom"
import Widget from "../widget"

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="img">
                    <Link to={'/'}>
                        <img src="https://via.placeholder.com/200x50" alt="" />
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'catalog'}>Catalog</Link></li>
                        <li><Link to={'abaut'}>Abaut</Link></li>
                    </ul>
                </nav>
                <Widget />
            </header>
            <Outlet />
        </>
    )
}

export default Header