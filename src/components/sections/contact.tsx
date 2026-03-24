'use client';

import { motion } from 'framer-motion';

const MailIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export default function Contact() {
  return (
    <section className="relative py-12 md:py-16 bg-white" id="contact">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          className="mb-12"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            I&apos;m looking for the right next thing.
          </h2>
          <p className="text-gray-500 text-sm mt-2 max-w-xl">
            Five years in, I know what good engineering looks like. If you&apos;re building something serious on Flutter, Android or iOS, let&apos;s talk.
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-gray-50 border border-black/10 p-8">
            <div className="space-y-6">
              <a
                href="mailto:abhishek.gupta.890113@gmail.com"
                className="flex items-center gap-4 text-gray-600 hover:text-black transition-colors group"
              >
                <div className="w-10 h-10 bg-white border border-black/10 flex items-center justify-center group-hover:border-black/30 transition-colors">
                  <MailIcon />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Email</p>
                  <p className="text-sm font-medium">abhishek.gupta.890113@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+919958484437"
                className="flex items-center gap-4 text-gray-600 hover:text-black transition-colors group"
              >
                <div className="w-10 h-10 bg-white border border-black/10 flex items-center justify-center group-hover:border-black/30 transition-colors">
                  <PhoneIcon />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Phone</p>
                  <p className="text-sm font-medium">+91 99584 84437</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-gray-600">
                <div className="w-10 h-10 bg-white border border-black/10 flex items-center justify-center">
                  <MapPinIcon />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Location</p>
                  <p className="text-sm font-medium">New Delhi, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-black/10">
              <a
                href="mailto:abhishek.gupta.890113@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Start a conversation →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
