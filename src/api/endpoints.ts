import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { config } from '@/api/config';
import type { Language } from '@/api/types';

// TODO: secrets manager, rds, lambda, rollbar, ...

// series id for solo-leveling: 389597

// {
//   "apikey": "string",
//   "pin": "string"
// }

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: config.baseUrl }),
  endpoints: (build) => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    createAuthToken: build.mutation<any, void>({
      query: () => {
        return {
          url: '/login',
          method: 'POST',
          body: { apiKey: config.apiKey },
        };
      },
    }),
    getLanguages: build.query<Language[], void>({
      query: () => `/languages`,
    }),
  }),
});
export type Api = typeof api;
