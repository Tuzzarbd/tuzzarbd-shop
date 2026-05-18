import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="bg-green-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tuzzarbd</h1>
        <Link href="/track" className="bg-white text-green-600 px-4 py-2 rounded">অর্ডার ট্র্যাক</Link>
      </nav>

      <div className="bg-green-500 text-white text-center py-20 px-4">
        <h2 className="text-4xl font-bold mb-4">স্বাগতম Tuzzarbd তে!</h2>
        <p className="text-xl mb-8">সেরা পণ্য, সেরা দামে — দ্রুত ডেলিভারি</p>
        <Link href="/checkout" className="bg-white text-green-600 px-8 py-3 rounded-full text-lg font-bold">এখনই কিনুন</Link>
      </div>

      <div className="max-w-6xl mx-auto p-8">
        <h3 className="text-2xl font-bold mb-6 text-center">ক্যাটাগরি</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['ইলেকট্রনিক্স','পোশাক','গৃহস্থালি','সৌন্দর্য'].map((cat) => (
            <div key={cat} className="bg-white rounded-lg p-6 text-center shadow hover:shadow-lg cursor-pointer">
              <p className="font-bold text-lg">{cat}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-green-600 text-white text-center p-6 mt-8">
        <p>WhatsApp: 01834828845 | ঢাকা ৳৮০, বাইরে ৳১৫০</p>
      </footer>
    </main>
  )
}
