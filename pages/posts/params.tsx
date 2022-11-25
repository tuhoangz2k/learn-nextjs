import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {};

const PostDetail = (props: Props) => {
	const router = useRouter();
	console.log(router.query);
	return (
		<div>
			<h3>{JSON.stringify(router.query)}</h3>
			<h1>Wibu rach</h1>
		</div>
	);
};

export default PostDetail;
export async function getServerSideProps(context: GetServerSidePropsContext) {
	await new Promise((resolve) => setTimeout(resolve, 3000));
	return {
		props: {}, // will be passed to the page component as props
	};
}
