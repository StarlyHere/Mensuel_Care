import Navbar from "@/components/navbar";
import { Inter } from "next/font/google";
import Chat from "../components/Chat";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Navbar/>
    <Chat/>
    <SignUp/>
    </>
  );
}
