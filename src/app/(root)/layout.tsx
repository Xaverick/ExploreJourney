import Navbar from "@/Components/Navbar/Navbar"
import Footer from "@/Components/Footer/Footer"



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

        <Footer />
      </main>
    )
}
  