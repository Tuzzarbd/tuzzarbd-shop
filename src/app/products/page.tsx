'use client'
import { useState } from 'react'

export default function AdminProducts() {
  const [form, setForm] = useState({ name: '', price: '', category: '', stock: '', description: '', image: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const submit = async () => {
    if (!form.name || !form.price) { alert('নাম ও দাম দিন'); return }
    setLoading(true)
    try {
      await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          price: parseFloat(form.price),
          category: form.category,
          stock: parseInt(form.stock) || 0,
          description: form.description,
          image: form.image
        })
      })
      setSuccess(true)
      setForm({ name: '', price: '', category: '', stock: '', description: '', image: '' })
      setTimeout(() => setSuccess(false), 3000)
    } catch { alert('সমস্যা হয়েছে') }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6 text-green-600">নতুন পণ্য যোগ করুন</h1>
        {success && <p className="text-green-600 bg-green-50 p-3 rounded mb-4">✅ পণ্য সফলভাবে যোগ হয়েছে!</p>}
        <input className="w-full border p-3 rounded mb-3" placeholder="পণ্যের নাম *" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
        <input className="w-full border p-3 rounded mb-3" placeholder="দাম (টাকা) *" value={form.price} onChange={e => setForm({...form, price: e.target.value})} />
        <input className="w-full border p-3 rounded mb-3" placeholder="ক্যাটাগরি" value={form.category} onChange={e => setForm({...form, category: e.target.value})} />
        <input className="w-full border p-3 rounded mb-3" placeholder="স্টক সংখ্যা" value={form.stock} onChange={e => setForm({...form, stock: e.target.value})} />
        <input className="w-full border p-3 rounded mb-3" placeholder="ছবির URL" value={form.image} onChange={e => setForm({...form, image: e.target.value})} />
        <textarea className="w-full border p-3 rounded mb-4" placeholder="পণ্যের বিবরণ" value={form.description} onChange={e => setForm({...form, description: e.target.value})} />
        <button onClick={submit} disabled={loading} className="w-full bg-green-600 text-white py-3 rounded-lg font-bold text-lg">
          {loading ? 'যোগ হচ্ছে...' : 'পণ্য যোগ করুন'}
        </button>
      </div>
    </div>
  )
    }
