import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux.hooks";
import {carActions} from "../redux/slices";
import {Car} from "./Car";

const Cars: FC = () => {

    const {cars, trigger} = useAppSelector(state => state.carReducer);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [dispatch, trigger])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars}
