'use client'
import { useState } from 'react'

export default function Track() {
  const [orderId, setOrderId] = useState('')
  const [order, setOrder] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const search = async () => {
    if (!orderId) { alert('অর্ডার ID দিন'); return }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/orders')
      const orders = await res.json()
      const found = orders.find((o: any) => o.id === orderId)
      if (found) setOrder(found)
      else setError('অর্ডার পাওয়া যায়নি')
    } catch { setError('সমস্যা হয়েছে') }
    setLoading(false)
  }

  const statusText: any = {
    pending: '⏳ অপেক্ষমান',
    confirmed: '✅ কনফার্ম হয়েছে',
    shipped: '🚚 পাঠানো হয়েছে',
    delivered: '✅ ডেলিভারি সম্পন্ন'
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-green-600">অর্ডার ট্র্যাক করুন</h1>
        <input
          className="w-full border p-3 rounded mb-4"
          placeholder="অর্ডার ID দিন"
          value={orderId}
          onChange={e => setOrderId(e.target.value)}
        />
        <button
          onClick={search}
          disabled={loading}
          className="w-full bg-green-600 text-white py-3 rounded-lg font-bold mb-4"
        >
          {loading ? 'খোঁজা হচ্ছে...' : 'ট্র্যাক করুন'}
        </button>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {order && (
          <div className="mt-4 p-4 bg-green-50 rounded-lg">
            <p className="font-bold text-xl mb-2">{statusText[order.status]}</p>
            <p><strong>নাম:</strong> {order.name}</p>
            <p><strong>ফোন:</strong> {order.phone}</p>
            <p><strong>জেলা:</strong> {order.district}</p>
            <p><strong>মোট:</strong> ৳{order.total}</p>
            <p><strong>পেমেন্ট:</strong> {order.payment}</p>
          </div>
        )}
        <p className="text-center mt-4 text-sm text-gray-500">
          সমস্যা? WhatsApp: 01834828845
        </p>
      </div>
    </div>
  )
}
