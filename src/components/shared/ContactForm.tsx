"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Send } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  guests: string;
  message: string;
}

const INITIAL_FORM: FormData = {
  firstName: "",
  lastName: "",
  mobile: "",
  email: "",
  guests: "",
  message: "",
};

interface ContactFormProps {
  title?: string;
}

export function ContactForm({ title = "Get in Touch With Us" }: ContactFormProps) {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission delay
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-amber-50 border border-amber-200 rounded-2xl p-10 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
          <Send className="w-7 h-7 text-amber-600" />
        </div>
        <h3 className="text-xl font-bold text-stone-800 mb-2">Message Sent!</h3>
        <p className="text-stone-600 text-sm">
          Thank you for reaching out. We&apos;ll get back to you as soon as possible.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm(INITIAL_FORM); }}
          className="mt-6 text-sm text-amber-600 hover:text-amber-700 font-semibold underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8"
    >
      <motion.h3 variants={fadeInUp} className="text-xl font-bold text-stone-800 mb-6">
        {title}
      </motion.h3>

      <motion.div variants={fadeInUp} className="space-y-4">
        {/* Name Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-stone-200 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all placeholder-stone-400"
              placeholder="John"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-stone-200 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all placeholder-stone-400"
              placeholder="Doe"
            />
          </div>
        </div>

        {/* Mobile */}
        <div>
          <label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-stone-200 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all placeholder-stone-400"
            placeholder="+971 50 000 0000"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-stone-200 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all placeholder-stone-400"
            placeholder="john@example.com"
          />
        </div>

        {/* Guests */}
        <div>
          <label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide">
            Number of Guests <span className="text-red-500">*</span>
          </label>
          <select
            name="guests"
            value={form.guests}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-stone-200 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all bg-white"
          >
            <option value="">Select number of guests</option>
            {["1-10", "11-25", "26-50", "51-100", "101-250", "250+"].map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide">
            Comment or Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-stone-200 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all resize-none placeholder-stone-400"
            placeholder="Tell us about your event..."
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 disabled:opacity-60 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-200"
        >
          {loading ? (
            <>
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending…
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Submit
            </>
          )}
        </button>
      </motion.div>
    </motion.div>
  );
}
