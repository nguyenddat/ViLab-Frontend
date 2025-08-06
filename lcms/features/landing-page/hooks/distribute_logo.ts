import { Logo } from "@/features/landing-page/utils/Logo"

export const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
            ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
}

export const distributeLogos = (allLogos: Logo[], columnCount: number): Logo[][] => {
    const shuffled = shuffleArray(allLogos)
    const columns: Logo[][] = Array.from({ length: columnCount }, () => [])

    shuffled.forEach((logo, index) => {
        columns[index % columnCount].push(logo)
    })

    const maxLength = Math.max(...columns.map((col) => col.length))
    columns.forEach((col) => {
        while (col.length < maxLength) {
            col.push(shuffled[Math.floor(Math.random() * shuffled.length)])
        }
    })

    return columns
}

