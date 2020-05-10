import React, { useEffect, lazy, Suspense } from "react";
import { Route } from 'react-router-dom';
import { useDispatch } from "react-redux";
import  { fetchShopDataStart } from 'redux/shop/shop-action';
import Spinner from "components/spinner/spinner";

const CollectionsOverViewPage = lazy(() => import('components/collections-overview/collections-overview'));
const CollectionPage = lazy(() => import('pages/collection/collection'));

const Shop = ({match}: {match: {path: string}}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchShopDataStart());
    }, []);

    return (
        <div className='shop-page'>
            <Suspense fallback={<Spinner />}>
                <Route exact path={`${match.path}`} component={CollectionsOverViewPage}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
            </Suspense>
        </div>
    );
};

export default React.memo(Shop);