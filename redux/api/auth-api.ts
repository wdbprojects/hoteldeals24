import {
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => {
        return {
          url: "/auth/register",
          method: "POST",
          body: body,
        };
      },
    }),
  }),
});

export const { useRegisterMutation } = authApi;

export type CreateApi = {
  status: number;
  data: {
    message: string;
  };
};

export function isFetchBaseQueryError(
  error: unknown,
): error is FetchBaseQueryError {
  return typeof error === "object" && error != null && "status" in error;
}

export function isApiError(error: unknown): error is CreateApi {
  return (
    isFetchBaseQueryError(error) &&
    "data" in error &&
    typeof error.data === "object" &&
    error.data != null &&
    "message" in error.data &&
    typeof error.data.message === "string"
  );
}
