import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Cross Platform',
    Svg: require('@site/static/img/spring-svgrepo-com.svg').default,
    description: (
      <>
        The Book Management system has IOS App, Frontend Application. The data would be store in MongoDB on cloud by backend on cloud
      </>
    ),
  },
  {
    title: 'Detailed Tutorial',
    Svg: require('@site/static/img/gitbook-svgrepo-com.svg').default,
    description: (
      <>
          The Book Management system provide sufficient tutorials for explore the structure of the project
      </>
    ),
  },
  {
    title: 'Powered by Full Stack',
    Svg: require('@site/static/img/react-svgrepo-com.svg').default,
    description: (
      <>
          The Book Management system could be established by one person. The tech stack is about SpringBoot, Docker, MongoDB, AWS, ECS, React, Docusaurus, Material-UI, SwiftUI, Combine, GithubPages
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
          <Link
              className="button button--outline button--link button--md"
              to="/docs/intro">
              <Heading as="h3">{title}</Heading>
          </Link>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
