import { ChakraProvider } from "@chakra-ui/react"
import { Poppins } from "@next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <main className={poppins.className}>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  )
}
