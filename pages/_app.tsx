import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";
import { NextUIProvider } from "@nextui-org/react";

import theme from "@/config/theme/themeConfig";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ConfigProvider theme={theme}>
            <NextUIProvider>
                <Component {...pageProps} />
            </NextUIProvider>
        </ConfigProvider>
    );
}
