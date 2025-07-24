import Head from 'next/head';

export default function TrafficBuyers() {
  return (
    <>
      <Head>
        <title>Affinitrax | Traffic Buyers</title>
        <meta name="description" content="Affinitrax connects traffic buyers to high-converting offers from top brokers and brands." />
      </Head>
      <main className="min-h-screen bg-black text-white p-6">
        <h1 className="text-3xl font-bold mb-4">For Traffic Buyers</h1>
        <p className="mb-4">Join a curated ecosystem of traffic professionals. Gain access to exclusive, high-performing campaigns across verticals — all optimized for scale. Our tech-first stack ensures easy integration, fraud control, and unmatched ROI.</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Verified broker campaigns</li>
          <li>Fraud prevention and smart routing</li>
          <li>Custom APIs and targeting options</li>
        </ul>
      </main>
    </>
  );
}