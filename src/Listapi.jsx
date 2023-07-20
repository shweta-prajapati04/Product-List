import React, { useEffect, useState } from 'react'

export const Listapi = () => {
    let [data, setdata] = useState([]);
    const getApidata = async () => {
        let result = await fetch("https://dummyjson.com/products");
        data = await result.json();
        setdata(data.products);


    }
    useEffect(() => {
        getApidata();
    }, []);
    return (

        <div className='container'>
            <h1 style={{ color: '#0db10b' }} >PRODUCTS</h1>
            <div className='section-grid' >
                <div className='list-prd' >
                    {
                        data.length > 0 && data.map((item) => {
                            return (
                                <div className='listmaindiv' key={item.id} >
                                    <img src={item.thumbnail} alt="image"></img>
                                    <div style={{ margin: '5px' }}><span style={{ color: '#0db10b' }}>
                                    <b>Model :</b></span><span className='prdtitle'>{item.title}</span></div>
                                    <h3> <span>Price :</span>{item.price}</h3>
                                    <p className='descdiv'> {item.description}</p>

                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
