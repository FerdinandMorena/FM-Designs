"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Send, AlertCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Tell us a little more about your project"),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setStatus("loading");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone || "Not provided",
          budget: data.budget || "Not provided",
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      setStatus("success");
      reset();
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-[var(--border-soft)] bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-[var(--foreground)]/40 focus:border-[var(--color-accent)]";

  return (
    <div className="glass relative overflow-hidden rounded-3xl p-7 sm:p-9">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-14 text-center"
          >
            <CheckCircle2 size={40} className="text-[var(--color-accent)]" />
            <h3 className="mt-4 text-lg font-bold">Message sent</h3>
            <p className="mt-2 max-w-xs text-sm text-[var(--foreground)]/65">
              Thanks for reaching out — we&apos;ll reply within one business day.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 text-xs font-semibold text-[var(--color-accent)]"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-medium">
                  Full name
                </label>
                <input id="name" className={inputClass} placeholder="Jane Doe" {...register("name")} />
                {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-medium">
                  Email
                </label>
                <input id="email" type="email" className={inputClass} placeholder="jane@company.com" {...register("email")} />
                {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-xs font-medium">
                  Phone (optional)
                </label>
                <input id="phone" className={inputClass} placeholder="+27 82 000 0000" {...register("phone")} />
              </div>
              <div>
                <label htmlFor="budget" className="mb-1.5 block text-xs font-medium">
                  Estimated budget (optional)
                </label>
                <input id="budget" className={inputClass} placeholder="R5,000 – R15,000" {...register("budget")} />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium">
                Project details
              </label>
              <textarea
                id="message"
                rows={5}
                className={inputClass}
                placeholder="Tell us about your business and what you need the site to do..."
                {...register("message")}
              />
              {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message.message}</p>}
            </div>

            {status === "error" && (
              <p className="flex items-center gap-2 text-xs text-red-400">
                <AlertCircle size={14} />
                Something went wrong sending your message — please try again, or email us directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-7 py-3.5 text-sm font-semibold text-white transition-opacity disabled:opacity-70"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={15} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={14} className="transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
