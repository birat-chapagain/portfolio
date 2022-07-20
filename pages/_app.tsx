import React from "react";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import "../styles/global.css";
import { theme } from "config";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider
			enableSystem={true}
			attribute="data-theme"
			forcedTheme={theme}
		>
			<Component {...pageProps} />;
		</ThemeProvider>
	);
}

export default MyApp;
