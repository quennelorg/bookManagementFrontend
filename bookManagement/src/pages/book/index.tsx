import React from 'react';
import Layout from '@theme/Layout';
import BookFeature from '@site/src/components/BookFeatures/BookFeature';
import styles from "@site/src/pages/index.module.css";
import Link from "@docusaurus/Link";
import configProxy from "@site/configProxy/configProxy";

export default function Book(): JSX.Element {
	return (
		<Layout>
			{configProxy.NEED_DEPLOY_TO_AWS ?
				<BookFeature/>
				:
				<div className={styles.buttons}>
					<Link
						className="button button--secondary button--lg"
						to={configProxy.AWS_BOOK_URL}>
						Due to the https restrict, You need to Go to another site to explore Your Book World
					</Link>
				</div>
			}
		</Layout>
	);
}
