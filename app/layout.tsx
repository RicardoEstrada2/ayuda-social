import './globals.css'
import HeaderComponent from "@/components/header";
import { Input } from "antd";
// import Login from "@/app/login/page";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <html lang="en">
        <body className='w-full h-full'>
        <div className='header bg-gray-300'>
          <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <HeaderComponent></HeaderComponent>
            </div>
          </nav>
        </div>
        <div className='body'>
          {children}
        </div>
        </body>
        </html>

  )
}
