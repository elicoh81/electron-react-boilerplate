import React from 'react';
import '../styles/home-page.scss';

export default function HomePage() {
    return (
        <div id="home-page">
            <form>
                <label htmlFor="inputField">
                    Name:
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
