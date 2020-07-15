// Styles
import '../styles/index.less'

// Content
import graphqlQuery from './practice.query.graphql'

// Lib
import fetchContent from '../lib/fetch-content'

// Components
import AppFooter from '../components/app-footer/app-footer'
import AppHead from '../components/app-head/app-head'
import AppHeader from '../components/app-header/app-header'
import CallToAction from '../components/call-to-action/call-to-action'
import FullWidthImage from '../components/full-width-image/full-width-image'
import ImageBlock from '../components/image-block/image-block'
import ImageTextBlock from '../components/image-text-block/image-text-block'
import PageHeader from '../components/page-header/page-header'
import QuoteBlock from '../components/quote-block/quote-block'
import ServicesList from '../components/services-list/services-list'
import TextBlock from '../components/text-block/text-block'
import TitleListBlock from '../components/title-list-block/title-list-block'
import query from './practice/[slug].query'

const Page = ({ practiceOverview, meta }) => (
	<React.Fragment>
		<AppHead meta={meta} seo={practiceOverview.seo} />
		<AppHeader />
		<main className="page">
			<PageHeader
				image={practiceOverview.header.responsiveImage}
				subtitle={practiceOverview.subtitle}
				title={practiceOverview.title}
			/>
			<ServicesList services={practiceOverview.services} />
			<section className="page__content">
				{practiceOverview.content.map((block, index) => {
					switch (block.recordType) {
						case 'image':
							return <ImageBlock key={index} image={block.image.responsiveImage} title={block.title} />

						case 'image_full_width':
							return <FullWidthImage key={index} image={block.image.responsiveImage} title={block.title} />

						case 'quote':
							return <QuoteBlock key={index} name={block.name} text={block.text} />

						case 'text_full_width':
							return <TextBlock key={index} title={block.title} text={block.text} />

						case 'text_image':
							return (
								<ImageTextBlock
									key={index}
									title={block.title}
									text={block.text}
									image={block.image.responsiveImage}
									inverted={block.inverted}
								/>
							)
						case 'text_list':
							return <TitleListBlock title={block.title} text={block.text} inverted={block.inverted} />
					}
				})}
			</section>
			<CallToAction
				buttonLabel={practiceOverview.callToAction.label}
				link={practiceOverview.callToAction.link}
				title={practiceOverview.callToAction.title}
				text={practiceOverview.callToAction.text}
			/>
		</main>
		<AppFooter />
	</React.Fragment>
)

Page.getInitialProps = async () => {
	return await fetchContent({ query: graphqlQuery }).then(data => ({
		meta: {
			...data._site.globalSeo,
			...data.practiceOverview.seo,
			keywords: data.practiceOverview.keywords,
		},
		practiceOverview: data.practiceOverview,
	}))
}

export default Page
