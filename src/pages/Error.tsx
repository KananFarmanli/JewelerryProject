import  { ReactNode } from "react";
import {
  ErrorResponse,
  isRouteErrorResponse,
  useRouteError,
} from "react-router-dom";

export default function Error() {
  const error = useRouteError() as ErrorResponse;
  let errorMessage: string | ReactNode = "";
  if (isRouteErrorResponse(error)) {
    errorMessage = <div>Something went wrong</div>;

    if (error.status === 404) {
      errorMessage = <div>This page doesn't exist!</div>;
    }

    if (error.status === 401) {
      errorMessage = <div>You aren't authorized to see this</div>;
    }

    if (error.status === 503) {
      errorMessage = <div>Looks like our API is down</div>;
    }

    if (error.status === 418) {
      errorMessage = <div>🫖</div>;
    }
  }
  return (
    <main className="flex flex-col items-center justify-center gap-4 h-screen bg-cremaLight my-container text-[30px] font-serif ">
      <h1>Error happened</h1>
      <p>{errorMessage}</p>
      <p>message: {error.statusText}</p>
      <p>status: {error.status}</p>
    </main>
  );
}
