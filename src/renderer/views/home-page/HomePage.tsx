import React, { useEffect } from 'react';
import '../styles/home-page.scss';

export default function HomePage() {
    const [counter, setCounter] = React.useState(0);

    useEffect(() => {
        setInterval(() => setCounter((c) => c + 1), 1000);
    }, []);
    return (
        <div id="home-page">
            <div>{counter}</div>
            <form>
                <label htmlFor="inputField">
                    Name--bla:
                    <input type="text" id="inputField" name="name" />
                </label>
                <label htmlFor="inputField">
                    Email:
                    <input type="text" id="inputField" name="name" />
                </label>
                <label htmlFor="inputField">
                    Address:
                    <input type="text" id="inputField" name="name" />
                </label>
                <label htmlFor="inputField">
                    Phone:
                    <input type="text" id="inputField" name="name" />
                </label>
            </form>
        </div>
    );
}
