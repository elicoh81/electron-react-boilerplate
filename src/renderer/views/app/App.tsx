import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/App.scss';
import HomePage from '../home-page/HomePage';
import PageWrapper from '../page-wrapper/PageWrapper';
import Hello from './Hello';
import Todo from '../todo/Todo';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <PageWrapper>
                            <HomePage />
                        </PageWrapper>
                    }
                />
                <Route
                    path="/Hello"
                    element={
                        <PageWrapper>
                            <Hello />
                        </PageWrapper>
                    }
                />
                <Route
                    path="/Todo"
                    element={
                        <PageWrapper>
                            <Todo />
                        </PageWrapper>
                    }
                />
            </Routes>
        </Router>
    );
}
