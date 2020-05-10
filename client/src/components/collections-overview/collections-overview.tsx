import React from "react";
import './collections-overview.styles.scss';
import { useSelector } from "react-redux";
import { selectCollectionPreview } from 'redux/shop/shop-selectors';
import PreviewCollection from "components/preview-collection/preview-collection";
import { ICollectionreview } from 'interfaces/cart.interface';
import Spinner from "components/spinner/spinner";

const CollectionsOverView = () => {
    const collections: ICollectionreview[] = useSelector(selectCollectionPreview);

    return (
      <div className='collections-overview'>
          {
              collections ?
                  collections.map(({id, ...collectionProps}) => {
                      return (
                          <div key={id}>
                              <PreviewCollection {...collectionProps} />
                          </div>
                      );
                  }) : <Spinner />
          }
      </div>
    );
};

export default CollectionsOverView;