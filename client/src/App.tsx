import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {Dispatch} from "redux";

import './App.css';
import Header from 'components/header/header';
import Spinner from "components/spinner/spinner";
import ErrorBoundary from 'components/error-boundary/error-boundary';

import { checkUserSession } from "redux/user/user-actions";
import { userSelector } from "redux/user/user-selectors";
import { IUser } from 'interfaces/user.interface';
import { IStore } from 'interfaces/store.interface';

const HomePage = lazy(() => import('pages/home/home'));
const ShopPage = lazy(() => import('pages/shop/shop'));
const SignInSignOutPage = lazy(() => import('pages/signIn-and-signOut/signIn-and-signOut'));
const CheckOutPage = lazy(() => import('pages/checkout/checkout'));

// let unSubscribeFromAuth: any;
interface IProps {
    checkSession: () => void;
    currentUser: IUser|null;
    pageLoading: boolean;
}

class App extends React.Component<IProps> {
    componentDidMount(): void {
        this.props.checkSession();
    }

    componentWillUnmount(): void {
      // unSubscribeFromAuth();
    }

    render() {
        const { currentUser } = this.props;
        return (
            <div className="App">
                {
                    this.props.pageLoading ?
                        <Spinner /> :
                        <>
                            <Header/>
                            <Switch>
                                <ErrorBoundary>
                                    <Suspense fallback={<Spinner />}>
                                        <Route exact path='/' component={HomePage}/>
                                        <Route path='/shop' component={ShopPage}/>
                                        <Route path='/signIn' render={() => currentUser ? (<Redirect to='/' />) : (<SignInSignOutPage/>)}/>
                                        <Route path='/checkout' component={CheckOutPage}/>
                                    </Suspense>
                                </ErrorBoundary>
                            </Switch>
                        </>
                }
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    checkSession: () => dispatch(checkUserSession())
});
const mapStateToProps = (state: IStore ) => ({
    currentUser: userSelector(state),
    pageLoading: state.user.pageLoading
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
