import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    style: ["normal"],
});

export const metadata = {
    title: 'Criação de provas | Construtor',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR">
            <body className={roboto.className}>{children}</body>
        </html>
    )
}