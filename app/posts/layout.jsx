import { Counter } from './Counter.jsx'

export default function PostsLayout({ children }) {
    return (
        <div>
            <Counter />
            {children}
        </div>
    )
}