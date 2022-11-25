import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import React from 'react';

type Props = {
	posts: any[];
};

const PostList = (props: Props) => {
	return (
		<div>
			<ul>
				{props.posts.map((post) => (
					<li key={post.id}>
						<Link href={`/posts/${post.id}`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PostList;
export const getStaticProps: GetStaticProps<Props> = async (context: GetStaticPropsContext) => {
	const res = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
	const data = await res.json();
	return {
		props: {
			posts: data.data,
		},
	};
};
