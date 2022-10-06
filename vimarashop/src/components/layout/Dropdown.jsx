import { Link } from 'react-router-dom';

const Dropdown = ({lista}) => {
    return (
        <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Colecciones</Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/category/:id">{lista [0]}</Link>
                  <Link className="dropdown-item" to="/category/:id">{lista [1]}</Link>
                </div>
              </li>
    );
}

export default Dropdown;
