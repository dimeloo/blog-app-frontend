import { useState, useEffect } from 'react'

const Home = () => {
    const [entries, setEntries] = useState([])

    useEffect(() => {
        fetch('http://localhost:4040/')
        .then(response => response.json())
        .then(data => setEntries(data))
        .catch(err => console.error(err))
    }, [])

    const allEntries = entries.map(entry => <li>{entry.title}</li>)

    return (
        <>
            <h1>Home Component</h1>
            <ul>{allEntries}</ul>
        </>
    )
}

export default Home