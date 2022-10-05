import {Link} from 'react-router-dom'

const Sections = () => {
    return (
        <>
            <li className="nav-item">
                <link className="nav-link active" href="/">Home
                  <span className="visually-hidden">(current)</span>
                </link>
              </li>
              <li className="nav-item">
                <link className="nav-link" href="/About">Sobre Mí</link>
              </li>
              <li className="nav-item">
                <link className="nav-link" href="/contacto">Contacto</link>
              </li>
        </>
    );
}

export default Sections;
