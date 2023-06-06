"use client"
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import '../app/globals.css';
import { Layout } from "antd";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{background: "#E6E6E6 !important"}}><ChakraProvider>
        {/* <Layout style={{background: "#E6E6E6 !important"}}> */}
        <Navbar />
        {children}
        {/* </Layout> */}
       
        <Footer />
        </ChakraProvider></body>
    </html>
  )
}
