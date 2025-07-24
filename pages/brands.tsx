import Layout from '../components/Layout';

export default function BrandsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-6">For Brands</h2>
      <p className="text-lg text-gray-300 mb-4">
        Whether you're launching or scaling, Affinitrax helps your brand get seen by the right audiences across
        performance channels.
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-300">
        <li>Data-driven targeting across paid and organic funnels</li>
        <li>Connect with curated brokers & buyers</li>
        <li>Transparent reporting & campaign optimization</li>
      </ul>
    </div>
  );
}