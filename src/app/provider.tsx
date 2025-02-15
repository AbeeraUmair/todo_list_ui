"use client"; // ✅ Ensures this runs on the client side

import { Provider } from "react-redux";
import { store } from "../redux/store";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
