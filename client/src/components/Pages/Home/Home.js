import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    const onClickToRSOs = () => {
        navigate('/rsos');
    }

    const onClickToLogin = () => {
        navigate('/signin');
    }

    const onClickToEvents = () => {
        navigate('/event');
    }

    return (
       <div>
            {/* Home Page Header */}
            <h1>WELCOME,</h1>
            <h1>HUSKIES</h1>

            {/* View RSOs Interactive Button */}
            <button onClick={onClickToRSOs}>View RSOs</button>

            {/* Log In Interactive Button */}
            <button onClick={onClickToLogin}>Log In</button>

            {/* View Events Interactive Button */}
            <button onClick={onClickToEvents}>View Events</button>

       </div>
    )
}