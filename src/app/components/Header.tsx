'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  
  const handleSupportClick = (e: React.MouseEvent) => {
    if (pathname !== '/') {
      e.preventDefault();
      // 홈으로 이동 후 고객센터로 스크롤
      window.location.href = '/#support';
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 border-b border-gray-200 z-50 shadow-sm">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 md:px-8 h-16">
        <Link href="/" className="font-bold text-black text-xl"></Link>
        <div className="flex w-full h-10 rounded-lg overflow-hidden">
          <Link href="/contact" className="flex-1 flex items-center justify-center text-base font-medium text-black hover:bg-blue-600 hover:text-white transition">문의하기</Link>
          <Link href="/faq" className="flex-1 flex items-center justify-center text-base font-medium text-black hover:bg-blue-600 hover:text-white transition">FAQ</Link>
          <Link 
            href="#support" 
            scroll={true} 
            className="flex-1 flex items-center justify-center text-base font-medium text-black hover:bg-blue-600 hover:text-white transition"
            onClick={handleSupportClick}
          >
            고객센터
          </Link>
        </div>
      </nav>
    </header>
  );
} 