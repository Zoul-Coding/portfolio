import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <div>
      <App />
      <Toaster
        toastOptions={{
          unstyled: true,
          style: {
            position: "fixed",
            right: "2em",
            bottom: "2em",
          },
          actionButtonStyle: {
            color: "hsl(var(--accent-foreground))",
            backgroundColor: "hsl(var(--accent))",
          },
          cancelButtonStyle: {
            color: "hsl(var(--destructive-foreground))",
            backgroundColor: "hsl(var(--destructive))",
          },
          classNames: {
            toast:
              "max-w-sm flex items-center gap-2 rounded p-2 px-3 shadow-lg",
            actionButton: "border border-red-500",
            error: "border-red-300 bg-red-900 text-red-400",
            success: "border-green-300 bg-green-900 text-green-400",
            warning: "border-orange-300 bg-orange-100 text-orange-900",
            info: "border-blue-300 bg-blue-200 text-blue-900",
          },
        }}
      />
    </div>
  </BrowserRouter>
);
