import BChild1 from "./BChild1";
import BChild2 from "./BChild2";

const B = ({ message }) => {
    console.log('Rendering B');

    return (
        <>
        <h1>B</h1>
        <p>Message: {message}</p>
        <BChild1 />
        <BChild2 />
        </>
    )
}

export default B;