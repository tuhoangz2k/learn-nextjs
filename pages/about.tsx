import { useRouter } from 'next/router';
import React from 'react';

type AboutPageProps = {};

const AboutPage = (props: AboutPageProps) => {
	const router = useRouter();
	console.log('about query', router.query);
	return <div>AboutPage</div>;
};
export default AboutPage;
