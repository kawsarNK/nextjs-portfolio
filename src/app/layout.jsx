import './globals.css'
import LenisProvider from './LenisProvider'

export const metadata = {
    title: 'Kawsar Hamid — Frontend Developer',
    description: 'Portfolio of Kawsar Hamid',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <LenisProvider>{children}</LenisProvider>
            </body>
        </html>
    )
}