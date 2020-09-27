import React from 'react';

import { RotatingImg } from "./styles";
import img from '../../assets/img/loading.png'

export const Loading: React.FC = () => {
    return (
        <RotatingImg src={img} />
    );
}
