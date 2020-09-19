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
import AppMobileMenu from '../components/app-mobile-menu/app-mobile-menu'
import CallToAction from '../components/call-to-action/call-to-action'
import ContactForm from '../components/contact-form/contact-form'
import PageHeader from '../components/page-header/page-header'

const Page = ({ contact, meta }) => (
	<React.Fragment>
		<AppHead meta={meta} seo={contact.seo} />
		<AppHeader />
		<AppMobileMenu />
		<main className="page page--contact">
			<PageHeader image={contact.header.responsiveImage} subtitle={contact.subtitle} title={contact.title} />
			<section className="page__content">
				<div className="container">
					<address class="contact-sidebar">
						<dl class="body">
							<dt>E-mail mij via</dt>
							<dd>
								<a href="mailto:info@brigittavandijck.nl">info@brigittavandijck.nl</a>
							</dd>
							<dt>Bel mij via</dt>
							<dd>
								<a href="tel:+31622386634">+31 (0)6 22386634</a>
							</dd>
							<dt>Bezoek mij op</dt>
							<dd>
								<a
									href="https://www.google.com/maps/place/Moslaan+42,+1433+WB+Kudelstaart/@52.2411424,4.7522422,17z/data=!3m1!4b1!4m5!3m4!1s0x47c5de6d90b2f4c3:0xb9e4b2a063106090!8m2!3d52.2411391!4d4.7544309"
									target="_blank"
									rel="noreferrer noopener"
								>
									Moslaan 42
									<br />
									1433 WJ Kudelstaart
								</a>
							</dd>
						</dl>
					</address>
					<ContactForm />
				</div>
			</section>
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
		},
		contact: data.contact,
	}))
}

export default Page
