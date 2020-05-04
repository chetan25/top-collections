import React, { useEffect } from "react";
import CollectionsOverView from "components/collections-overview/collections-overview";
import CollectionPage from "pages/collection/collection";
import { Route } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import  { fetchShopDataStart } from 'redux/shop/shop-action';
import { shopSelectorLoadingState } from 'redux/shop/shop-selectors';

const Shop = ({match}: {match: {path: string}}) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(shopSelectorLoadingState);
    console.log(isLoading, 'isLoading');

    useEffect(() => {
        dispatch(fetchShopDataStart());
    });

    return (
        <div className='shop-page'>
            {
                isLoading ? null :
                <>
                    <Route exact path={`${match.path}`} component={CollectionsOverView}/>
                    <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
                </>
            }
        </div>
    );
};

export default Shop;