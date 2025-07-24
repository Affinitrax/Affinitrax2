export default function Footer() {
  return (
    <footer className="p-4 border-t border-gray-800 text-center text-sm text-gray-400">
      <p>&copy; {new Date().getFullYear()} Affinitrax. All rights reserved.</p>
    </footer>
  );
}