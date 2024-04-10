import Landing from "@/components/landing";
import Navbar from "@/components/navbar";
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
