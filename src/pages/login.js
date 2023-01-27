import MainLayout from "@/components/layout/MainLayout"
import LoginForm from "@/components/auth/LoginForm"
import SectionHeader from "@/components/shared/SectionHeader"

const Login = () => {
  return (
    <MainLayout title="Login">
      <SectionHeader text="Silahkan login terlebih dahulu" />
      <LoginForm />
    </MainLayout>
  )
}

export default Login
