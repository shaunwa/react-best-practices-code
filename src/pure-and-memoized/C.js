import { memo } from 'react';

const C = memo(({ myProp }) => {
    console.log('Rendering C');

    return (
        <>
        <h1>C</h1>
        <p>No message for C</p>
        <p>myProp: {myProp}</p>
        </>
    )
});

export default C;