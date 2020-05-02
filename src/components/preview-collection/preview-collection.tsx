import React from "react";
import './preview-collection.styles.scss';
import CollectionItem from "components/collection-item/collection-item";

interface IProps {
    title: string;
    routeName: string;
    items: {
        id: number;
        name: string;
        imageUrl: string;
        price: number;
    }[];
}

const PreviewCollection = (props: IProps) => {
    const { title, items } = props;

    return (
       <div className='collection-preview'>
           <h1 className='title'>{title.toUpperCase()}</h1>
           <div className='preview'>
               {
                   items.filter((item, index) => index < 4)
                       .map(item => {
                          return (
                              <CollectionItem  key={item.id} item={item}/>
                          );
                       })
               }
           </div>
       </div>
   );
};

export default PreviewCollection;