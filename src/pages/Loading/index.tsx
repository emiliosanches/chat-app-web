import React from 'react';

import { RotatingImg } from "./styles";
import img from '../../assets/img/loading.png'

export const Loading: React.FC = () => {
    return (
        <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100vh', 
            width: '100vw' 
        }}>
            <RotatingImg src={img} />
        </div>
    );
}
