import Footer from '../components/footer';

export const metadata = {
	title: 'Posts',
	description: 'The blogpage for the blog application',
};

export default function BlogLayout({ children }) {
	return (
		<>
			{children}
			<Footer />
		</>
	);
}
