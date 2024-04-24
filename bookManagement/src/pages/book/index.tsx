import React from 'react';
import Layout from '@theme/Layout';
import BookFeature from '@site/src/components/BookFeatures/BookFeature';

export default function Book(): JSX.Element {
	return (
		<Layout>
			<h1>This is Book</h1>
			<BookFeature />
		</Layout>
	);
}