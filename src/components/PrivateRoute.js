import { Route, Redirect } from 'react-router';


const PrivateRoute = ({ component: Component, ...rest }) => {

    return (
        
        
        <Route {...rest} render={props => (
            <div>
                {localStorage.getItem('auth_token') ?
                <Component {...props} />
                :<Redirect to ="/login" />}
            </div>
            
        )} />


    );


}

export default PrivateRoute;