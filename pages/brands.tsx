import Head from 'next/head';

export default function Brands() {
  return (
    <>
      <Head>
        <title>Affinitrax | Brands</title>
        <meta name="description" content="Affinitrax helps brands access vetted traffic through trusted partners and performance optimization." />
      </Head>
      <main className="min-h-screen bg-black text-white p-6">
        <h1 className="text-3xl font-bold mb-4">For Brands</h1>
        <p className="mb-4">Looking to scale your offers? We match brands with vetted traffic from high-quality sources. Whether you want lead gen, app installs, or user acquisition — our broker ecosystem and tracking layer ensure efficiency and performance at scale.</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Scalable traffic acquisition</li>
          <li>Pre-vetted buyers and funnel optimization</li>
          <li>Full transparency with performance tracking</li>
        </ul>
      </main>
    </>
  );
}
