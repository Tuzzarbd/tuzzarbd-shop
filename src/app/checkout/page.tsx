'use client'
import { useState } from 'react'

const districts = ['ঢাকা','চট্টগ্রাম','সিলেট','রাজশাহী','খুলনা','বরিশাল','রংপুর','ময়মনসিংহ','কুমিল্লা','নারায়ণগঞ্জ','গাজীপুর','টাঙ্গাইল','ফরিদপুর','মাদারীপুর','শরীয়তপুর','রাজবাড়ী','গোপালগঞ্জ','কিশোরগঞ্জ','মানিকগঞ্জ','মুন্সিগঞ্জ','নরসিংদী','নেত্রকোণা','জামালপুর','শেরপুর','ব্রাহ্মণবাড়িয়া','চাঁদপুর','লক্ষ্মীপুর','নোয়াখালী','ফেনী','খাগড়াছড়ি','রাঙ্গামাটি','বান্দরবান','কক্সবাজার','হবিগঞ্জ','মৌলভীবাজার','সুনামগঞ্জ','নাটোর','নওগাঁ','চাঁপাইনবাবগঞ্জ','পাবনা','সিরাজগঞ্জ','বগুড়া','জয়পুরহাট','কুষ্টিয়া','মেহেরপুর','চুয়াডাঙ্গা','ঝিনাইদহ','মাগুরা','নড়াইল','যশোর','সাতক্ষীরা','বাগেরহাট','পিরোজপুর','ঝালকাঠি','পটুয়াখালী','বরগুনা','ভোলা','লালমনিরহাট','নীলফামারী','কুড়িগ্রাম','গাইবান্ধা','ঠাকুরগাঁও','পঞ্চগড়','দিনাজপুর']

export default function Checkout() {
  const [form, setForm] = useState({ name: '', phone: '', address: '', district: 'ঢাকা', payment: 'bkash' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')

  const handleSubmit = async () => {
    if (!form.name || !form.phone || !form.address) {
      alert('সব তথ্য পূরণ করুন')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, total: 0, items: [] })
      })
      const data = await res.json()
      setSuccess(data.id)
    } catch {
      alert('সমস্যা হয়েছে, আবার চেষ্টা করুন')
    }
    setLoading(false)
  }

  if (success) return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">✅ অর্ডার সফল!</h2>
        <p className="mb-2">অর্ডার ID: <strong>{success}</strong></p>
        <p className="mb-4">WhatsApp করুন: <strong>01834828845</strong></p>
        <p className="text-sm text-gray-500">শিপিং: ঢাকা ৳৮০, বাইরে ৳১৫০</p>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-green-600">অর্ডার করুন</h1>
        <input className="w-full border p-3 rounded mb-4" placeholder="আপনার নাম" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
        <input className="w-full border p-3 rounded mb-4" placeholder="ফোন নম্বর" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
        <textarea className="w-full border p-3 rounded mb-4" placeholder="সম্পূর্ণ ঠিকানা" value={form.address} onChange={e => setForm({...form, address: e.target.value})} />
        <select className="w-full border p-3 rounded mb-4" value={form.district} onChange={e => setForm({...form, district: e.target.value})}>
          {districts.map(d => <option key={d} value={d}>{d}</option>)}
        </select>
        <select className="w-full border p-3 rounded mb-6" value={form.payment} onChange={e => setForm({...form, payment: e.target.value})}>
          <option value="bkash">bKash - 01834828845</option>
          <option value="nagad">Nagad - 01834828845</option>
          <option value="cod">ক্যাশ অন ডেলিভারি</option>
        </select>
        <button onClick={handleSubmit} disabled={loading} className="w-full bg-green-600 text-white py-3 rounded-lg font-bold text-lg">
          {loading ? 'অপেক্ষা করুন...' : 'অর্ডার কনফার্ম করুন'}
        </button>
      </div>
    </div>
  )
}
