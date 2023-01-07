import type { historicalInterface } from '../../ts/types';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const tlemcenApi = createApi({
    reducerPath: 'tlemcenApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "/api/"
    }),
    endpoints: (builder) => ({
        getAllHistorical: builder.query<{ items: historicalInterface[] }, { language: string }>({
            query: ({ language }) => `historical?language=${language}`,
        }),
        getHistoricalByID: builder.query<{ item: historicalInterface[] }, { language: string, id: number}> ({
            query: ({ language, id }) => `historical/${id}?language=${language}`,
        }),
        getAllTouristic: builder.query<{ items: historicalInterface[] }, { language: string }>({
            query: ({ language }) => `touristic?language=${language}`,
        }),
        getTouristicByID: builder.query<{ item: historicalInterface[] }, { language: string, id: number}> ({
            query: ({ language, id }) => `touristic/${id}?language=${language}`,
        }),
        getAllSportPaths: builder.query<{ items: historicalInterface[] }, { language: string }>({
            query: ({ language }) => `sport/paths?language=${language}`,
        }),
        getSportPathsByID: builder.query<{ item: historicalInterface[] }, { language: string, id: number}> ({
            query: ({ language, id }) => `sport/paths/${id}?language=${language}`,
        }),
    }),
});

export const {
    useGetAllHistoricalQuery,
    useGetHistoricalByIDQuery,
    useGetAllTouristicQuery,
    useGetTouristicByIDQuery,
    useGetAllSportPathsQuery,
    useGetSportPathsByIDQuery,
} = tlemcenApi;