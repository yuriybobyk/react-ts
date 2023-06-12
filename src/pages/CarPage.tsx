import React, {FC} from 'react';
import {CarForm, Cars} from "../components";

const CarPage: FC = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarPage}
