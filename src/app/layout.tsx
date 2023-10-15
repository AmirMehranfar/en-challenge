
import { ConfigProvider } from "antd";
import faIR from "antd/locale/fa_IR";
import "./styles/globals.scss";
import { Inter } from "next/font/google";
import mainTheme from "@/assets/fonts/themes/main";
import { Providers } from "@/store/providers";
const inter = Inter({ subsets: ["latin"] });

function RootLayout({ children, ...pageProps }: any) {
  return (
      <ConfigProvider theme={mainTheme} locale={faIR} direction="rtl">
        <html dir="rtl" lang="fa" className="scroll-smooth">
          <body className={inter.className}>
            <Providers>{children}sss</Providers>
          </body>
        </html>
      </ConfigProvider>
  );
}

export default RootLayout;
