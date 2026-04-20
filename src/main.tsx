import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { QueryClient } from "@tanstack/react-query"
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client"
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 60 * 1000,
      gcTime: 24 * 60 * 60 * 1000,
    },
  },
})

const persister = createAsyncStoragePersister({
  storage: window.localStorage,
})

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
      <App />
    </PersistQueryClientProvider>
  </StrictMode>,
)
