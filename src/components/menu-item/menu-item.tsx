import React from "react";
import './menu-item.style.scss';
import { withRouter } from 'react-router-dom';
import {RouteComponentProps} from "react-router";

interface IProps extends RouteComponentProps{
    title: string;
    subtitle?: string;
    imageUrl: string;
    size?: string;
    linkUrl: string;
}

const MenuItem = (props: IProps) => {
    const {
        title,
        subtitle= 'Shop Now',
        imageUrl,
        size,
        history,
        linkUrl,
    } = props;

    const navigateTo = () => {
        history.push(`${linkUrl}`);
    };

    return (
        <div className={`${size} menu-item`} onClick={navigateTo}>
            <div
                className='background-image'
                style={{backgroundImage: `url(${imageUrl})`}}
            />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>{subtitle}</span>
            </div>
        </div>

    );
};

export default withRouter(MenuItem);