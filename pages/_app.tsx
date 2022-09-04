import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/global.css";
import { information, theme } from "../config";

function MyApp({ Component, pageProps }: AppProps) {
	const isRohit = information.email === "sahrohit9586@gmail.com";

	return (
		<>
			<Head>
				<title>Portfolio</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>
			<ThemeProvider
				enableSystem={true}
				attribute="data-theme"
				forcedTheme={isRohit ? undefined : theme}
			>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
