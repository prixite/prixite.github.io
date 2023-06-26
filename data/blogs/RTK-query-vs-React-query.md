---
title: 'RTK Query vs React Query'
date: 'June 26, 2023'
excerpt: 'RTK Query and React Query: Powerhouse Solutions for State Management in the React Ecosystem'
cover_image: '/images/posts/rtk_query_vs_react_query/RTK-query-header.png'
author: 'Shameen Jamil'
---

#### What is RTK query?
RTK Query is a powerful data fetching and caching tool. It is designed to simplify common cases for loading data in a web application, eliminating the need to hand-write data fetching & caching logic yourself. RTK Query is an optional addon included in the Redux Toolkit package, and its functionality is built on top of the other APIs in Redux Toolkit. The Redux core has always been very minimal - it's up to developers to write all the actual logic. That means that Redux has never included anything built in to help solve these use cases. The Redux docs have taught some common patterns for dispatching actions around the request lifecycle to track loading state and request results, and Redux Toolkit's createAsyncThunk API was designed to abstract that typical pattern. However, users still have to write significant amounts of reducer logic to manage the loading state and the cached data.


#### Pros of RTK Query:
- <b>*Caching and Normalization:*</b>  RTK Query provides built-in caching mechanisms to optimize data fetching. It automatically caches API responses and performs intelligent cache invalidation based on the data dependencies.
- <b>*Automatic Background Refetching:*</b> RTK Query automatically handles background refetching to ensure your data stays up to date. It can automatically refetch data in the background at configurable intervals or when specific data dependencies change.
- <b>*Automatic Background Refetching:*</b> RTK Query automatically handles background refetching to ensure your data stays up to date. It can automatically refetch data in the background at configurable intervals or when specific data dependencies change.
- <b>*Integration with Redux Toolkit:*</b> RTK Query integrates seamlessly with Redux Toolkit, leveraging its store, reducers, and middleware. It follows the principles and patterns of Redux Toolkit, making it easy to adopt and integrate into existing Redux applications.

#### Cons of RTK Query:
- <b>*Limited to use with Redux: *</b>  Unlike other data management solutions, RTK Query can only be used in combination with Redux, thus decreasing its overall adaptability.

- <b>*Steep learning curve for developers new to Redux:*</b>  For developers who are not already familiar with Redux, learning RTK Query may require a steeper learning curve because it requires an understanding of Redux concepts and patterns.

- <b>*Performance Trade-offs:*</b>  RTK Query's automatic caching and background refetching can provide significant performance benefits. However, in certain scenarios with large data sets or complex data relationships, the caching behavior may not be optimal. It's important to carefully configure and test the caching settings to ensure optimal performance for your specific use case.

<b>This is how we create API Service using createAPI hook</b>
    import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
    export const exampleApi = createApi({
    reducerPath: 'exampleApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com/api/' }),
    endpoints: (builder) => ({
        getPokemonByName: builder.query<User, string>({
        query: (name) => `user/all`,
        }),
    }),
    })


#### What is react query?
React Query is a ReactJS preconfigured data management library which gives you power and control over server-side state management, fetching, and caching of data, and error handling in a simple and declarative way without affecting the global state of your application. React Query handles caching, background updates and stale data out of the box with zero-configuration. There's no global state to manage, reducers, normalization systems or heavy configurations to understand. It comes wired up with dedicated devtools, infinite-loading APIs, and first class mutation tools that make updating your data a breeze. 

#### Pros of react query:

- <b>*Simplified Data Fetching:*</b> React Query simplifies the process of fetching and managing data by providing a declarative and intuitive API. It abstracts away the complexities of making network requests, handling loading and error states, and managing data caching and synchronization.

- <b>*Automatic caching:*</b> React Query accelerates data retrieval and optimizes network requests by utilizing an automated caching system.

- <b>*Customization:*</b> React query provides useMutation hook that provides data creation, edition and deletion.

- <b>*Optimized Query Management:*</b> React-query works best with pagination as well as fetching and re-fetching data on background. React Query optimizes query management by providing features like query deduplication, query batching, and smart query invalidation. 

#### Cons of react query:

- <b>*Limited functionality:*</b>  React Query is focused on fetching and managing data from APIs, so it may not be suitable for more complex state management needs.

- <b>*Smaller community:*</b>  Relatively new and may have a smaller community and ecosystem compared to other libraries.


    import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
    const queryClient = new QueryClient()
    export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
        <Example />
        </QueryClientProvider>
    )
    }
    function Example() {
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
        res.json()
        )
    )
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message
    return (
        <div>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        </div>
    )}

#### Conclusion:
<br>
<!-- #### What should be used react query or RTK query?
Answer: It depends. -->
If your application is more extensive and complex and needs complex state management, RTK is a better choice. If you are building a small, simple application and want to minimize the amount of boilerplate code, React Query may be the way to go. 
React query is faster than RTK because of it small size but RTK provides excellent features for performance improvement.
React Query uses a manual cached key for invalidation and caches by user-defined query keys, while RTK Query uses declarative data invalidations and creates cache keys via endpoints and arguments.
At the end, it totally depends on you if you want to use redux go for RTK but if your project is simple go for react query.