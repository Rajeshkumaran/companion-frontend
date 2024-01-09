import api from '../../store/api';

export const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query({
      query: () => ({
        url: `/category`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
