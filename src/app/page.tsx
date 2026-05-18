export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#1a1a2e",
      color: "white",
      fontFamily: "sans-serif",
      textAlign: "center",
      padding: "20px"
    }}>
      <div style={{
        background: "#f97316",
        width: "80px",
        height: "80px",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "40px",
        marginBottom: "24px"
      }}>🛍️</div>
      <h1 style={{fontSize: "3rem", fontWeight: "bold", marginBottom: "16px"}}>
        tuzzarbd
      </h1>
      <p style={{fontSize: "1.2rem", color: "#f97316", marginBottom: "8px"}}>
        বাংলাদেশের প্রিমিয়াম অনলাইন শপ
      </p>
      <p style={{color: "#888", marginBottom: "32px"}}>
        ফ্যাশন • স্মার্ট গ্যাজেট • বিউটি কেয়ার
      </p>
      <p style={{
        background: "#f97316",
        padding: "12px 24px",
        borderRadius: "12px",
        fontWeight: "bold"
      }}>
        শীঘ্রই আসছে! 🚀
      </p>
    </main>
  )
}
