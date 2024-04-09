import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import Chat from "./Chat";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Navbar/>
    <Landing/>
    <Chat/>
    <Footer/>
    </>
  );
}
