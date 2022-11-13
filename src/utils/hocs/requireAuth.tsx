import { Navigate } from 'react-router-dom'
import {useAppSelector} from "../hooks";




interface IProps {
    children : JSX.Element
}
export function RequireAuth({ children } : IProps) {
    let auth = useAppSelector( state => state.auth.user);

    if (!auth) {
        return <Navigate to="/auth" replace />;
    }

    return children;
}