import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";
import { NextUIProvider } from "@nextui-org/react";
import theme from "@/config/theme/themeConfig";
import Nav from "../components/Navbar"
import Footer from "@/components/Footer";
import HomeSection from "@/components/Title";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ConfigProvider theme={theme}>
            <NextUIProvider>
                <Nav />
                <Component {...pageProps} />
                <Footer />
            </NextUIProvider>
        </ConfigProvider>
    );
}
