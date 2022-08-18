import React from 'react';

const DogLink = props  => {

    return (
        <React.Fragment>
        <img className="my-5 w-1/12 dog-link-img-width dog-link-img-height rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-200" src={props.url} alt="dog" />
        <div className="font-thin text-sm text-center dog-link-img-width ">{props.breed}</div>
        </React.Fragment>
    );
};

export default DogLink;