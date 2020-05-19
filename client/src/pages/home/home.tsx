import React from 'react';
import './home.styles.scss';
import  Directory from  'components/directory/directory';
import { useSelector } from "react-redux";
import { directorySelector } from 'redux/directory/directory-selector';
import { IDirectoryItem } from "interfaces/cart.interface";

const Home = () => {
    const sections: IDirectoryItem[] = useSelector(directorySelector);

    return (
        <div className='homepage'>
           <Directory sections={sections}/>
        </div>
    );
};

export default Home;
