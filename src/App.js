import React, {useEffect, useState, useReducer} from 'react';
import produce from 'immer';
import Dog from "./components/Dog";
import DogLinks from "./components/DogLinks";

export default function App() {
    //const [dogs, setDogs] = useState([]);
    const [selected, setSelected] = useState(null);
    const breedsReducer = (state, {index, breed, url}) => produce(state, draft => {
        draft[index] = {breed, url};
    });
    const [breeds, dispatchBreed] = useReducer(breedsReducer, {});

    const clickHandler = (e, index) => {
        e.preventDefault();
        let breed = selected.breed;
        let url = selected.url;
        setSelected({breed: breeds[index].breed, url: breeds[index].url});
        dispatchBreed({index, breed, url});
    };

    useEffect(() => {
        if (!selected) {
            fetch("https://dog.ceo/api/breeds/image/random/11").then(
                response => response.json()
            ).then(
                data => {
                    let breed = getBreed(data.message[0]);
                    let url = data.message[0];
                    setSelected({breed, url});
                    for (let i = 1; i < data.message.length; i++) {
                        breed = getBreed(data.message[i]);
                        url = data.message[i];
                        dispatchBreed({index: i-1, breed, url});
                    }
                }
            )
        }
    }, []);

    const getBreed = (url) => {
        if (!url) return "";
        //Get breed from URL
        let breed = url.split('/')[4];
        //Split multi name breeds
        let words = breed.split('-');
        //Capitalize first letter
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
        return words.join(' ');
    }

    return (
        <div className="w-full flex flex-col content-center justify-center m-auto bg-gray-100">
            <div className="w-full max-w-7xl rounded-xl m-auto pt-10">
                {selected &&
                    <Dog url={selected.url} breed={selected.breed}/>
                }
                <DogLinks breeds={breeds} clickHandler={clickHandler} />
            </div>

        </div>
    )
}