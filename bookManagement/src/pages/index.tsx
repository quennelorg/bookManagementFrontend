import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import configProxy from "@site/configProxy/configProxy";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
            {configProxy.NEED_DEPLOY_TO_AWS ?
                <Link
                    className="button button--secondary button--lg"
                    to="/book">
                    Manage Your Book World
                </Link>
                :
                <Link
                    className="button button--secondary button--lg"
                    to="http://quennelcoder-bookmanagement.s3-website-ap-southeast-2.amazonaws.com/book">
                    Due to the https restrict, You need to Go to another site to explore Your Book World
                </Link>
            }
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Book your Book">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
