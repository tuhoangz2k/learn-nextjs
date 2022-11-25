// import Header from '@/components/common/Header';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

type AboutPageProps = {};
const Header = dynamic(() => import('@/components/common/Header'), { ssr: false });
const AboutPage = (props: AboutPageProps) => {
	const [postList, setPostList] = useState([]);
	const router = useRouter();
	const page = router.query?.page;
	const handleNextClick = () => {
		router.push(
			{
				pathname: '/about',
				query: {
					page: (Number(router.query?.page) || 1) + 1,
				},
			},
			undefined,
			{ shallow: true }
		);
	};
	console.log('about query', router.query);
	useEffect(() => {
		if (!page) return;
		(async () => {
			const res = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=' + page);
			const data = await res.json();
			setPostList(data.data);
		})();
	}, [page]);
	return (
		<div>
			<Header />
			<h1>AboutPage</h1>
			<ul>
				{postList?.map((post: any) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
			<button onClick={handleNextClick}>next page</button>
		</div>
	);
};
export async function getStaticProps() {
	console.log('get static props');
	return {
		props: {},
	};
}
export default AboutPage;
