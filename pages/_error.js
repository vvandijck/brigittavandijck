import '../styles/index.less'

// Components
import AppFooter from '../components/app-footer/app-footer'
import AppHeader from '../components/app-header/app-header'

const Error = () => (
	<React.Fragment>
		<AppHeader />
		<main className="error">
			<h1>This page does not exist.</h1>
		</main>
		<AppFooter />
	</React.Fragment>
)

export default Error
