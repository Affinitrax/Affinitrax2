import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Affinitrax | Fueling Tomorrow’s Traffic. Today.</title>
        <meta name="description" content="Affinitrax connects premium traffic buyers, trusted brokers, and top-tier brands." />
        <meta property="og:title" content="Affinitrax | Fueling Tomorrow’s Traffic. Today." />
        <meta property="og:description" content="Affinitrax connects premium traffic buyers, trusted brokers, and top-tier brands." />
        <meta property="og:image" content="/meta-image.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
        <h1 className="text-4xl font-bold mb-4">Affinitrax</h1>
        <p className="text-xl mb-8">Fueling Tomorrow’s Traffic. Today.</p>
        <div className="flex space-x-6">
          <Link href="/brokers" className="underline">Brokers</Link>
          <Link href="/traffic-buyers" className="underline">Traffic Buyers</Link>
          <Link href="/brands" className="underline">Brands</Link>
        </div>
        <div className="mt-10 text-sm opacity-60">
          <p>Contact us via <a href="https://t.me/affinitrax" target="_blank" rel="noopener noreferrer" className="underline">@affinitrax</a></p>
        </div>
      </main>
    </>
  );
}