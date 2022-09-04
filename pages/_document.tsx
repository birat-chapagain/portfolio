import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import * as gtag from "@lib/gtag";

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta
						name="title"
						content="Portfolio | A little peak into my world"
					/>
					<meta name="description" content="Showcase for my works." />
					<meta property="og:type" content="website" />
					<meta property="og:url" content={gtag.DEPLOYED_URL} />
					<meta
						property="og:title"
						content="Portfolio | A little peak into my world"
					/>
					<meta property="og:description" content="Showcase for my works." />
					<meta
						property="og:image"
						content={`${gtag.DEPLOYED_URL}/outpass-white.png`}
					/>

					<meta property="twitter:card" content="summary_large_image" />
					<meta property="twitter:url" content={gtag.DEPLOYED_URL} />
					<meta
						property="twitter:title"
						content="Portfolio | A little peak into my world"
					/>
					<meta
						property="twitter:description"
						content="Showcase for my works."
					/>
					<meta property="twitter:image" content={gtag.DEPLOYED_URL} />
					<meta charSet="utf-8" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin={"true"}
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Comfortaa&family=Inter&display=swap"
						rel="stylesheet"
					/>
					<Script
						strategy="afterInteractive"
						src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
					/>
					<Script
						id="gtag-init"
						strategy="afterInteractive"
						dangerouslySetInnerHTML={{
							__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
						}}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
