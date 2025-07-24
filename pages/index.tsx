import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title="Affinitrax | Fueling Tomorrow’s Traffic. Today.">
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Fueling Tomorrow’s Traffic. Today.</h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8">Welcome to Affinitrax — your trusted partner in affiliate traffic solutions. We connect traffic buyers, brokers, and top brands across the globe.</p>
        <a href="https://t.me/affinitrax" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl transition">Contact Us on Telegram</a>
      </section>
    </Layout>
  );
}