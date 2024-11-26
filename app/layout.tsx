import { Inter } from 'next/font/google'
import { TaskProvider } from './contexts/TaskContext'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Task Management App',
  description: 'A comprehensive task management application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TaskProvider>
          {children}
        </TaskProvider>
      </body>
    </html>
  )
}

