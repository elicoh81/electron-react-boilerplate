import * as React from 'react';
import { Link } from 'react-router-dom';

interface PageWrapperProps {
    children: any;
}

export default function PageWrapper({ children }: PageWrapperProps) {
    return (
        <>
            <nav>
                <ul className="nav-container">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Todo">
                            Todo
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Hello">
                            Hello
                        </Link>
                    </li>
                </ul>
            </nav>
            {children}
        </>
    );
}
