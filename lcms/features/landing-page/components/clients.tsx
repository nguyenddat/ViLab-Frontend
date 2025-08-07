"use client"

import React, {
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react"

import { AnimatePresence, motion } from "framer-motion"
import { useClientLogos } from "@/features/landing-page/hooks/load_clients"
import { Logo } from "@/features/landing-page/utils/Logo"
import { LogoCarouselProps } from "@/features/landing-page/utils/LogoCarouselProps"
import { LogoColumnProps } from "@/features/landing-page/utils/LogoColumnProps"
import { distributeLogos } from "@/features/landing-page/hooks/distribute_logo"

const LogoColumn: React.FC<LogoColumnProps> = React.memo(
    ({ logos, index, currentTime }) => {
        const cycleInterval = 2000
        const columnDelay = index * 200
        const adjustedTime = (currentTime + columnDelay) % (cycleInterval * logos.length)
        const currentIndex = Math.floor(adjustedTime / cycleInterval)
        const currentLogo = useMemo(() => logos[currentIndex].img, [logos, currentIndex])

        return (
            <motion.div
                className="relative h-20 w-32 overflow-hidden md:h-32 md:w-64"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                    ease: "easeOut",
                }}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${logos[currentIndex].id}-${currentIndex}`}
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ y: "10%", opacity: 0, filter: "blur(8px)" }}
                        animate={{
                            y: "0%",
                            opacity: 1,
                            filter: "blur(0px)",
                            transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                                mass: 1,
                                bounce: 0.2,
                                duration: 0.5,
                            },
                        }}
                        exit={{
                            y: "-20%",
                            opacity: 0,
                            filter: "blur(6px)",
                            transition: {
                                type: "tween",
                                ease: "easeIn",
                                duration: 0.3,
                            },
                        }}
                    >
                        <img 
                            src={typeof currentLogo === 'string' ? currentLogo : currentLogo.src} 
                            alt={logos[currentIndex].name}
                            className="h-24 w-24 max-h-[80%] max-w-[80%] object-contain md:h-40 md:w-40" 
                        />
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        )
    }
)

export function LogoCarousel({ columnCount = 2, logos }: LogoCarouselProps) {
    const [logoSets, setLogoSets] = useState<Logo[][]>([])
    const [currentTime, setCurrentTime] = useState(0)

    const updateTime = useCallback(() => {
        setCurrentTime((prevTime) => prevTime + 100)
    }, [])

    useEffect(() => {
        const intervalId = setInterval(updateTime, 100)
        return () => clearInterval(intervalId)
    }, [updateTime])

    useEffect(() => {
        const distributedLogos = distributeLogos(logos, columnCount)
        setLogoSets(distributedLogos)
    }, [logos, columnCount])

    return (
        <div className="flex space-x-4">
            {logoSets.map((logos, index) => (
                <LogoColumn
                    key={index}
                    logos={logos}
                    index={index}
                    currentTime={currentTime}
                />
            ))}
        </div>
    )
}

export function ClientsSection() {
    const { clientLogos, loading } = useClientLogos()

    if (loading) {
        return (
            <div className="w-full py-12 lg:py-16">
                <div className="container mx-auto px-4">
                                    <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tighter">
                        Đối tác tin cậy
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        ViLab được tin tưởng bởi các trường đại học hàng đầu Việt Nam
                    </p>
                </div>
                    <div className="flex justify-center">
                        <div className="text-muted-foreground">Đang tải...</div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full py-12 lg:py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tighter">
                        Đối tác tin cậy
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        ViLab được tin tưởng bởi các trường đại học hàng đầu Việt Nam
                    </p>
                </div>
                <div className="flex justify-center">
                    <LogoCarousel columnCount={3} logos={clientLogos} />
                </div>
            </div>
        </div>
    )
}

export { LogoColumn };
