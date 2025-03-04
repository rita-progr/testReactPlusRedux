import {createRoot} from "react-dom/client";
import App from "./app/App";
import "app/styles/index.scss"
import {BrowserRouter} from "react-router-dom";
import {StoreProvider} from "app/providers/StoreProvider";
import {ErrorBoundary} from "app/providers/ErrorBoundary/ui/ErrorBoundary";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <StoreProvider>
        <ErrorBoundary>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ErrorBoundary>
    </StoreProvider>

)