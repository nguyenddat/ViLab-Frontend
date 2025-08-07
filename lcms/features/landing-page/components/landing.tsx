import { Hero } from "@/features/landing-page/components/hero";
import { Feature108 } from "@/features/landing-page/components/feature";
import { Stats } from "@/features/landing-page/components/stats";
import { ClientsSection } from "@/features/landing-page/components/clients";

export const Landing = () => {
    return (
        <div className="relative min-h-screen">
            <section className="relative z-10 bg-gradient-to-b from-background/90 via-background/70 to-background/50 backdrop-blur-sm border-b border-border/20">
                <Hero/>
            </section>
            
            {/* Features Section */}
            <section className="relative z-10 bg-gradient-to-b from-background/50 via-background/60 to-background/50 backdrop-blur-sm border-b border-border/20">
                <Feature108/>
            </section>
            
            {/* Stats Section */}
            <section className="relative z-10 bg-gradient-to-b from-background/50 via-background/70 to-background/50 backdrop-blur-sm border-b border-border/20">
                <Stats/>
            </section>
            
            {/* Clients Section */}
            <section className="relative z-10 bg-gradient-to-b from-background/50 to-background/90 backdrop-blur-sm">
                <ClientsSection/>
            </section>
        </div>
        
    )
}
