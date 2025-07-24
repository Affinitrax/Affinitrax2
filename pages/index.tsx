import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout title="Affinitrax – Home">
      <section className="text-center space-y-6 p-10">
        <h2 className="text-4xl font-bold">Fueling Tomorrow’s Traffic. Today.</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Welcome to Affinitrax — your trusted partner in elite affiliate traffic. We connect traffic buyers, brokers, and top brands across the globe.
        </p>
        <a 
          href="https://t.me/affinitrax"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-3 bg-white text-black font-semibold rounded hover:opacity-90"
        >
          Contact Us on Telegram
        </a>
      </section>
    </Layout>
  );
}
