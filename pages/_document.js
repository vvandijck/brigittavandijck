import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
	render() {
		return (
			<Html lang="nl">
				<Head>
					<meta name="application-name" content="Brigitta van Dijck - Office management" />
					<meta name="theme-color" content="#FBE8A6" />

					<meta name="msapplication-config" content="browserconfig.xml" />
					<meta name="msapplication-TileColor" content="#FBE8A6" />

					<meta name="msapplication-square70x70logo" content="/images/mstile-70x70.png" />
					<meta name="msapplication-square144x144logo" content="/images/mstile-144x144.png" />
					<meta name="msapplication-square150x150logo" content="/images/mstile-150x150.png" />
					<meta name="msapplication-square310x150logo" content="/images/mstile-310x150.png" />
					<meta name="msapplication-square310x310logo" content="/images/mstile-310x310.png" />

					<meta name="mobile-web-app-capable" content="no" />
					<meta name="apple-mobile-web-app-capable" content="no" />
					<meta name="apple-mobile-web-app-title" content="Brigitta van Dijck - Office management" />
					<meta name="apple-mobile-web-app-status-bar-style" content="default" />

					<link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
					<link rel="icon" type="image/png" href="/images/favicon-16x16.png" />
					<link rel="icon" type="image/png" href="/images/favicon-32x32.png" />

					<link rel="icon" type="image/png" href="/images/android-36x36.png" sizes="36x36" />
					<link rel="icon" type="image/png" href="/images/android-48x48.png" sizes="48x48" />
					<link rel="icon" type="image/png" href="/images/android-72x72.png" sizes="72x72" />
					<link rel="icon" type="image/png" href="/images/android-96x96.png" sizes="96x96" />
					<link rel="icon" type="image/png" href="/images/android-144x144.png" sizes="144x144" />
					<link rel="icon" type="image/png" href="/images/android-192x192.png" sizes="192x192" />
					<link rel="icon" type="image/png" href="/images/android-256x256.png" sizes="256x256" />
					<link rel="icon" type="image/png" href="/images/android-384x384.png" sizes="384x384" />
					<link rel="icon" type="image/png" href="/images/android-512x512.png" sizes="512x512" />

					<link rel="apple-touch-icon" href="/images/apple-57x57.png" sizes="57x57" />
					<link rel="apple-touch-icon" href="/images/apple-60x60.png" sizes="60x60" />
					<link rel="apple-touch-icon" href="/images/apple-72x72.png" sizes="72x72" />
					<link rel="apple-touch-icon" href="/images/apple-76x76.png" sizes="76x76" />
					<link rel="apple-touch-icon" href="/images/apple-114x114.png" sizes="114x114" />
					<link rel="apple-touch-icon" href="/images/apple-120x120.png" sizes="120x120" />
					<link rel="apple-touch-icon" href="/images/apple-144x144.png" sizes="144x144" />
					<link rel="apple-touch-icon" href="/images/apple-152x152.png" sizes="152x152" />
					<link rel="apple-touch-icon" href="/images/apple-180x180.png" sizes="180x180" />

					<link rel="manifest" type="application/manifest+json" href="/manifest.json" />
					<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#FBE8A6" />
				</Head>
				<body className="layout">
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default CustomDocument
