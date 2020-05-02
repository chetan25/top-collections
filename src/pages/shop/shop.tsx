import React from "react";
import CollectionsOverView from "components/collections-overview/collections-overview";
import CollectionPage from "pages/collection/collection";
import { Route } from 'react-router-dom';

const Shop = ({match}: {match: {path: string}}) => {
  return (
     <div className='shop-page'>
       <Route exact path={`${match.path}`} component={CollectionsOverView}/>
       <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
     </div>
  );
};

export default Shop;