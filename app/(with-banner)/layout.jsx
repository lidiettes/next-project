import { Counter } from './posts/Counter.jsx'

export default function Layout({ children }) {
    return (
        <div>
            <Counter />
            <marquee style={{background: '#fff', color: 'red', fontSize: '3rem'}}>Next.js 13</marquee>
            {children}
        </div>
    )
}