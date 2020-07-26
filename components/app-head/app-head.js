import { Component } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

class AppHead extends Component {
	constructor(props) {
		super(props)
		const { meta } = props

		this.title = `${meta.title} | ${meta.fallbackSeo.title}` + meta.titleSuffix
		this.description = `${meta.description || meta.fallbackSeo.description}`
	}

	render() {
		const { meta } = this.props

		return (
			<Head>
				<title>{this.title}</title>
				<meta name="description" content={this.description} />
				{meta && <meta name="keywords" content={meta.keywords} />}

				<meta property="og:site_name" content="Brigitta van Dijck" />
				<meta property="og:title" content={this.title} />
				<meta property="og:description" content={this.description} />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="images/[TODO].jpg" />

				<meta name="msapplication-config" content="browserconfig.xml" />
				<meta name="msapplication-TileColor" content="#FBE8A6" />

				<meta name="msapplication-square70x70logo" content="icons/mstile-70x70.png" />
				<meta name="msapplication-square144x144logo" content="icons/mstile-144x144.png" />
				<meta name="msapplication-square150x150logo" content="icons/mstile-150x150.png" />
				<meta name="msapplication-square310x150logo" content="icons/mstile-310x150.png" />
				<meta name="msapplication-square310x310logo" content="icons/mstile-310x310.png" />

				<meta name="mobile-web-app-capable" content="no" />
				<meta name="apple-mobile-web-app-capable" content="no" />
				<meta name="apple-mobile-web-app-title" content="Brigitta van Dijck" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />

				<link rel="icon" type="image/x-icon" href="icons/favicon.ico" />
				<link rel="icon" type="image/png" href="icons/favicon-16x16.png" />
				<link rel="icon" type="image/png" href="icons/favicon-32x32.png" />

				<link rel="icon" type="image/png" href="icons/android-36x36.png" sizes="36x36" />
				<link rel="icon" type="image/png" href="icons/android-48x48.png" sizes="48x48" />
				<link rel="icon" type="image/png" href="icons/android-72x72.png" sizes="72x72" />
				<link rel="icon" type="image/png" href="icons/android-96x96.png" sizes="96x96" />
				<link rel="icon" type="image/png" href="icons/android-144x144.png" sizes="144x144" />
				<link rel="icon" type="image/png" href="icons/android-192x192.png" sizes="192x192" />
				<link rel="icon" type="image/png" href="icons/android-256x256.png" sizes="256x256" />
				<link rel="icon" type="image/png" href="icons/android-384x384.png" sizes="384x384" />
				<link rel="icon" type="image/png" href="icons/android-512x512.png" sizes="512x512" />

				<link rel="apple-touch-icon" href="icons/apple-57x57.png" sizes="57x57" />
				<link rel="apple-touch-icon" href="icons/apple-60x60.png" sizes="60x60" />
				<link rel="apple-touch-icon" href="icons/apple-72x72.png" sizes="72x72" />
				<link rel="apple-touch-icon" href="icons/apple-76x76.png" sizes="76x76" />
				<link rel="apple-touch-icon" href="icons/apple-114x114.png" sizes="114x114" />
				<link rel="apple-touch-icon" href="icons/apple-120x120.png" sizes="120x120" />
				<link rel="apple-touch-icon" href="icons/apple-144x144.png" sizes="144x144" />
				<link rel="apple-touch-icon" href="icons/apple-152x152.png" sizes="152x152" />
				<link rel="apple-touch-icon" href="icons/apple-180x180.png" sizes="180x180" />

				<link rel="manifest" type="application/manifest+json" href="/manifest.json" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#FBE8A6" />
			</Head>
		)
	}
}

AppHead.propTypes = {
	meta: PropTypes.object,
}

export default AppHead
