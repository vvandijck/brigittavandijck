const query = slug => `
	query Practice {
		_site {
			globalSeo {
				titleSuffix
				fallbackSeo {
					title
					description
				}
			}
		}
		service(filter: {slug: {eq: "${slug}"}}) {
			title
			subtitle
			callToAction {
				label
				link {
					... on ServicesOverviewRecord {
						slug
					}
					... on ContactRecord {
						slug
					}
					... on AboutRecord {
						slug
					}
				}
				text(markdown: true)
				title
			}
			content {
				... on ImageRecord {
					recordType: _modelApiKey
					image {
						responsiveImage(imgixParams: {fit: crop, w: 1180, auto: format}) {
							alt
							aspectRatio
							base64
							bgColor
							height
							sizes
							src
							srcSet
							title
							webpSrcSet
							width
						}
					}
					title
				}
				... on QuoteRecord {
					recordType: _modelApiKey
					name
					text
				}
				... on TextImageRecord {
					recordType: _modelApiKey
					image {
						responsiveImage(imgixParams: {fit: crop, w: 1180, auto: format}) {
							alt
							aspectRatio
							base64
							bgColor
							height
							sizes
							src
							srcSet
							title
							webpSrcSet
							width
						}
					}
					inverted
					text(markdown: true)
					title
				}
				... on TextFullWidthRecord {
					recordType: _modelApiKey
					text(markdown: true)
					title
				}
				... on ImageFullWidthRecord {
					recordType: _modelApiKey
					image {
						responsiveImage(imgixParams: {fit: crop, w: 1440, h: 500, auto: format}) {
							alt
							aspectRatio
							base64
							bgColor
							height
							sizes
							src
							srcSet
							title
							webpSrcSet
							width
						}
					}
					title
				}
				... on TextListRecord {
					recordType: _modelApiKey
					inverted
					text(markdown: true)
					title
				}
			}
			id
			keywords
			seo {
				description
				title
			}
		}
	}
`

export default query
