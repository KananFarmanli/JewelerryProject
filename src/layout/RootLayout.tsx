import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";


export default function RootLayout() {
  return (
    <div className="flex flex-col h-screen ">
      <Header />
      <main className="grow bg-cremaLight my-container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
