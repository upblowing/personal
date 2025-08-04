"use client"

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
    FaExternalLinkAlt,
} from "react-icons/fa";

interface LinkProps {
    name: string;
    url: string;
    icon: IconType;
}

export default function Link({ name, url, icon }: LinkProps) {

    
    return (
       <motion.a 
            className="flex justify-between items-center gap-2 sm:gap-4 w-full sm:w-36 bg-transparent rounded-xl cursor-pointer" 
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
                scale: 1.05,
                x: 5,
                transition: { duration: 0.2, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            <div className="flex justify-start items-center gap-2">
                {icon({ className: "h-5 w-5 sm:h-6 sm:w-6" })}
                <p className="text-sm sm:text-base">{name}</p>
            </div>
            <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.2 }}
            >
                <FaExternalLinkAlt className="h-2.5 w-2.5 sm:h-3 sm:w-3"/>
            </motion.div>
       </motion.a>
    )
}