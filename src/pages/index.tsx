import type { NextPage } from 'next';
import Head from 'next/head';
import Home from '../views/Home/Home';

const Index: NextPage = () => (

    <div style={
      {width: "100vw",
       height: "100vh",
       display: "grid",
       placeItems:"center",
       overflow: "hidden"}}>
      <Head>
        <title>Covid Daily Reports</title>
        <meta property="og:title" content="My page title" key="title" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap" rel="stylesheet"/>
      </Head>
      <Home/>
    </div>

);

export default Index;
