import { Link } from "react-router-dom"

const Widget = () => {
    return (
        <div className="widget">
            <Link to={'cart'}>
                <span className="count">0</span>
                <span>|</span>
                <span className="price">0</span>
            </Link>
        </div>
    )
}

export default Widget;