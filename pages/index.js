import Landing from "@/components/landing";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/Sidebar";
import { Inter } from "next/font/google";
import Chat from "./Chat";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Navbar/>
    <Sidebar/>
    <Landing/>
    <Chat/>
    </>
  );
}
