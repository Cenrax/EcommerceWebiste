import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Products</h1>
        <ul>
          <li>Product 1</li>
          <l1>Product 2</l1>
        </ul>
      </div>
    </Layout>
  );
}
