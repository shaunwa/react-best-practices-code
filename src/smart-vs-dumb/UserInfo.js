import capitalize from './capitalize';

const UserInfo = ({ user, onAction, actionText }) => {
    const { name, email, bio, likes } = user;

    return (
        <>
        <h3>{name}</h3>
        <p>Email: {email}</p>
        <p>{bio}</p>
        <ul>
        {likes.map(like => <li key={like}>{capitalize(like)}</li>)}
        </ul>
        {onAction && <button onClick={onAction}>{actionText}</button>}
        </>
    );
}

export default UserInfo;