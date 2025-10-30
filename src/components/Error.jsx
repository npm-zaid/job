import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error }) {
  return (
    <div role="alert" className="p-4 bg-red-200 text-red-800">
      <p>⚠️ Something went wrong:</p>
      <pre>{error?.message}</pre> {/* show actual error */}
    </div>
  );
}

function Problematic() {
  throw new Error("Crashed!");
}

export default function Error() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Problematic />
    </ErrorBoundary>
  );
}
