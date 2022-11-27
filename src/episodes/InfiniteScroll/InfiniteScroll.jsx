import React, {useState, useEffect, useRef, useCallback} from 'react';
import data from './beers.json';
import * as paginate from 'paginatejson';
import styled from 'styled-components';
import Beer from './Beer';
import Loader from './Loader';

// Styles

const Wrapper = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: 400px 400px;
    grid-template-rows: auto;
    gap: 50px;
    margin: 30px auto;
`;
// End of styles

const InfiniteScroll = () => {
    const [items,setItems] = useState([]);
    const [page,setPage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const lastItemRef = useRef();
    const observer = useRef();

    const fetchBeers = (page = 1) => {
    const {items, ...pageInfo} = paginate.paginate(data, page, 6);
    return new Promise(resolve => setTimeout(() => resolve({items, page: pageInfo}), 2000));
    }

    useEffect(() => {
        fetchBeers()
        .then(res => {
            setItems([...res.items])
            setPage(res.page)
        })
    },[])
    
    const getMoreBears = useCallback(() => {
        if(!page || !page.next || isLoading) return;
        setIsLoading(true)
        fetchBeers()
        .then(res => {
            setItems(i => [...i, ...res.items])
            setPage(res.page)
            setIsLoading(false)
        })
    },[page, isLoading])
    

    useEffect(() => {
        //create IO
        observer.current = new IntersectionObserver((entries)=>{
            if(entries[0].isIntersecting){
                getMoreBears();
            }
        }, {
            root: document,
            threshold: 0.7,
        })
        //start to observe
        if(lastItemRef.current){
            observer.current.observe(lastItemRef.current)
        }
        //disconect
        return () => {
            observer.current.disconnect()
        }
    },[getMoreBears])

    return (
        <>
            <Wrapper>
                {items.map((item, index) => (
                    index === items.length -1 ? (
                    <Beer key={item.id} data={item} ref={lastItemRef}/>) : (
                    <Beer key={item.id} data={item}/> )
                ))}
            </Wrapper>
            {isLoading && <Loader/>}
        </>
    )
};

export default InfiniteScroll