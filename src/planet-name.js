import React, {useCallback, useEffect, useMemo, useState} from 'react';

export const PlanetName = (props) => {
    const {id} = props

    const initialState = useMemo(() => ({
        data: null,
        loading: true,
    }), [])

    const getPlanet = (id) => {
        return fetch(`https://swapi.dev/api/planets/${id}/`)
            .then(res => res.json())
            .then((data) => data);
    }

    const useRequest = (request) => {
        const [dataState, setDataState] = useState(initialState);
        useEffect(() => {
            setDataState(initialState)
            let cancelled = false
            request()
                .then((data) => !cancelled && setDataState({data, loading: false}))
            return () => cancelled = true;
        }, [request]);
        return dataState

    }
    const usePlanetInfo = (id) => {
        const request = useCallback(() => getPlanet(id),[id]);
        return useRequest(request)
    }

    const {data, loading} = usePlanetInfo(id);
    if(loading) {
        return <div>Loading ...</div>
    }
    return (
        <div>{id} - {data.name}</div>
    )
}
