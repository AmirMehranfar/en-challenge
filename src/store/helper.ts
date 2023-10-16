"use client";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";


export function handlerResponse<T>(
  response: { data: T } | { error: FetchBaseQueryError | SerializedError }
): { data: T; error: string | null; isOk: boolean } {
  const responseData = (response as { data: T }).data;
  const responseError = (
    response as { error: FetchBaseQueryError | SerializedError }
  ).error;

  if (responseError) {
    const errorMessageApi = responseError as {
      data: { errors: { message: string | null } | null } | null;
    };
    const errorMessageAxios = responseError as { error: string | null };

    const errorMessage =
      errorMessageApi?.data?.errors?.message ??
      errorMessageAxios?.error ??
      "خطایی رخ داده است";

    return { data: responseData, error: errorMessage, isOk: false };
  }

  return { data: responseData, error: null, isOk: true };
}
