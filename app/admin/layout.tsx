import Aside from "./components/Aside";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "./Theme"

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="">
            <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >            
                <div>
                   <NavBar/>
                <div className="flex">
                   <Aside/>
                    {children}
                </div> 
                </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
