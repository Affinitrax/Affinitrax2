import Layout from '../components/Layout';

export default function BrokersPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-6">For Brokers</h2>
      <p className="text-lg text-gray-300 mb-4">
        Affinitrax enables brokers to scale effortlessly by tapping into vetted traffic pipelines across multiple
        geos and verticals.
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-300">
        <li>Access to high-converting traffic in real-time</li>
        <li>Work with verified buyers and brands</li>
        <li>Get analytics and conversion insights</li>
      </ul>
    </div>
  );
}