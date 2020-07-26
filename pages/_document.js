import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
	render() {
		return (
			<Html lang="nl">
				<Head>
					<link rel="icon" type="image/x-icon" href="/static/icons/favicon.ico" />
					<link rel="manifest" type="application/manifest+json" href="/manifest.json" />
					<meta name="application-name" content="Brigitta van Dijck" />
					<meta name="theme-color" content="#FBE8A6" />
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
