import "./NavBar.css"
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <div className="navbar">
                <div className="title">
                    <Link to='/'>Nate Robison</Link>
                </div>
                
                <div className="navbar-right">
                    <a href="#" className="navbar-item">About</a>
                    <a href="#" className="navbar-item">Skills</a>
                    <a href="#" className="navbar-item">Projects</a>
                    <a href="#" className="navbar-item">Resume</a>
                    <Link to='/services' className="navbar-item">Services</Link>
                    <div className="links">
                        <a href="https://github.com/NRProjects" className="navbar-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="white" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>
                        </a>
                        <a href="mailto:nate@naterobison.dev" className="navbar-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="white" d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm8-7L4 8v10h16V8l-8 5Zm0-2l8-5H4l8 5ZM4 8V6v12V8Z"/></svg>
                        </a>
                    </div>
                </div>
            </div>

        </>
    );
}

export default NavBar