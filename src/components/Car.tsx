import React, {FC} from 'react';
import {ICar} from "../interfaces";
import {useAppDispatch} from "../hooks/redux.hooks";
import {carActions} from "../redux/slices";

interface CarProps {
    car: ICar
}

const Car: FC<CarProps> = ({car}) => {

    const {id,brand, price, year} = car;

    const dispatch = useAppDispatch();

    return (
        <div>
            <div>{brand}</div>
            <div>{price}</div>
            <div>{year}</div>
            <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>update</button>
            <button onClick={()=>dispatch(carActions.deleteCar({id}))}>delete</button>
        </div>
    );
};

export {Car}
