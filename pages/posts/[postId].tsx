import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {
	post: any;
};

const PostDetail = (props: Props) => {
	const router = useRouter();
	console.log(router.query);
	if (!props.post) return null;
	return (
		<div>
			<h3>{JSON.stringify(router.query)}</h3>
			<p>{props.post.title}</p>
			<p>{props.post.description}</p>
		</div>
	);
};

export default PostDetail;

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
	const data = await res.json();
	return {
		paths: data.data.map((post: any) => ({ params: { postId: post.id } })),
		fallback: false, // can also be true or 'blocking'
	};
};

export const getStaticProps: GetStaticProps<Props> = async (context: GetStaticPropsContext) => {
	const postId = context.params?.postId;
	if (!postId) return { notFound: true };
	const res = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`);
	const data = await res.json();
	return {
		props: {
			post: data,
		},
	};
};
