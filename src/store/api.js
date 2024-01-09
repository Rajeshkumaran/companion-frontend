import { concat, map } from 'lodash';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { REDUCER_PATH, TAGS } from '@/utils/constants';
import { getCookie } from '@/utils/helpers';

const baseURL = window.secrets.apiUrl;
const baseQuery = (args, api, extraOptions) =>
  fetchBaseQuery({
    baseUrl: baseURL || args.baseUrl,
    prepareHeaders: async (headers) => {
      // Add access token to all requests except for the list in excludeEndpoints
      const excludeEndpoints = ['login', 'signup'];
      if (api.endpoint && !excludeEndpoints.includes(api.endpoint)) {
        const token = getCookie('auth-token');
        headers.set('x-access-token', token);
      }
      headers.set('accept', 'application/json');

      return headers;
    },
  })(args, api, extraOptions);

const baseQueryWithReauth = () => async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  return result;
};

const api = createApi({
  reducerPath: REDUCER_PATH,
  baseQuery: baseQueryWithReauth(),
  refetchOnReconnect: true,
  tagTypes: concat(
    Object.values(TAGS),
    map(Object.values(TAGS), (tag) => `Data_${tag}`),
  ),
  endpoints: () => ({}),
});
export default api;
