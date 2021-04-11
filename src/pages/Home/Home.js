import React, { useState } from 'react';
import FilterItem from '../../components/FilterItem';
import Header from '../../components/Header';
import Search from '../../components/Search';
import ValueProposition from '../../components/ValueProposition';
import './home.scss';

const Home = () => {
    const [filters] = useState([
        {
            name: 'django/django'
        },
        {
            name: 'microsoft/vscode'
        },
        {
            name: 'jezen/is-thirteen'
        },
        {
            name: 'benawad/dogehouse'
        }
    ])
    
    return (
        <div className="home">
            <Header />
            <ValueProposition />
            <Search page='home' />
            <FilterItem {...{ filters }} />
        </div>
    )
}

export default Home;