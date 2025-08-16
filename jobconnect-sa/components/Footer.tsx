export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
     <div className="container mx-auto text-center px-4 sm:px-6">
        <p className="text-sm">
          © {new Date().getFullYear()} JobConnect-SA · Built with ❤️ using Next.js & Tailwind CSS By Zakhele Prince Feela
        </p>
      </div>
    </footer>
  );
}
