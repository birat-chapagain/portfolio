import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Portfolio</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>
			<ThemeProvider enableSystem={true} attribute="data-theme">
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
