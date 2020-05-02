import React from 'react';
import './App.css';
import Home from 'pages/home/home';
import Shop from 'pages/shop/shop';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from 'components/header/header';
import SignInAndSignOut from "pages/signIn-and-signOut/signIn-and-signOut";
import CheckOut from "pages/checkout/checkout";
import { auth, createUserProfileDocument } from 'firebase/firebase.settings';
import { connect } from 'react-redux';
import { setCurrentUser } from "redux/user/user-actions";
import {Dispatch} from "redux";
import { userSelector } from "redux/user/user-selectors";
import { IUser } from 'interfaces/user.interface';
import { IStore } from 'interfaces/store.interface';

let unSubscribeFromAuth: any;
interface IProps {
    setCurrentUser: (user: IUser|null) => void;
    currentUser: IUser|null;
}

class App extends React.Component<IProps> {
    componentDidMount(): void {
        const { setCurrentUser } = this.props;
        unSubscribeFromAuth = auth.onAuthStateChanged(async user => {
            if(user) {
                const userRef = await createUserProfileDocument(user);
                userRef!.onSnapshot(snapShot => {
                    const data = snapShot.data();
                    setCurrentUser({
                        id: snapShot.id,
                        createdAt: data!['createdAt'],
                        email: data!['email'],
                        displayName: data!['displayName']
                    });
                });
            } else {
                setCurrentUser( null);
            }
        });
    }

    componentWillUnmount(): void {
       unSubscribeFromAuth();
    }

    render() {
        const { currentUser } = this.props;
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/shop' component={Shop}/>
                    <Route path='/checkout' component={CheckOut}/>
                    <Route path='/signIn' render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignOut/>)}/>
                </Switch>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setCurrentUser: (user: IUser|null) => dispatch(setCurrentUser(user))
});
const mapStateToProps = (state: IStore ) => ({
    currentUser: userSelector(state)
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
