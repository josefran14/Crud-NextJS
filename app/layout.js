"use client"
import './globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import {ReactQueryDevtools} from "react-query/devtools"
import { IconHome } from '@/components/IconHome'

const queryClient = new QueryClient()

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Crud With NextJS</title>
      </head>
      <body>
          <QueryClientProvider client={queryClient}>
            <IconHome/>
            {children}
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
          </QueryClientProvider>
      </body>
    </html>
  )
}
