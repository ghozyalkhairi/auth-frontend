import MainLayout from "@/components/layout/MainLayout"
import Callout from "@/components/shared/Callout"
import SectionHeader from "@/components/shared/SectionHeader"

const Home = () => {
  return (
    <MainLayout>
      <SectionHeader text="Selamat datang di Auth Frontend" />
      <Callout />
    </MainLayout>
  )
}

export default Home
