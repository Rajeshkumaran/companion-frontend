import api from '../../store/api';

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (payload) => ({
        url: `/users/login`,
        method: 'POST',
        body: payload,
      }),
      providesTags: () => [],
    }),
  }),
});

export const { useLoginMutation } = authApi;
