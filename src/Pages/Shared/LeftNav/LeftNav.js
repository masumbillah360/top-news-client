import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [cat, setCat] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/cat')
        .then(res=>res.json())
        .then(data=> setCat(data));
    },[])
    return (
        <div>
            {
                cat.map(c=> <div className='my-2'>
                    <Link to={`/category/${c.id}`} className='text-decoration-none'>{c.name}</Link>
                </div> )
            }
        </div>
    );
};

export default LeftNav;