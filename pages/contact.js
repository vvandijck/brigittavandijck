// Styles
import '../styles/index.less'

// Content
import graphqlQuery from './contact.query.graphql'

// Lib
import fetchContent from '../lib/fetch-content'

// Components
import AppFooter from '../components/app-footer/app-footer'
import AppHead from '../components/app-head/app-head'
import AppHeader from '../components/app-header/app-header'
import CallToAction from '../components/call-to-action/call-to-action'
import PageHeader from '../components/page-header/page-header'

const Page = ({ contact, meta }) => (
	<React.Fragment>
		<AppHead meta={meta} seo={contact.seo} />
		<AppHeader />
		<main className="page">
			<PageHeader image={contact.header.responsiveImage} subtitle={contact.subtitle} title={contact.title} />
			<section className="page__content"></section>
			<CallToAction
				buttonLabel={contact.callToAction.label}
				link={contact.callToAction.link}
				title={contact.callToAction.title}
				text={contact.callToAction.text}
			/>
		</main>
		<AppFooter />
	</React.Fragment>
)

Page.getInitialProps = async () => {
	return await fetchContent({ query: graphqlQuery }).then(data => ({
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
