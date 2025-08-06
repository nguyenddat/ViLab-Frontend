"use client"

import { useState, useEffect } from "react"
import { Logo } from "@/features/landing-page/utils/Logo"

// Tên các trường đại học tương ứng với file
const universityNames = [
    "Học viện Ngân hàng",
    "Đại học Hà Nội",
    "Đại học Bách Khoa Hà Nội",
    "Đại học Đại Nam",
    "Đại học Giao thông Vận tải",
    "Đại học Kinh tế Quốc dân",
    "Học viện Công nghệ Bưu chính Viễn thông",
    "Đại học Vin University"
]

// Import tất cả logo files
import ba from "@/assets/clients/ba.jpg"
import hanu from "@/assets/clients/hanu.png"
import hust from "@/assets/clients/hust.png"
import dnam from "@/assets/clients/Logo_DAI_NAM.png"
import gtvt from "@/assets/clients/Logo-Dai-Hoc-Giao-Thong-Van-Tai-UTC.png"
import neu from "@/assets/clients/neu.png"
import ptit from "@/assets/clients/ptit.png"
import vnu from "@/assets/clients/VinUni.png"

// Array chứa tất cả logo imports
const logoImports = [ba, hanu, hust, dnam, gtvt, neu, ptit, vnu]

// Hook để load tất cả logo
export function useClientLogos() {
    const [clientLogos, setClientLogos] = useState<Logo[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadLogos = () => {
            try {
                const logos: Logo[] = logoImports.map((logoImport, index) => {
                    return {
                        name: universityNames[index],
                        id: index + 1,
                        img: logoImport
                    }
                })
                
                setClientLogos(logos)
                setLoading(false)
            } catch (error) {
                console.error('Error loading logos:', error)
                setLoading(false)
            }
        }

        loadLogos()
    }, [])

    return { clientLogos, loading }
}
