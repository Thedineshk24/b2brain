import React, { useState, useEffect } from 'react';
import useStore from '../store/store';

const useDebounceSearch = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    const [data, setData] = useState([]);
    const setIsLoading = useStore((state) => state.setIsLoading);
    

    useEffect(
        () => {
            const handler = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);
            return () => {
                clearTimeout(handler);
            };
        },
        [value, delay]) 

        useEffect(() => {
            if(value.length > 0){
                setIsLoading(true);
                fetch(`https://tva.staging.b2brain.com/search/autocomplete_org_all/?q=${debouncedValue}`).
                then(response => response.json()).
                then(data => {
                    setData(data);
                }).catch(error => {
                    console.log(error);
                }).finally(() => {
                    setIsLoading(false);
                });
            }
        }, [debouncedValue]);

        return data;
}

export default useDebounceSearch;