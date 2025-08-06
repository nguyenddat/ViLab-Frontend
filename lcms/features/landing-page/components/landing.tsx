import { Hero } from "@/features/landing-page/components/hero";
import { Feature108 } from "@/features/landing-page/components/feature";
import { Stats } from "@/features/landing-page/components/stats";
import { ClientsSection } from "@/features/landing-page/components/clients";
import { BackgroundBeams } from "@/components/ui/background";

export const Landing = () => {
    return (
        <div className="relative min-h-screen">
            <BackgroundBeams className="fixed inset-0" />
            <div className="relative z-10">
                <Hero/>
                <Feature108/>
                <Stats/>
                <ClientsSection/>
            </div>
        </div>
    )
}
