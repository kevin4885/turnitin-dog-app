import React from 'react';
import DogLink from "./DogLink";

const DogLinks = props  => {

    return (
        <ul className="list-none m-0 p-0 overflow-hidden w-full flex justify-center">

        {Object.keys(props.breeds).map((key) => {
                return (
                    <li className="block px-1" key={key}>
                        <a href="#" onClick={(el) => props.clickHandler(el, key)}>
                      <DogLink breed={props.breeds[key].breed} url={props.breeds[key].url} />
                        </a>
                    </li>
                )
            })
        }

        </ul>
    );
};

export default DogLinks;