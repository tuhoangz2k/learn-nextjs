import { useRouter } from 'next/router';
import React from 'react';

type Props = {};

const PostDetail = (props: Props) => {
	const router = useRouter();
	console.log(router.query);
	return (
		<div>
			<h3>{JSON.stringify(router.query)}</h3>
		</div>
	);
};

export default PostDetail;
