import { useState, memo } from 'react';
import AChild1 from "./AChild1";
import AChild2 from "./AChild2";

const A = memo(({ message }) => {
    const [name, setName] = useState('Shaun');

    const reverseName = () => {
        setName(name.split('').reverse().join(''));
    }

    console.log('Rendering A');

    return (
        <>
        <h1>A</h1>
        <p>Name: {name}</p>
        <p>Message: {message}</p>
        <AChild1 />
        <AChild2 />
        <button onClick={reverseName}>Reverse Name</button>
        </>
    )
});

export default A;