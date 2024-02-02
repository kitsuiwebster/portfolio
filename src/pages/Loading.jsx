import React from 'react';
import Layout from '../layouts/Layout';
import '../assets/scss/pages/Loading.scss';
import '../assets/scss/index.scss'
import { useTranslation } from 'react-i18next';

const Loading = () => {
    const { t } = useTranslation('loading')
    return (
        <>
            <Layout>
                <section id="loading">
                    <div className='loading'>
                        <h1 className='loading-title'>{t('status')}</h1>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Loading;
