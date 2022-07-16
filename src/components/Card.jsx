import React from 'react';
import "../styles/card.scss";
import useStore from '../store/store';
import { Skeleton } from 'antd';

const Card = () => {
    const result = useStore((state) => state.result);
    const loading = useStore((state) => state.isLoading);

    if (loading) {
        return (
            <Skeleton active />
        );
    }
    
    return (
        <div className="card">
            <div className="similar__accounts">
                {result?.length > 0 && "Similar accounts"}
            </div>
            {
                result.map((item, index) => {
                    return (
                        <div key={item.website} style={{ backgroundColor: `${item?.color}` }} className="cards">
                            <div className="card__image">
                                <img width={100} src={item.logo || 'https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?auto=compress&cs=tinysrgb&w=600'} alt={item.company} />
                            </div>
                            <div className="card__content">
                                <div className="card__content__title">
                                    <h2>
                                        {item.company}
                                    </h2>
                                </div>
                                <div className="card__content__description">
                                    <p>
                                        {item.website}
                                    </p>
                                </div>
                            </div>
                            <div className="btn">
                                <button>
                                    Track
                                </button>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}

export default Card