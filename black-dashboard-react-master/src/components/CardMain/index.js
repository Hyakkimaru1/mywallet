import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

const CardMain = ({ title, content, img, avatar, onClick }) => {
    const onCopy = () => {
        onClick();
    };
    return (
        <div className="cardmain__wrapper">
            <div className="cardmain__avatar">
                <img className="cardmain__avatar--img" src={avatar} alt="" />
            </div>
            <div className="cardmain__content">
                <h3>{title}</h3>
                <p>{content}</p>
                {img?.map( (e,index) => e.type === "clipboard" ?
                    (<CopyToClipboard key={index} onCopy={onCopy} text={content}>
                        <img src={e.src} alt={e.alt} />
                    </CopyToClipboard>
                    ) :
                    (<img key={index} src={e.src} alt={e.alt} />))}
            </div>
        </div>
    );
}

export default CardMain;
