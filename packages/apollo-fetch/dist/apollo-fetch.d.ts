import { FetchOptions, ApolloFetch, GraphQLRequest } from './types';
export declare function constructDefaultOptions(
  requestOrRequests: GraphQLRequest | GraphQLRequest[],
  options: RequestInit,
): RequestInit;
export declare function createApolloFetch(params?: FetchOptions): ApolloFetch;
