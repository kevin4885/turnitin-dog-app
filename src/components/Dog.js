import React from 'react';

const Dog = props => {

    return (
        <div className="text-center pb-32 dog-img">
            <h1 className="font-thin text-4xl pb-5">{props.breed}</h1>
            <img alt={props.breed} className="m-auto shadow-2xl shadow-gray-500 rounded"  src={props.url}/>
        </div>
    );
};

export default Dog;