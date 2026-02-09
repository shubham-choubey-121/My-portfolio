"use client";
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Send,
  Instagram,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 🔒 extra safety validation
    if (
      !formState.name.trim() ||
      !formState.email.trim() ||
      !formState.message.trim()
    ) {
      alert("Please fill all fields properly");
      return;
    }

    if (loading) return;

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      // ✅ success
      setSubmitted(true);

      // ⏱ 5 sec baad form wapas
      setTimeout(() => {
        setFormState({ name: "", email: "", message: "" });
        setSubmitted(false);
      }, 5000);
    } catch (error: any) {
      alert(error.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-[#1a202c] dark:to-[#0f172a]"
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-12">
          <div>
            <h2 className="text-4xl font-extrabold mb-2 text-gray-900 dark:text-white">
              Get In Touch
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-400 text-lg mt-4">
              I'm always interested in hearing about new projects and opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* LEFT */}
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Email
                  </h3>
                  <a
                    href="mailto:shubhamchoubey393@gmail.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    shubhamchoubey393@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Contact Number
                  </h3>
                  <a
                    href="tel:+917202979172"
                    className="text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    +91 7202979172
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Vapi, Gujarat, India
                  </p>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Connect With Me
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/shubhamchoubeyx"
                    target="_blank"
                    className="social-btn text-blue-600 dark:text-blue-400"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/shubham-choubey-121"
                    target="_blank"
                    className="social-btn text-gray-700 dark:text-gray-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://instagram.com/shubham_choubey_121"
                    target="_blank"
                    className="social-btn text-pink-500"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://wa.me/917202979172"
                    target="_blank"
                    className="social-btn text-green-500"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="bg-white dark:bg-[#0f172a] p-8 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg">
              {submitted ? (
                <div className="text-center py-16">
                  <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">
                    Thank you for submitting! 🙌
                  </h3>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    I’ll get back to you very soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-[#1e293b] text-gray-900 dark:text-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-[#1e293b] text-gray-900 dark:text-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-[#1e293b] text-gray-900 dark:text-white resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    <Send className="w-4 h-4" />
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
