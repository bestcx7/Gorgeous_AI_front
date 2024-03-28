import './globals.css'

export const metadata = {
    title: 'Gorgeousai',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    )
}