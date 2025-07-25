'use client';
export const dynamic = "force-dynamic";
import React, { useState } from "react";
import { getSupabase } from '@/utils/supabaseClient';

export default function ContactPage() {
  const supabase = getSupabase();
  const [form, setForm] = useState({ title: '', email: '', content: '' });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    const { error } = await supabase.from('questions').insert([form]);
    setLoading(false);
    if (error) setError('문의 접수에 실패했습니다. 다시 시도해 주세요.');
    else {
      setSuccess(true);
      setForm({ title: '', email: '', content: '' });
    }
  };

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-start py-20 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-blue-600">문의하기</h1>
      <p className="mb-6 text-gray-700">궁금한 점이나 불편한 점이 있으시면 언제든 문의해 주세요.</p>
      <form className="w-full max-w-md bg-gray-50 rounded-xl shadow p-6 flex flex-col gap-4" onSubmit={handleSubmit}>
        <label className="text-sm font-semibold text-gray-700">제목
          <input type="text" name="title" value={form.title} onChange={handleChange} className="mt-1 w-full border border-gray-300 rounded px-3 py-2" placeholder="제목을 입력하세요" required />
        </label>
        <label className="text-sm font-semibold text-gray-700">이메일
          <input type="email" name="email" value={form.email} onChange={handleChange} className="mt-1 w-full border border-gray-300 rounded px-3 py-2" placeholder="이메일을 입력하세요" required />
        </label>
        <label className="text-sm font-semibold text-gray-700">문의 내용
          <textarea name="content" value={form.content} onChange={handleChange} className="mt-1 w-full border border-gray-300 rounded px-3 py-2 min-h-[100px]" placeholder="문의 내용을 입력하세요" required />
        </label>
        <button type="submit" className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition" disabled={loading}>{loading ? '전송 중...' : '문의 보내기'}</button>
        {success && <div className="text-green-600 font-bold mt-2">문의가 정상적으로 접수되었습니다!</div>}
        {error && <div className="text-red-600 font-bold mt-2">{error}</div>}
      </form>
    </main>
  );
} 