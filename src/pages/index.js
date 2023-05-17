import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useSelector } from 'react-redux'
import HomePage from '@/components/HomePage/HomePage';
export default function Home() {
  const { user, isLoading, isError, error } = useSelector((state) => state.auth);
  // console.log(user, isLoading, isError, error);
  return (
    <>
      <Head>
        <title>🏡Data-Management</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage></HomePage>
    </>
  )
}
