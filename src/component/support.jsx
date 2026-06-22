import React, { useState } from "react";

const Support = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [submissions, setSubmissions] = useState([]);

  const faqData = [
    {
      q: "How do I reset my password?",
      a: "Go to settings → account → reset password.",
    },
    {
      q: "How long does support take?",
      a: "We usually respond within 1–24 hours.",
    },
    {
      q: "Can I change my email later?",
      a: "Yes, you can update it anytime in settings.",
    },
  ];

  const email = "joyofonime70@gmail.com";
  const phone = "+234 703 365 4032";

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ SINGLE CLEAN HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newSubmission = {
      id: Date.now(),
      ...formData,
      createdAt: new Date().toISOString(),
    };

    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/send-support", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("Message sent successfully 🚀");

        // save locally
        setSubmissions((prev) => [...prev, newSubmission]);

        // clear form
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        alert("Failed to send message ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Server error ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-400/20 blur-[120px] rounded-full animate-pulse" />
      </div>

      {/* HERO */}
      <section className="px-6 md:px-20 pt-24 pb-10">
        <h1 className="text-5xl md:text-7xl font-bold">
          Support <span className="text-blue-500">Center</span>
        </h1>
        <p className="text-gray-400 mt-4 max-w-xl">
          Get help or contact us instantly.
        </p>
      </section>

      {/* CARDS */}
      <section className="px-6 md:px-20 pb-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div
            onClick={() => setActiveModal("faq")}
            className="cursor-pointer bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-blue-500 hover:-translate-y-2 transition"
          >
            <h3 className="text-blue-500 font-bold text-xl">FAQ</h3>
            <p className="text-gray-400 mt-2">Frequently Asked Questions</p>
          </div>

          <div
            onClick={() => setActiveModal("email")}
            className="cursor-pointer bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-blue-400 hover:-translate-y-2 transition"
          >
            <h3 className="text-blue-400 font-bold text-xl">Email</h3>
            <p className="text-gray-400 mt-2">Contact us Via Email</p>
          </div>

          <div
            onClick={() => setActiveModal("phone")}
            className="cursor-pointer bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-blue-500 hover:-translate-y-2 transition"
          >
            <h3 className="text-blue-500 font-bold text-xl">Phone</h3>
            <p className="text-gray-400 mt-2">Contact us Via Phone</p>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="px-6 md:px-20 pb-24">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
          <h2 className="text-3xl font-bold mb-6">Contact Support</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Full Name"
              className="w-full p-4 rounded-2xl bg-black/60 border border-white/10"
            />

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Phone Number"
              className="w-full p-4 rounded-2xl bg-black/60 border border-white/10"
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="w-full p-4 rounded-2xl bg-black/60 border border-white/10"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Message"
              className="w-full p-4 rounded-2xl bg-black/60 border border-white/10"
            />

            <button
              type="submit"
              disabled={
                loading ||
                !formData.email ||
                !formData.message ||
                !formData.name ||
                !formData.phone
              }
              className="w-full py-4 disabled:cursor-not-allowed disabled:opacity-50 rounded-2xl bg-linear-to-r from-blue-600 to-blue-400 text-black font-bold"
            >
              {loading ? "Sending message" : "Send Message"}
            </button>
          </form>
        </div>
      </section>

      {/* MODALS */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="w-[80%] max-h-[80vh] overflow-y-auto bg-black border border-white/10 rounded-3xl p-8 relative">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-6 text-white text-xl"
            >
              ✕
            </button>

            {activeModal === "faq" && (
              <div>
                <h2 className="text-blue-500 text-2xl font-bold mb-6">FAQs</h2>
                {faqData.map((f, i) => (
                  <div
                    key={i}
                    className="mb-4 p-4 border border-white/10 rounded-xl"
                  >
                    <p className="font-bold">{f.q}</p>
                    <p className="text-gray-400">{f.a}</p>
                  </div>
                ))}
              </div>
            )}

            {activeModal === "email" && (
              <div className="text-center">
                <h2 className="text-blue-400 text-2xl font-bold">
                  Support Email
                </h2>
                <p className="mt-6">{email}</p>
                <button
                  onClick={() => copyToClipboard(email)}
                  className="mt-4 px-6 py-2 bg-blue-400 text-black rounded-xl"
                >
                  Copy
                </button>
              </div>
            )}

            {activeModal === "phone" && (
              <div className="text-center">
                <h2 className="text-blue-500 text-2xl font-bold">Phone</h2>
                <p className="mt-6">{phone}</p>
                <button
                  onClick={() => copyToClipboard(phone)}
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl"
                >
                  Copy
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* COPIED TOAST */}
      {copied && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-blue-400 text-black px-6 py-2 rounded-xl font-bold">
          Copied!
        </div>
      )}
    </div>
  );
};

export default Support;
