import React from "react";
import './collections-overview.styles.scss';
import { useSelector } from "react-redux";
import { selectCollectionPreview } from 'redux/shop/shop-selectors';
import PreviewCollection from "components/preview-collection/preview-collection";

interface ICollection  {
    id: number;
    title: string;
    routeName: string;
    items: {
        id: number;
        name: string;
        imageUrl: string;
        price: number;
    }[];
}

const CollectionsOverView = () => {
    const collections: ICollection[] = useSelector(selectCollectionPreview);

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