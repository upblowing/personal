"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import getLanyard from "../data/websocket";

import Link from "./Link";
import Icon from "./Icon";
import {
    SiPython,
    SiRust,
    SiGo,
    SiJavascript,
    SiPhp,
    SiNextdotjs,
    SiGithub,
    SiTelegram,
    SiReact,
    SiTypescript,
    SiTailwindcss,
    SiMongodb,
    SiPostgresql,
    SiDocker,
    SiKubernetes,
    SiVercel,
    SiFigma
} from "react-icons/si";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";

const getAssetUrl = (appId: string, asset: string) =>
    asset.startsWith('mp:external') 
    ? `https://media.discordapp.net/${asset.replace('mp:', '')}`
    : `https://cdn.discordapp.com/app-assets/${appId}/${asset}.png`;

const UserCard = () => {
    const userData = getLanyard();
    const [isProjectsExpanded, setIsProjectsExpanded] = useState(false);

    const avatar: string = `https://cdn.discordapp.com/avatars/${userData?.discord_user.id}/${userData?.discord_user.avatar}`
    let activity = userData?.activities?.find((x) => x.type === 0);

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const projects = [
        {
            name: "Slit Bot",
            description: "20 guilds 5k+ users - python sqlite3 discord.py",
            stats: "20 guilds, 5k+ users",
            tech: [SiPython],
            url: "#"
        },
        {
            name: "Inject.bio",
            description: "biolink - php, html5",
            stats: "800 users",
            tech: [SiPhp],
            url: "#"
        },
        {
            name: "Pretendi.ng",
            description: "private file host - php, html5, tailwind",
            stats: "4 users, 1.3k files",
            tech: [SiPhp, SiTailwindcss],
            url: "#"
        },
        {
            name: "Restrain.cc",
            description: "private biolink + imagehost - php, html5",
            stats: "30 users",
            tech: [SiPhp],
            url: "#"
        },
        {
            name: "Jpeg.lat",
            description: "public image host - python, fastapi",
            stats: "4k+ files",
            tech: [SiPython],
            url: "#"
        },
        {
            name: "Slint.rocks",
            description: "stealer log search database python, fastapi, elasticsearch",
            stats: "23 billion logs, 40 active users",
            tech: [SiPython],
            url: "#"
        }
    ];

    if (!userData) {
        return null;
    }

    return (
        <motion.div 
            className="flex flex-col items-center space-y-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div 
                className="flex flex-col rounded-2xl max-w-3xl min-w-[500px] w-full mx-auto justify-center items-start bg-[#28282b4f] backdrop-blur-2xl p-8 border border-[#ffffff20]"
                variants={cardVariants}
                whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                    transition: { duration: 0.2 }
                }}
            >
                <motion.div 
                    className="flex justify-center items-center gap-4"
                    variants={itemVariants}
                >
                    <motion.img 
                        className="w-24 rounded-full" 
                        src={avatar}
                        whileHover={{ scale: 1.05 }}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                    <div className="flex flex-col justify-center items-start leading-3">
                        <div className="flex items-center gap-2">
                            <p className="text-xl font-bold text-[#ffffff] drop-shadow-xl shadow-[#5c5c5c]">{userData.discord_user.display_name}</p>
                            <p className="text-sm text-[#a0a0a0] drop-shadow-xl shadow-[#5c5c5c]">• he/him</p>
                        </div>
                        <p className="text-l text-[#b8b8b8] drop-shadow-xl shadow-[#5c5c5c]">@{userData.discord_user.username}</p>     
                    </div>
                </motion.div>
                <motion.div 
                    className="mt-4"
                    variants={itemVariants}
                >
                    <p className="text-sm text-[#c0c0c0] drop-shadow-xl shadow-[#5c5c5c] leading-relaxed">
                        18 fullstack dev, live in poland. bisexual.<br/>i use arch btw & like cats.
                    </p>
                </motion.div>
                <motion.div 
                    className="mt-3"
                    variants={itemVariants}
                >
                    <p className="text-l text-[#dfdfdf] drop-shadow-xl shadow-[#5c5c5c]">Technologies I use</p>
                    <motion.div 
                        className="flex items-center justify-start gap-2 mt-2"
                        variants={itemVariants}
                    >
                        <Icon name="Python" icon={SiPython} />
                        <Icon name="Rust" icon={SiRust} />
                        <Icon name="GoLang" icon={SiGo} />
                        <Icon name="JavaScript" icon={SiJavascript} />
                        <Icon name="Python" icon={SiPython} />
                        <Icon name="PHP" icon={SiPhp} />
                        <Icon name="Next.js" icon={SiNextdotjs} />
                    </motion.div>
                </motion.div>
                <motion.div 
                    className="mt-6 flex flex-row gap-6"
                    variants={itemVariants}
                >
                    <Link name="GitHub" url="https://github.com/prettylittlelies" icon={SiGithub} />
                    <Link name="Telegram" url="https://t.me/femboykitten" icon={SiTelegram} />
                </motion.div>
            </motion.div>

            <motion.div 
                className="flex flex-col rounded-2xl max-w-3xl min-w-[500px] w-full mx-auto justify-center items-start bg-[#28282b4f] backdrop-blur-2xl p-8 border border-[#ffffff20]"
                variants={cardVariants}
                whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                    transition: { duration: 0.2 }
                }}
            >
                <motion.div 
                    className="flex justify-between items-center w-full cursor-pointer"
                    variants={itemVariants}
                    onClick={() => setIsProjectsExpanded(!isProjectsExpanded)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                >
                    <p className="text-l font-bold text-[#ffffff] drop-shadow-xl shadow-[#5c5c5c]">Projects</p>
                    <motion.div
                        animate={{ rotate: isProjectsExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <IoChevronDown className="w-6 h-6 text-[#b8b8b8]" />
                    </motion.div>
                </motion.div>

                <AnimatePresence>
                    {isProjectsExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="mt-6 space-y-3 overflow-hidden"
                        >
                            {projects.map((project, index) => (
                                <motion.div
                                    key={project.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex justify-between items-center p-3 rounded-lg bg-[#1a1a1a4f] border border-[#ffffff10]"
                                >
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-1">
                                            <h3 className="text-[#ffffff] font-medium">{project.name}</h3>
                                            <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-gray-600/20 to-gray-500/20 border border-gray-500/30 text-gray-300">
                                                {project.stats}
                                            </span>
                                        </div>
                                        <p className="text-sm text-[#b8b8b8]">{project.description}</p>
                                    </div>
                                    <div className="flex items-center gap-2 ml-4">
                                        {project.tech.map((TechIcon, techIndex) => (
                                            <TechIcon key={techIndex} className="w-4 h-4 text-[#a0a0a0]" />
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
            
            {userData?.listening_to_spotify && userData.spotify && (
                <motion.div 
                    className="flex flex-col rounded-2xl max-w-3xl min-w-[500px] w-full mx-auto justify-center items-start bg-[#28282b4f] backdrop-blur-2xl p-8 border border-[#ffffff20]"
                    variants={cardVariants}
                    whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                        transition: { duration: 0.2 }
                    }}
                >
                    <motion.div 
                        className="flex justify-center items-center gap-4"
                        variants={itemVariants}
                    >
                        <motion.img 
                            className="w-16 rounded-xl" 
                            src={userData.spotify.album_art_url}
                            whileHover={{ scale: 1.05 }}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        />
                        <div className="flex flex-col justify-center items-start leading-5">
                            <p className="text-l font-bold text-[#ffffff] drop-shadow-xl shadow-[#5c5c5c]">Listening to {userData.spotify.song}</p>
                            <p className="text-l text-[#b8b8b8] drop-shadow-xl shadow-[#5c5c5c]">by {userData.spotify.artist}</p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
            
            {activity && (
                <motion.div 
                    className="flex flex-col rounded-2xl max-w-3xl min-w-[500px] w-full mx-auto justify-center items-start bg-[#28282b4f] backdrop-blur-2xl p-8 border border-[#ffffff20]"
                    variants={cardVariants}
                    whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                        transition: { duration: 0.2 }
                    }}
                >
                    <motion.div 
                        className="flex justify-center items-center gap-4"
                        variants={itemVariants}
                    >
                        <motion.img 
                            className="w-16 rounded-xl" 
                            src={activity.assets?.large_image
                        ? getAssetUrl(activity.application_id!, activity.assets?.large_image)
                        : `https://dcdn.dstn.to/app-icons/${activity.application_id}`}
                            whileHover={{ scale: 1.05 }}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        />
                        <div className="flex flex-col justify-center items-start leading-5">
                            <p className="text-l font-bold text-[#ffffff] drop-shadow-xl shadow-[#5c5c5c]">{activity.name}</p>
                            <p className="text-l text-[#b8b8b8] drop-shadow-xl shadow-[#5c5c5c]">{activity.details}</p>
                            <p className="text-l text-[#b3b3b3] drop-shadow-xl shadow-[#5c5c5c]">{activity.state}</p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </motion.div>
    );
}

export default UserCard;