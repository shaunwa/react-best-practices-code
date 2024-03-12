import { memo } from 'react';

const AChild1 = memo(() => {
    console.log('Rendering AChild1');

    return (
        <h3>AChild1</h3>
    );
});

export default AChild1;