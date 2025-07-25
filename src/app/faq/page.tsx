import React from "react";
import Link from "next/link";

const FAQ_LIST = [
  {
    q: "나누지는 어떤 서비스인가요?",
    a: "모임비, 더치페이, 정산까지 한 번에 관리할 수 있는 모임비 관리 앱입니다.",
  },
  {
    q: "정산 내역은 어떻게 확인하나요?",
    a: "앱 내에서 모임별로 정산 내역을 한눈에 확인할 수 있습니다.",
  },
  {
    q: "공제 인원은 어떻게 추가하나요?",
    a: "영수증 등록 시 공제 인원을 선택하고, 금액과 사유를 입력하면 됩니다.",
  },
  {
    q: "문의는 어디로 하나요?",
    a: "문의하기 페이지에서 이메일 또는 문의 폼을 통해 문의하실 수 있습니다.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-start py-20 px-4">
      {/* 홈으로 이동하는 단일 메뉴 */}
      <nav className="w-full max-w-2xl mx-auto flex items-center justify-end mb-8">
        <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded-full font-bold shadow hover:bg-blue-700 transition">홈으로</Link>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-blue-600">자주 묻는 질문(FAQ)</h1>
      <div className="w-full max-w-2xl flex flex-col gap-6">
        {FAQ_LIST.map((item, idx) => (
          <div key={idx} className="bg-gray-50 rounded-xl shadow p-6">
            <div className="font-semibold text-lg text-blue-600 mb-2">Q. {item.q}</div>
            <div className="text-gray-700">A. {item.a}</div>
          </div>
        ))}
      </div>
    </main>
  );
} 