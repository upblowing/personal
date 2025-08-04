"use client"

import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface IconProps {
    name: string;
    icon: IconType;
}

export default function Icon({ name, icon }: IconProps) {
    
    return (
        <motion.div 
            className="relative flex flex-col items-center justify-center cursor-pointer w-6 h-6 sm:w-8 sm:h-8"
            whileHover={{ 
                scale: 1.1,
                y: -2,
                transition: { duration: 0.2, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            {icon({ className: "h-4 w-4 sm:h-6 sm:w-6" })}
        </motion.div>
    )
}