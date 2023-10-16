import { ConfigProvider } from "antd";
import fa_IR from "antd/lib/locale/fa_IR";
import "../assets/styles/globals.scss";
import { Inter } from "next/font/google";
import mainTheme from "@/assets/fonts/themes/main";
import { Providers } from "@/store/providers";
const inter = Inter({ subsets: ["latin"] });

function RootLayout({ children }: any) {
  return (
    <html dir="rtl" lang='fa' className="scroll-smooth">
      <body className={inter.className}>
        <ConfigProvider theme={mainTheme} locale={fa_IR} direction="rtl">
          <Providers>{children}</Providers>
        </ConfigProvider>
      </body>
    </html>
  );
}

export default RootLayout;
