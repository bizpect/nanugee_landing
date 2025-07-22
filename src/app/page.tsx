'use client'

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <motion.section
        className="text-center py-24 w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-blue-600">
          더치페이, 정산까지 한 번에 나누지! <br />
          모임비 정산, 더 이상 미루지 마세요!
        </h1>
        <p className="text-lg mb-12 text-gray-600">
          나누지는 모임의 영수증 등록부터<br />
          더치페이, 정산요청, 실시간 소통까지<br />
          한 번에 해결해주는 모임비 관리 앱입니다.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-center mb-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.bizpect.nanugee"
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[180px] max-w-xs w-full sm:w-auto px-6 py-3 bg-green-600 text-white rounded-full font-semibold shadow hover:bg-green-700 transition text-base text-center"
          >
            Google Play에서 다운로드
          </a>
          <a
            href="#"
            className="min-w-[180px] max-w-xs w-full sm:w-auto px-6 py-3 bg-black text-white rounded-full font-semibold shadow hover:bg-gray-800 transition text-base text-center"
          >
            App Store에서 다운로드
          </a>
        </div>
        {/* 트리형 구조(중앙 기준 5방향 배치) */}
        <div className="relative flex items-center justify-center mt-16 -mb-20 w-full max-w-2xl mx-auto h-[440px]">
          {/* 중앙: 모임 생성 */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-blue-600 font-bold rounded-full shadow-lg flex items-center justify-center w-40 h-16 text-lg border border-blue-100 z-20"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            모임 생성
          </motion.div>
          {/* 12시: 모임인원 초대 */}
          <motion.div
            className="absolute left-1/2 top-[7%] -translate-x-1/2 bg-white text-blue-600 font-bold rounded-full shadow-lg flex items-center justify-center w-36 h-14 text-base border border-blue-100 z-10"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          >
            모임인원 초대
          </motion.div>
          {/* 대각선 좌상: 영수증 등록 */}
          <motion.div
            className="absolute left-[12%] top-[22%] bg-white text-blue-600 font-bold rounded-full shadow-lg flex items-center justify-center w-36 h-14 text-base border border-blue-100 z-10"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            영수증 등록
          </motion.div>
          {/* 대각선 좌하: 자동계산 */}
          <motion.div
            className="absolute left-[12%] bottom-[22%] bg-white text-blue-600 font-bold rounded-full shadow-lg flex items-center justify-center w-36 h-14 text-base border border-blue-100 z-10"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut" }}
          >
            자동계산
          </motion.div>
          {/* 대각선 우상: 실시간 소통 */}
          <motion.div
            className="absolute right-[12%] top-[22%] bg-white text-blue-600 font-bold rounded-full shadow-lg flex items-center justify-center w-36 h-14 text-base border border-blue-100 z-10"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          >
            실시간 소통
          </motion.div>
          {/* 대각선 우하: 정산요청 */}
          <motion.div
            className="absolute right-[12%] bottom-[22%] bg-white text-blue-600 font-bold rounded-full shadow-lg flex items-center justify-center w-36 h-14 text-base border border-blue-100 z-10"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.9, repeat: Infinity, ease: "easeInOut" }}
          >
            정산요청
          </motion.div>
          {/* 선(가지) SVG로 연결 */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" width="100%" height="100%">
            {/* 12시 */}
            <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="#93c5fd" strokeWidth="3" />
            {/* 좌상 */}
            <line x1="50%" y1="50%" x2="17%" y2="27%" stroke="#93c5fd" strokeWidth="3" />
            {/* 좌하 */}
            <line x1="50%" y1="50%" x2="17%" y2="73%" stroke="#93c5fd" strokeWidth="3" />
            {/* 우상 */}
            <line x1="50%" y1="50%" x2="83%" y2="27%" stroke="#93c5fd" strokeWidth="3" />
            {/* 우하 */}
            <line x1="50%" y1="50%" x2="83%" y2="73%" stroke="#93c5fd" strokeWidth="3" />
          </svg>
        </div>
      </motion.section>

        {/* SEC2: 모임 생성 */}
        <section className="w-full py-20" style={{ background: '#4083FA' }}>
          <div className="max-w-5xl mx-auto flex flex-col">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-10 text-center">모임 생성</h1>
            <div className="flex flex-row items-center justify-between px-12 md:px-32">
              <div className="w-1/2 text-white pr-4 md:pr-12 text-left flex flex-col justify-center">
                <p className="text-2xl md:text-3xl font-bold mb-6">나누지 첫 시작!</p>
                <ul className="text-lg mb-6 list-disc list-inside opacity-90">
                  <li>모임명 (목적)</li>
                  <li>모임 인원 수</li>
                  <li>모임 기간 선택</li>
                </ul>
                <p className="text-xl font-semibold">간단한 정보로<br/>쉽고 빠르게 생성!</p>
              </div>
              <div className="w-1/2 flex justify-center items-center">
                <img src="/images/create_meeting.jpg" alt="모임 생성 미리보기" className="w-96 h-96 object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* SEC3: 영수증 등록 (배경색 sec1과 동일) */}
        <section className="w-full py-20 bg-gray-100">
          <div className="max-w-5xl mx-auto flex flex-col">
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#4083FA] mb-10 text-center">영수증 등록</h1>
            <div className="flex flex-row items-center justify-between px-12 md:px-32">
              <div className="w-1/2 text-black pl-4 md:pl-12 text-left flex flex-col justify-center">
                <p className="text-2xl md:text-3xl font-bold mb-6">영수증 등록은<br/>필요한 정보만!</p>
                <ul className="text-sm mb-6 list-disc list-inside opacity-90 text-left text-gray-700">
                  <li>업체명</li>
                  <li>총 결제 금액</li>
                  <li>결제 날짜 선택</li>
                  <li>결제 시간 선택</li>
                  <li>결제자 선택</li>
                  <li>영수증 이미지 등록</li>
                </ul>
              </div>
              <div className="w-1/2 flex justify-center items-center">
                <img src="/images/create_receipt.jpg" alt="영수증 등록 미리보기" className="w-96 h-96 object-contain mb-4" />
              </div>
            </div>
            <div className="w-full flex justify-center mt-2">
              <p className="text-xs text-black text-center">작은 수고는 보다 더 정확한 계산을 부릅니다.</p>
            </div>
            {/* 공제인원 추가: 왼쪽 텍스트, 오른쪽 사진 */}
            <div className="flex flex-row items-center justify-between px-12 md:px-32 gap-[60px] mt-12">
              <div className="w-1/2 flex flex-col justify-center items-start text-left">
                <p className="text-lg font-semibold mb-2">영수증 등록에 이어서<br/>공제인원 추가하세요.</p>
                <ul className="text-sm mb-4 list-disc list-inside opacity-90">
                  <li>공제인원 선택</li>
                  <li>공제금액</li>
                  <li>공제사유</li>
                </ul>
                <p className="text-base font-medium">모두 입력 후 저장 완료!</p>
              </div>
              <div className="w-1/2 flex justify-center items-center">
                <img src="/images/gongje_member.jpg" alt="공제인원 추가 미리보기" className="w-96 h-96 object-contain" />
              </div>
            </div>
            {/* 공제 예시 트리 시각화 */}
            <div className="relative flex flex-col items-center mt-12 mb-4 w-full max-w-2xl mx-auto h-[420px]">
              {/* 50,000원 영수증 등록 (상단 중앙) */}
              <div className="absolute left-1/2 top-[5%] -translate-x-1/2 bg-white text-black font-semibold rounded-full shadow-lg flex items-center justify-center w-44 h-12 text-base border border-blue-100 z-20">
                50,000원 영수증 등록
              </div>
              {/* 왼쪽 아래: 공제인원이 없음 */}
              <div className="absolute left-[10%] top-[40%] bg-white text-black font-semibold rounded-full shadow-lg flex items-center justify-center w-36 h-10 text-base border border-blue-100 z-10">
                공제인원이 없음
              </div>
              {/* 공제없음 버튼 클릭! (왼쪽 하단) */}
              <div className="absolute left-[10%] bottom-[13%] bg-white text-black font-semibold rounded-full shadow flex items-center justify-center w-32 h-9 text-xs border border-blue-100 z-10">
                공제없음 버튼 클릭!
              </div>
              {/* 오른쪽 아래: 공제인원이 있음 */}
              <div className="absolute right-[10%] top-[40%] bg-white text-black font-semibold rounded-full shadow-lg flex items-center justify-center w-36 h-10 text-base border border-blue-100 z-10">
                공제인원이 있음
              </div>
              {/* A멤버 술을 안먹은 경우 (공제인원이 있음 바로 아래) */}
              <div className="absolute right-[10%] top-[60%] bg-white text-black font-semibold rounded-full shadow flex items-center justify-center w-40 h-9 text-xs border border-blue-100 z-10 text-center px-2">
                A멤버 술을 안먹은 경우<br/>술 값 30,000원 등록!
              </div>
              {/* B멤버 음식을 안먹은 경우 (A멤버 바로 아래) */}
              <div className="absolute right-[10%] top-[78%] bg-white text-black font-semibold rounded-full shadow flex items-center justify-center w-40 h-9 text-xs border border-blue-100 z-10 text-center px-2">
                B멤버 음식을 안먹은 경우<br/>음식 값 20,000원 등록!
              </div>
              {/* 선(가지) SVG로 연결 */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" width="100%" height="100%">
                {/* 중앙 → 왼쪽 아래 */}
                <line x1="50%" y1="12%" x2="21%" y2="45%" stroke="#93c5fd" strokeWidth="3" />
                {/* 중앙 → 오른쪽 아래 */}
                <line x1="50%" y1="12%" x2="79%" y2="45%" stroke="#93c5fd" strokeWidth="3" />
                {/* 왼쪽 아래 → 왼쪽 하단 (수직, 노드 중앙) */}
                <line x1="25%" y1="50%" x2="25%" y2="80%" stroke="#93c5fd" strokeWidth="3" />
                {/* 오른쪽 아래 → A멤버 (수직) */}
                <line x1="75%" y1="50%" x2="75%" y2="65%" stroke="#93c5fd" strokeWidth="3" />
                {/* A멤버 → B멤버 (수직) */}
                <line x1="75%" y1="70%" x2="75%" y2="85%" stroke="#93c5fd" strokeWidth="3" />
              </svg>
            </div>
          </div>
        </section>

        {/* SEC4: 실시간 소통 (배경색 sec2와 동일) */}
        <section className="w-full py-20" style={{ background: '#4083FA' }}>
          <div className="max-w-5xl mx-auto flex flex-col">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-10 text-center">실시간 소통</h1>
            <div className="flex flex-row items-center justify-between px-12 md:px-32">
              <div className="w-1/2 text-white pr-4 md:pr-12 text-left flex flex-col justify-center">
                <p className="text-2xl md:text-3xl font-bold mb-6">모임원들과<br/>실시간<br/> 소통하세요!</p>
                <p className="text-sm mb-6 text-gray-300">공지사항과 자유로운 대화를<br/>실시간으로 나누세요!</p>
              </div>
              <div className="w-1/2 flex justify-center items-center">
                <img src="/images/onelinetalk.jpg" alt="실시간 소통 미리보기" className="w-96 h-96 object-contain" />
              </div>
            </div>
            <div className="w-full flex justify-center mt-8">
              <p className="text-xs text-white text-center">채팅이 오면 푸쉬알림으로 알려줘요!</p>
            </div>
          </div>
        </section>

        {/* SEC5: 정산흐름 (배경색 sec1과 동일) */}
        <section className="w-full py-20 bg-gray-100">
          <div className="max-w-5xl mx-auto flex flex-col">
            <h1 className="text-3xl md:text-5xl font-extrabold text-blue-600 mb-10 text-center">정산흐름</h1>
            <div className="flex flex-row items-center justify-between px-12 md:px-32">
              <div className="w-1/2 flex justify-center items-center">
                <img src="/images/settlement_list.jpg" alt="정산흐름 미리보기" className="w-96 h-96 object-contain" />
              </div>
              <div className="w-1/2 text-blue-600 pl-4 md:pl-12 text-left flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">정산 흐름을<br/>한 눈에!</h2>
                <p className="text-sm mb-6 text-gray-700">등록 된 영수증 (결제자, 공제 등)<br/>
                    데이터를 기준으로 자동계산해서<br/>
                    누가 누구에게 얼마를 줄 지를<br/>
                    한 눈에 보기 쉽게 표시 됩니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SEC6: 정산요청 (배경색 sec2와 동일) */}
        <section className="w-full py-20" style={{ background: '#4083FA' }}>
          <div className="max-w-5xl mx-auto flex flex-col">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-10 text-center">정산요청</h1>
            <div className="flex flex-row items-center justify-between px-12 md:px-32">
              <div className="w-1/2 text-white pr-4 md:pr-12 text-left flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">정산 요청도<br/>눈치 보지<br/>말고!</h2>
                <p className="text-sm mb-6">정산 요청!<br/>돈 달라고 따로 말하지 말고<br/>클릭 한 번으로 끝!</p>
              </div>
              <div className="w-1/2 flex justify-center items-center">
                <img src="/images/settlement_req.jpg" alt="정산요청 미리보기" className="w-96 h-96 object-contain" />
              </div>
            </div>
            <div className="w-full flex justify-center mt-6 md:mt-12">
              <p className="text-xs text-white text-center">받아야 할 금액이 있다면 해당 멤버들에게 푸쉬 알림이 전송됩니다.</p>
            </div>
          </div>
        </section>
    </main>
  );
}
