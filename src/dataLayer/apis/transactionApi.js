import { TAGS } from '@/utils/constants';
import api from '../../store/api';

export const transactionApi = api.injectEndpoints({
  endpoints: (build) => ({
    getRecentTransactions: build.query({
      query: ({ page = 1, limit = 20 }) => ({
        url: `/transaction/recent_transactions?page=${page}&limit=${limit}`,
        method: 'GET',
      }),
    }),
    getTransactionsInsights: build.query({
      query: ({ month, year, page = 1, limit = 20 }) => ({
        url: `/transaction/insights`,
        method: 'POST',
        body: {
          ...(month && { month }),
          year,
          page,
          limit,
        },
      }),
      providesTags: () => [{ type: TAGS.transactions, id: 'Insights' }],
    }),
    createTransaction: build.mutation({
      query: (payload) => ({
        url: `/transaction/create`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: [{ type: TAGS.transactions, id: 'Insights' }],
    }),
  }),
});

export const {
  useGetRecentTransactionsQuery,
  useLazyGetTransactionsInsightsQuery,
  useCreateTransactionMutation,
} = transactionApi;
