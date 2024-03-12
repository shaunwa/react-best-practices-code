import { memo } from 'react';

const AChild2 = memo(() => {
    console.log('Rendering AChild2');

    return (
        <h3>AChild2</h3>
    );
});

export default AChild2;