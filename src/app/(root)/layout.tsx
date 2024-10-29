import Navbar from "@/Components/Navbar/Navbar"
import Footer from "@/Components/Footer/Footer"
import WhatsAppButton from "@/Components/WhatsApp"


export default function AppLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className="app w-full h-full">
        <Navbar />
        <section className="">
            {children}  
        </section>
        <WhatsAppButton />
        <Footer />
      </main>
    )
}
  