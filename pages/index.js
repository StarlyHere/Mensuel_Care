
import Landing from "@/components/landing";
import Navbar from "@/components/navbar";

=======
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Inter } from "next/font/google";
import Chat from "./Chat";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Navbar/>
  
    <Landing/>
    <Chat/>
    </>
  );
}
