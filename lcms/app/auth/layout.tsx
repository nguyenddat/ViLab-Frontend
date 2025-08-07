import { Github, Twitter } from "lucide-react"
import logo from "@/assets/logo.png";
import Image from "next/image";

import { Footer } from "@/components/ui/footer";
import { AnimatedNavFramer } from "@/components/common/navigation-menu";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-screen overflow-hidden">
            <div className="h-24 pt-6">
                <AnimatedNavFramer />
            </div>
            <div className="h-[calc(100vh-96px)]">
                {children}
            </div>
        </div>
    )
}