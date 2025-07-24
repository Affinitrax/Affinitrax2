import Head from 'next/head';

export default function Brokers() {
  return (
    <>
      <Head>
        <title>Affinitrax | Brokers</title>
        <meta name="description" content="Affinitrax gives brokers premium access to monetizable traffic from buyers and brands." />
      </Head>
      <main className="min-h-screen bg-black text-white p-6">
        <h1 className="text-3xl font-bold mb-4">For Brokers</h1>
        <p className="mb-4">We empower trusted brokers with access to premium inventory from verified traffic buyers and high-converting brands. Our private network ensures top-tier offers, competitive payouts, and full transparency — so you always deliver value.</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Instant access to verified campaigns</li>
          <li>Real-time tracking via GetLinked.io (coming soon)</li>
          <li>Dedicated support and fast payment cycles</li>
        </ul>
      </main>
    </>
  );
}