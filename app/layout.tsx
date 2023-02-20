import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <div>
          {/* sidebar */}
          {/* client provider */}
          <div className='bg-[#343541] flex-1'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
