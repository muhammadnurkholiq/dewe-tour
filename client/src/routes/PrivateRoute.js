import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({component: Component, ...rest}) => {
    const UserSignIn = true;

    return(
        <>
            <Route {...rest} render={(props) =>
                UserSignIn ? <Component {...props} /> : <Redirect to="/" />
            }
            />
        </>
    )
}

export default PrivateRoute