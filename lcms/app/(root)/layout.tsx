import { Github, Twitter } from "lucide-react"
import logo from "@/assets/logo.png";

import { Footer } from "@/components/ui/footer";
import { AnimatedNavFramer } from "@/components/common/navigation-menu";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <AnimatedNavFramer />
            {children}
            <Footer 
            logo={<img src={logo.src} alt="Logo" className="h-10 w-10 object-contain" />} 
            brandName="ViLab" 
            socialLinks={[
                {
                    icon: <Github className="h-5 w-5" />,
                    href: "https://github.com",
                    label: "Github",
                },
                {
                    icon: <Twitter className="h-5 w-5" />,
                    href: "https://twitter.com",
                    label: "Twitter",
                }
            ]} 
            mainLinks={[
                {href: "/explore", label: "Explore"},
                {href: "/about", label: "About"},
                {href: "/contact", label: "Contact"},
            ]} 
            legalLinks={[
                {href: "/privacy", label: "Privacy"},
                {href: "/terms", label: "Terms"},
            ]} 
            copyright={{ text: "© 2025 ViLab - Virtual Lab for STEM" }} />
        </div>
    )
}