import React from 'react';

const Dropdown = ({lista}) => {
    return (
        <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Colecciones</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">{lista [0]}</a>
                  <a className="dropdown-item" href="#">{lista [1]}</a>
                  <a className="dropdown-item" href="#">{lista [2]}</a>
                  <a className="dropdown-item" href="#">{lista [3]}</a>
                  <a className="dropdown-item" href="#">{lista [4]}</a>
                  <a className="dropdown-item" href="#">{lista [5]}</a>
                </div>
              </li>
    );
}

export default Dropdown;
