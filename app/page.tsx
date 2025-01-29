import { Button } from "@/components/ui/button"
import { ArrowRight, Truck, BarChart2, Box, Globe, Shield, Clock } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b border-muted">
        <Link className="flex items-center justify-center" href="#">
          <span className="font-bold text-2xl text-primary">Virtulogic</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link className="text-secondary hover:text-primary transition-colors" href="#">
            Services
          </Link>
          <Link className="text-secondary hover:text-primary transition-colors" href="#">
            Solutions
          </Link>
          <Link className="text-secondary hover:text-primary transition-colors" href="#">
            About
          </Link>
          <Link className="text-secondary hover:text-primary transition-colors" href="#">
            Contact
          </Link>
        </nav>
        <Button className="bg-primary text-white hover:bg-accent">Get Started</Button>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Revolutionizing Supply Chain Management
                </h1>
                <p className="mx-auto max-w-[700px] text-muted md:text-xl">
                  Optimize your logistics operations with AI-powered insights and real-time tracking
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-primary text-white hover:bg-accent">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-secondary">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center space-y-4 p-6 border border-muted rounded-lg">
                <Truck className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold text-secondary">Global Shipping</h3>
                <p className="text-muted">
                  End-to-end logistics solutions for international shipping and freight forwarding
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4 p-6 border border-muted rounded-lg">
                <BarChart2 className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold text-secondary">Analytics</h3>
                <p className="text-muted">Real-time analytics and insights to optimize your supply chain</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4 p-6 border border-muted rounded-lg">
                <Box className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold text-secondary">Warehouse Management</h3>
                <p className="text-muted">Smart inventory management and warehouse optimization solutions</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-secondary">
              Why Choose Virtulogic
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <Globe className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-bold text-secondary">Global Network</h3>
                  <p className="text-muted">Access to worldwide logistics infrastructure</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-bold text-secondary">Secure & Reliable</h3>
                  <p className="text-muted">End-to-end security for your supply chain</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-bold text-secondary">24/7 Support</h3>
                  <p className="text-muted">Round-the-clock customer service</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-success text-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Transform Your Supply Chain?</h2>
              <p className="mx-auto max-w-[600px] text-secondary/80">
                Join thousands of businesses that trust Virtulogic with their logistics operations
              </p>
              <Button className="bg-secondary text-white hover:bg-primary">Contact Sales</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-muted">
        <p className="text-xs text-muted">© 2024 Virtulogic. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs text-muted hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs text-muted hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

