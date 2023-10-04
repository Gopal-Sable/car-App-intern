import React from 'react'
import data from '../data/carsData.json'
import Card from './Card';
const List = ({ results }) => {



    return (
        <div className="container">
            <div className="row" style={{width:"1000px"}}>

                {results.map(item => (
                    <div className="col md-4 my-4" key={item.id}>
                        <Card car={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default List