import localFont from 'next/font/local'
import './globals.css'


export const metadata = {
  title: 'Library Course',
  description: 'Your beautiful library',
}

const sfProDisplay = localFont({
  src: [
    {
      path: './fonts/SF-Pro-Display-Black.woff',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/SF-Pro-Display-BlackItalic.woff',
      weight: '900',
      style: 'italic'
    },
      {
      path: './fonts/SF-Pro-Display-Heavy.woff',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/SF-Pro-Display-HeavyItalic.woff',
      weight: '800',
      style: 'italic'
    },
    {
      path: './fonts/SF-Pro-Display-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/SF-Pro-Display-BoldItalic.woff',
      weight: '700',
      style: 'italic'
    },
     {
      path: './fonts/SF-Pro-Display-SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/SF-Pro-Display-SemiBoldItalic.woff',
      weight: '600',
      style: 'italic'
    },
     {
      path: './fonts/SF-Pro-Display-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/SF-Pro-Display-MediumItalic.woff',
      weight: '500',
      style: 'italic'
    },
      {
      path: './fonts/SF-Pro-Display-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/SF-Pro-Display-RegularItalic.woff',
      weight: '400',
      style: 'italic'
    },
    {
      path: './fonts/SF-Pro-Display-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/SF-Pro-Display-LightItalic.woff',
      weight: '300',
      style: 'italic'
    },
    {
      path: './fonts/SF-Pro-Display-Thin.woff',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/SF-Pro-Display-ThinItalic.woff',
      weight: '200',
      style: 'italic'
    },
    {
      path: './fonts/SF-Pro-Display-Ultralight.woff',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/SF-Pro-Display-UltralightItalic.woff',
      weight: '100',
      style: 'italic'
    }
  ],
  variable: '--font-sf-pro-display',
  display: 'swap'
})
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sfProDisplay.variable} ${sfProDisplay.className}`}>
      <body>{children}</body>
    </html>
  )
}
