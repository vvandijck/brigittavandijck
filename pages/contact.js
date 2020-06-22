import '../styles/index.less'

// Lib
import fetchContent from '../lib/fetch-content'

// Components
import AppFooter from '../components/app-footer/app-footer'
import AppHead from '../components/app-head/app-head'
import AppHeader from '../components/app-header/app-header'

const Page = ({ contact, meta }) => (
	<React.Fragment>
		<AppHead meta={meta} seo={contact.seo} />
		<AppHeader />
		<main className="page">
			<div className="page__content"></div>
		</main>
		<AppFooter />
	</React.Fragment>
)

Page.getInitialProps = async () => {
	const QUERY = `query Contact {
		_site {
			globalSeo {
				titleSuffix
				fallbackSeo {
					title
					description
				}
			}
		}
		contact {
			id
			keywords
			robots
			seo {
				description
				title
			}
		}
	}`

	return await fetchContent({ query: QUERY }).then(data => ({
		meta: {
			...data._site.globalSeo,
			...data.contact.seo,
			keywords: data.contact.keywords,
			robots: data.contact.robots,
		},
		contact: data.contact,
	}))
}

export default Page
