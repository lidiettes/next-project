import { Counter } from './Counter.jsx'

export default function Layout({ children }) {
    return (
        <div>
            <Counter />
            <marquee style={{background: '#fff', color: 'red', fontSize: '3rem'}}>Eres una crack po po po</marquee>
            {children}
        </div>
    )
}