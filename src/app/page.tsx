"use client"

import { motion } from "framer-motion";
import UserCard from "@/components/UserCard";

export default function Home() {
  	return (
    	<main className="min-h-screen">
			<div 
				className="fixed size-full bg-fill bg-cover" 
				style={{backgroundImage: "url(https://r2.guns.lol/068c304e-44b8-4396-8cfe-4d647c9bcb33.jpg)", filter: "blur(0.5px)", transform: "scale(1.025)"}}
			/>
			<motion.div 
				className="flex flex-col items-center justify-center min-h-screen w-full p-2 sm:p-4"
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
			>
				<UserCard />
			</motion.div>
    	</main>
  	);
}
