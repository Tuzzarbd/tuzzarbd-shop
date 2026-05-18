'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Admin() {
  const [orders, setOrders] = useState([])
  const [pass, setPass] = useState('')
  const [auth, setAuth] = useState(false)
  const [error, setError] = useState('')

  const login = () => {
    if (pass === 'Tuzzarbd@Admin2024') setAuth(true)
    else alert('ভুল পাসওয়ার্ড')
  }

  useEffect(() => {
    if (auth) {
      fetch('/api/orders')
        .then(r => {
          if (!r.ok) throw new Error('API error')
          return r.json()
        })
        .then(setOrders)
        .catch(e => setError('Orders load হয়নি: ' + e.message))
    }
  }, [auth])

  if (!auth) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow w-80">
        <h1 className="text-2xl font-bold mb-6 text-center text-green-600">Admin Login</h1>
        <input
          type="password"
          className="w-full border p-3 rounded mb-4"
          placeholder="পাসওয়ার্ড দিন"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button onClick={login} className="w-full bg-green-600 text-white py-3 rounded-lg font-bold">
          লগইন
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <Link href="/admin/products" className="bg-green-600 text-white px-4 py-2 rounded">
            পণ্য যোগ করুন
          </Link>
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-bold mb-4">সকল অর্ডার ({orders.length})</h2>
          {orders.length === 0 && <p className="text-gray-500">কোনো অর্ডার নেই</p>}
          {orders.map((o: any) => (
            <div key={o.id} className="border-b py-3">
              <p className="font-bold">{o.name} — {o.phone}</p>
              <p>{o.district} | ৳{o.total} | {o.payment}</p>
              <p className="text-sm text-gray-500">স্ট্যাটাস: {o.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
