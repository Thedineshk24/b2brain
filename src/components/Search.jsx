import { AutoComplete, Input } from 'antd';
import React, { useState, useEffect } from 'react';
import useDebounceSearch from '../hooks/useDebounceSearch';
import useStore from '../store/store';

const { Search } = Input;

const SearchBox = () => {
    const [options, setOptions] = useState([]);
    const setResultData = useStore((state) => state.setResultData);
    const handleClear = useStore((state) => state.handleClear);
    const data = useDebounceSearch(options, 500);

    useEffect(() => {
        setResultData(data);
    }, [data]);

    const handleSearch = (e) => {
        e.preventDefault();
        setOptions(e.target.value);
    }

    return (
        <>
            <Search placeholder="Search by account name or website"
                onChange={e => handleSearch(e)}
                onSearch={(e) => {
                    handleClear();
                }}
                enterButton
                allowClear
                size="large"
            />
        </>
    );
};

export default SearchBox;