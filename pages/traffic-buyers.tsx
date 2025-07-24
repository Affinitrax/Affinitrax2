import Layout from '../components/Layout';

export default function TrafficBuyersPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-6">For Traffic Buyers</h2>
      <p className="text-lg text-gray-300 mb-4">
        Buy traffic with confidence. Affinitrax brings you exclusive offers, timely deliveries, and battle-tested
        broker channels.
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-300">
        <li>Daily lead volumes by niche</li>
        <li>Geo-specific targeting and smart routing</li>
        <li>Plug into active broker streams instantly</li>
      </ul>
    </div>
  );
}