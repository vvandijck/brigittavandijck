import '../styles/index.less'

// Core
import Head from 'next/head'

// Components
import AppFooter from '../components/app-footer/app-footer'
import AppHead from '../components/app-head/app-head'
import AppHeader from '../components/app-header/app-header'

const Error = () => (
	<React.Fragment>
		{/* <AppHead meta={home.meta} seo={home.seo} /> */}
		<AppHeader />
		<main className="error">
			<h1>This page does not exist.</h1>
		</main>
		<AppFooter />
	</React.Fragment>
)

export default Error
