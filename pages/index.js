import Landing from "@/components/landing";
import Navbar from "@/components/navbar";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Navbar/>
    <Landing/>
    

    </>
  );
}
