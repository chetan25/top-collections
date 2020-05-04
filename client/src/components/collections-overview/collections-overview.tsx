import React from "react";
import './collections-overview.styles.scss';
import { useSelector } from "react-redux";
import { selectCollectionPreview } from 'redux/shop/shop-selectors';
import PreviewCollection from "components/preview-collection/preview-collection";
import { ICollectionreview } from 'interfaces/cart.interface';

const CollectionsOverView = () => {
    const collections: ICollectionreview[] = useSelector(selectCollectionPreview);
    console.log(collections, 'collections');

    return (
      <div className='collections-overview'>
          {
              collections.map(({id, ...collectionProps}) => {
                  return (
                      <div key={id}>
                          <PreviewCollection {...collectionProps} />
                      </div>
                  );
              })
          }
      </div>
    );
};

export default CollectionsOverView;