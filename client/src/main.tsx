import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MetaMaskProvider } from "metamask-react";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import { RouterProvider } from "react-router-dom"; // Import RouterProvider
import Router from './Router/Router'; // Import your router
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <Provider store={store}>
      <MetaMaskProvider>
        <RouterProvider router={Router} /> {/* Use RouterProvider here */}
      </MetaMaskProvider>
    </Provider>
  </StrictMode>
);