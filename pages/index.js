import Image from "next/image";
import { Inter } from "next/font/google";
import About from "@/components/about";
import Donation from "@/components/donation";
import Exercise from "@/components/exercise";
import FirstPeriod from "@/components/firstPeriod";
import MoodAnalysis from "@/components/moodAnalysis";
import Blogs from "@/components/blogs";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <About/>
    <Blogs/>
    <Donation/>
    <Exercise/>
    <FirstPeriod/>
    <MoodAnalysis/>
    <Navbar/>
    </>
  );
}
