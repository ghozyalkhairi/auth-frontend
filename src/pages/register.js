import MainLayout from "@/components/layout/MainLayout"
import SectionHeader from "@/components/shared/SectionHeader"
import RegisterForm from "@/components/auth/RegisterForm"

const Register = () => {
  return (
    <MainLayout title="Register">
      <SectionHeader text="Silahkan register terlebih dahulu" />
      <RegisterForm />
    </MainLayout>
  )
}

export default Register
