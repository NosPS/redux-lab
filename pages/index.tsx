import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Users from "./components/users";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props: any) {
  console.log();

  return (
    <>
      <Users></Users>
    </>
  );
}
