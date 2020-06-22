import '../styles/index.less'
import '../styles/pages/style-guide.less'

const Page = () => (
	<React.Fragment>
		<main className="style-guide">
			<section className="style-guide__section">
				<span className="style-guide__section-title">Colors</span>
				<div className="style-guide__color" style={{ backgroundColor: '#cccccc' }}>
					<span>#cccccc</span>
					<span>@color-variable</span>
				</div>
				<div className="style-guide__color" style={{ backgroundColor: '#cccccc' }}>
					<span>#cccccc</span>
					<span>@color-variable</span>
				</div>
			</section>
			<section className="style-guide__section">
				<span className="style-guide__section-title">Typography</span>
				<span className="style-guide__section-subtitle">Headings</span>
				<h1 className="h1">Heading 1: The quick brown fox jumps over the lazy dog</h1>
				<h2 className="h2">Heading 2: The quick brown fox jumps over the lazy dog</h2>
				<h3 className="h3">Heading 3: The quick brown fox jumps over the lazy dog</h3>
				<h4 className="h4">Heading 4: The quick brown fox jumps over the lazy dog</h4>
				<h5 className="h5">Heading 5: The quick brown fox jumps over the lazy dog</h5>
				<h6 className="h6">Heading 6: The quick brown fox jumps over the lazy dog</h6>
				<span className="style-guide__section-subtitle">Text</span>
				<p className="body-big">
					Ut commodo sapien non nunc semper ornare. Proin elit purus, vestibulum quis quam rutrum, dictum blandit mi.
					Curabitur consequat sollicitudin nisl non aliquet. Cras ornare blandit pellentesque. In hac habitasse platea
					dictumst. Sed dignissim eu ipsum dictum sagittis. Phasellus posuere velit in nulla ultrices, vel fringilla leo
					fermentum. Nam id urna posuere arcu hendrerit molestie maximus sed erat.
				</p>
				<p className="body">
					Ut commodo sapien non nunc semper ornare. Proin elit purus, vestibulum quis quam rutrum, dictum blandit mi.
					Curabitur consequat sollicitudin nisl non aliquet. Cras ornare blandit pellentesque. In hac habitasse platea
					dictumst. Sed dignissim eu ipsum dictum sagittis. Phasellus posuere velit in nulla ultrices, vel fringilla leo
					fermentum. Nam id urna posuere arcu hendrerit molestie maximus sed erat.
				</p>
				<p className="body-petite">
					Ut commodo sapien non nunc semper ornare. Proin elit purus, vestibulum quis quam rutrum, dictum blandit mi.
					Curabitur consequat sollicitudin nisl non aliquet. Cras ornare blandit pellentesque. In hac habitasse platea
					dictumst. Sed dignissim eu ipsum dictum sagittis. Phasellus posuere velit in nulla ultrices, vel fringilla leo
					fermentum. Nam id urna posuere arcu hendrerit molestie maximus sed erat.
				</p>
				<p className="body-detail">
					Ut commodo sapien non nunc semper ornare. Proin elit purus, vestibulum quis quam rutrum, dictum blandit mi.
					Curabitur consequat sollicitudin nisl non aliquet. Cras ornare blandit pellentesque. In hac habitasse platea
					dictumst. Sed dignissim eu ipsum dictum sagittis. Phasellus posuere velit in nulla ultrices, vel fringilla leo
					fermentum. Nam id urna posuere arcu hendrerit molestie maximus sed erat.
				</p>
			</section>
			<section className="style-guide__section">
				<span className="style-guide__section-title">Buttons</span>
				<span className="style-guide__section-subtitle">Primary</span>
				<a href="#" className="app-button app-button--primary">
					Link
				</a>
				<button className="app-button app-button--primary">Button</button>
				<button className="app-button app-button--primary" disabled>
					Button
				</button>

				<span className="style-guide__section-subtitle">Secondary</span>
				<a href="#" className="app-button app-button--secondary">
					Link
				</a>
				<button className="app-button app-button--secondary">Button</button>
				<button className="app-button app-button--secondary" disabled>
					Button
				</button>

				<span className="style-guide__section-subtitle">Tertiary</span>
				<a href="#" className="app-button app-button--tertiary">
					Link
				</a>
				<button className="app-button app-button--tertiary">Button</button>
				<button className="app-button app-button--tertiary" disabled>
					Button
				</button>
			</section>
			<section className="style-guide__section">
				<span className="style-guide__section-title">Lists</span>
				<span className="style-guide__section-subtitle">Inline list</span>
				<ul className="list-inline body">
					<li>Item 1</li>
					<li>Item 2</li>
					<li>Item 3</li>
				</ul>
				<span className="style-guide__section-subtitle">Unordered list</span>
				<ul className="list body">
					<li>Item 1</li>
					<li>Item 2</li>
					<li>Item 3</li>
				</ul>
				<span className="style-guide__section-subtitle">Numbered list</span>
				<ol className="numbered-list body">
					<li>Item 1</li>
					<li>Item 2</li>
					<li>Item 3</li>
				</ol>
			</section>
		</main>
	</React.Fragment>
)

export default Page
