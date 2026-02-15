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
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-tight text-text-main">
            Contact
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-text-secondary">
            For strategic inquiries, partnership discussions, and institutional
            engagement.
          </p>
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="mx-auto max-w-lg">
          <div className="space-y-8 text-center">
            <div>
              <p className="font-mono text-[0.85rem] font-medium uppercase tracking-[0.05em] text-text-tertiary">
                Location
              </p>
              <p className="mt-2 text-lg text-text-secondary">
                Geneva, Switzerland
              </p>
            </div>
            <div>
              <p className="font-mono text-[0.85rem] font-medium uppercase tracking-[0.05em] text-text-tertiary">
                General Inquiries
              </p>
              <p className="mt-2 text-lg text-text-secondary">
                info@butterfly.one
              </p>
            </div>
            <div>
              <p className="font-mono text-[0.85rem] font-medium uppercase tracking-[0.05em] text-text-tertiary">
                Strategic Partnerships
              </p>
              <p className="mt-2 text-lg text-text-secondary">
                partners@butterfly.one
              </p>
            </div>
            <div>
              <p className="font-mono text-[0.85rem] font-medium uppercase tracking-[0.05em] text-text-tertiary">
                Press
              </p>
              <p className="mt-2 text-lg text-text-secondary">
                press@butterfly.one
              </p>
            </div>
          </div>

          {/* Inquiry form */}
          <form className="mt-16 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-text-secondary"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded-lg border border-surface-border bg-white px-4 py-3 text-sm text-text-main outline-none transition-all duration-200 focus:border-text-tertiary focus:shadow-[0_0_0_3px_rgba(0,0,0,0.04)]"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-text-secondary"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded-lg border border-surface-border bg-white px-4 py-3 text-sm text-text-main outline-none transition-all duration-200 focus:border-text-tertiary focus:shadow-[0_0_0_3px_rgba(0,0,0,0.04)]"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="mb-1.5 block text-sm font-medium text-text-secondary"
              >
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full rounded-lg border border-surface-border bg-white px-4 py-3 text-sm text-text-main outline-none transition-all duration-200 focus:border-text-tertiary focus:shadow-[0_0_0_3px_rgba(0,0,0,0.04)]"
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
                className="mb-1.5 block text-sm font-medium text-text-secondary"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-lg border border-surface-border bg-white px-4 py-3 text-sm text-text-main outline-none transition-all duration-200 focus:border-text-tertiary focus:shadow-[0_0_0_3px_rgba(0,0,0,0.04)]"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg border border-text-main bg-text-main py-4 px-8 text-base font-semibold text-white transition-all duration-200 hover:bg-[#333]"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </Section>
    </>
  );
}
