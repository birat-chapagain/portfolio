import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider enableSystem={true} attribute="data-theme">
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
