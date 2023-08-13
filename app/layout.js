"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import { QueryClient, QueryClientProvider } from 'react-query'
import {ReactQueryDevtools} from "react-query/devtools"

const inter = Inter({ subsets: ['latin'] })

const queryClient = new QueryClient()

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
          </QueryClientProvider>
      </body>
    </html>
  )
}
