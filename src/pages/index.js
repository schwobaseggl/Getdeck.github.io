import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <img src="img/logo_large.png"/>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>

                        <Link
                            className="button button--active button--lg"
                            to="/docs/deck/intro">
                            Introduction
                        </Link>


                        <Link
                            className="button button--secondary button--lg"
                            to="/docs/deck/getting-started">
                            Getting started
                        </Link>

                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Getdeck, a CLI that creates reproducible Kubernetes environments for development and testing">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
