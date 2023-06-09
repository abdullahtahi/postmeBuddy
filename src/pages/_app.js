import Navbar from "@/component/Navbar/Navbar";
import { store } from "@/Helpers/redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import Home from "./index";
import { ToastContainer, toast } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <ToastContainer />
    </Provider>
  );
}
