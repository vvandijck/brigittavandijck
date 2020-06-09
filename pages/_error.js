import '../styles/index.less'

// Core
import Head from 'next/head'

// Components
import Footer from '../components/footer/footer'
import Header from '../components/header/header'

const Error = () => (
	<React.Fragment>
		<Head>
			<title>Error</title>
		</Head>
		<Header />
		<main className="error">
			<h1>This page does not exist.</h1>
		</main>
		<Footer />
	</React.Fragment>
)

export default Error
