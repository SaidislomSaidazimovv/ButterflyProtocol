import type { Metadata } from "next";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            Contact
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-500">
            For strategic inquiries, partnership discussions, and institutional
            engagement.
          </p>
        </div>
      </Section>

      <Section className="bg-neutral-50">
        <div className="mx-auto max-w-lg">
          <div className="space-y-8 text-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                Location
              </p>
              <p className="mt-2 text-lg text-neutral-700">
                Geneva, Switzerland
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                General Inquiries
              </p>
              <p className="mt-2 text-lg text-neutral-700">
                info@butterfly.one
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                Strategic Partnerships
              </p>
              <p className="mt-2 text-lg text-neutral-700">
                partners@butterfly.one
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                Press
              </p>
              <p className="mt-2 text-lg text-neutral-700">
                press@butterfly.one
              </p>
            </div>
          </div>

          {/* Inquiry form */}
          <form className="mt-16 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-neutral-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-all duration-200 focus:border-neutral-400 focus:shadow-[0_0_0_3px_rgba(0,0,0,0.04)]"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-neutral-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-all duration-200 focus:border-neutral-400 focus:shadow-[0_0_0_3px_rgba(0,0,0,0.04)]"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="mb-1.5 block text-sm font-medium text-neutral-700"
              >
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-all duration-200 focus:border-neutral-400 focus:shadow-[0_0_0_3px_rgba(0,0,0,0.04)]"
              >
                <option value="">Select an inquiry type</option>
                <option value="partnership">Strategic Partnership</option>
                <option value="institutional">Institutional Engagement</option>
                <option value="press">Press Inquiry</option>
                <option value="general">General</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-neutral-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-all duration-200 focus:border-neutral-400 focus:shadow-[0_0_0_3px_rgba(0,0,0,0.04)]"
              />
            </div>
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center rounded-full bg-neutral-900 px-6 text-sm font-medium text-white transition-all duration-200 hover:bg-neutral-800"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </Section>
    </>
  );
}
