import Head from 'next/head';
import Footer from './Footer';

export default function Layout({ children, title }: { children: React.ReactNode, title: string }) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Affinitrax - Fueling Tomorrow’s Traffic. Today." />
      </Head>
      <header className="p-4 border-b border-gray-800 sticky top-0 bg-black z-10">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold">Affinitrax</h1>
          <a href="https://t.me/affinitrax" target="_blank" rel="noopener noreferrer" className="text-sm bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl">Telegram</a>
        </div>
      </header>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}