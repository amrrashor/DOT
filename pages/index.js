import Head from 'next/head';

import HomeSections from '../sections/Home';
import MainLayout from '../sections/MainLayout';


export default function Home() {
  return (
      <MainLayout>
        <HomeSections />
      </MainLayout>
  )
}
