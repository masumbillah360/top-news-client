import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummery from '../NewsSummery/NewsSummery';

const News = () => {
    const news = useLoaderData();
    return (
        <div>
            <h1>News Container {news.length}</h1>
            {
                news.map(n=> <NewsSummery key={n._id} news={n}></NewsSummery> )
            }
        </div>
    );
};

export default News;