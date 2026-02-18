import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    ShieldCheck, LockKeyhole, FileText, Link2, ServerCog, 
    EyeOff, Fingerprint, ChevronRight, Award, 
    Building2, Landmark, Activity, Briefcase,
    TerminalSquare, Cpu, ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';

// --- COMPOSANT : FOND ANIMÉ AVEC ICÔNES ---
const FloatingBackground = () => {
    const icons = [ShieldCheck, LockKeyhole, FileText, Link2, ServerCog];
    
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-orange-400/10 blur-[120px]" />
            <div className="absolute bottom-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-amber-500/10 blur-[100px]" />
            <div className="absolute top-[40%] left-[40%] w-[30vw] h-[30vw] rounded-full bg-orange-300/10 blur-[80px]" />

            {[...Array(8)].map((_, i) => {
                const Icon = icons[i % icons.length];
                return (
                    <motion.div
                        key={i}
                        className="absolute text-orange-900/5"
                        initial={{ 
                            x: Math.random() * window.innerWidth, 
                            y: Math.random() * window.innerHeight,
                            rotate: 0,
                            scale: Math.random() * 0.5 + 0.5
                        }}
                        animate={{ 
                            y: [null, Math.random() * -100 - 50],
                            x: [null, Math.random() * 100 - 50],
                            rotate: 360
                        }}
                        transition={{ 
                            duration: Math.random() * 20 + 20, 
                            repeat: Infinity, 
                            repeatType: "reverse",
                            ease: "linear"
                        }}
                    >
                        <Icon size={Math.random() * 100 + 50} strokeWidth={1} />
                    </motion.div>
                );
            })}
        </div>
    );
};

// --- DATA FAQ (MISE À JOUR ICES / API) ---
const faqs = [
    {
        question: "Does the recipient need to create an account to view the file?",
        answer: "No. The SecureLink generates an ephemeral, cryptographically signed token. The recipient simply clicks the link and views the document in our isolated browser sandbox without any friction."
    },
    {
        question: "How does the email interception work?",
        answer: "We do not require any changes to your MX records or email routing. SecureLink uses API-driven Cloud Email Security (ICES). We connect directly to your Microsoft 365 or Google Workspace via OAuth, listening for incoming attachments via Graph API or Workspace API to secure them in real-time."
    },
    {
        question: "Where are the files actually stored?",
        answer: "You choose. We support fully sovereign on-premise deployments or secure localized cloud buckets (AWS/GCP/Azure). The files never leave your legal jurisdiction."
    },
    {
        question: "What happens if a malicious macro is detected?",
        answer: "The sandbox neutralizes the threat by flattening the document (e.g., converting a macro-enabled Excel into a safe, view-only PDF equivalent) or blocking it entirely based on your organization's security policy."
    }
];

// --- ANIMATIONS ---
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function SecureLinkPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0); 

    return (
        <div className="min-h-screen bg-[#faf9f6] text-stone-900 font-sans selection:bg-orange-200 overflow-x-hidden relative">
            
            <FloatingBackground />

            {/* --- HEADER --- */}
            <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-center items-center backdrop-blur-md bg-white/30 border-b border-white/50">
                <div className="flex items-center gap-2 font-extrabold text-2xl tracking-tighter text-stone-900">
                    <ShieldCheck className="w-7 h-7 text-orange-500" />
                    <span>SecureLink</span>
                </div>
            </header>

            {/* --- HERO SECTION --- */}
            <section className="relative z-10 pt-40 pb-16 px-6 flex flex-col items-center text-center max-w-5xl mx-auto justify-center">
                <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-orange-200 shadow-sm mb-8 backdrop-blur-md">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                        </span>
                        <span className="text-xs font-bold text-orange-700 tracking-widest uppercase">Zero-Trust Architecture</span>
                    </div>
                </motion.div>
                
                <motion.h1 
                    initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-[1.1] text-stone-900"
                >
                    The smartest way to <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-600">
                        share corporate files.
                    </span>
                </motion.h1>
                
                <motion.p 
                    initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl text-stone-500 max-w-2xl mx-auto font-light leading-relaxed mb-12"
                >
                    We intercept, sanitize, and encrypt attachments on the fly. Experience military-grade governance with the simplicity of a single link.
                </motion.p>
            </section>

            {/* --- TRUSTED BY --- */}
            <section className="relative z-10 pb-24 px-6 border-b border-stone-200/50">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.p 
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                        className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-8"
                    >
                        Trusted by industry leaders
                    </motion.p>
                    <motion.div 
                        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
                    >
                        <motion.div variants={fadeInUp} className="flex items-center gap-2 font-bold text-xl text-stone-800"><Landmark className="w-6 h-6" /> VaultBank</motion.div>
                        <motion.div variants={fadeInUp} className="flex items-center gap-2 font-bold text-xl text-stone-800"><Activity className="w-6 h-6" /> Aegis Health</motion.div>
                        <motion.div variants={fadeInUp} className="flex items-center gap-2 font-bold text-xl text-stone-800"><Building2 className="w-6 h-6" /> Nexus Logistics</motion.div>
                        <motion.div variants={fadeInUp} className="flex items-center gap-2 font-bold text-xl text-stone-800"><Briefcase className="w-6 h-6" /> Zenith Legal</motion.div>
                    </motion.div>
                </div>
            </section>

            {/* --- PIPELINE --- */}
            <section className="relative z-10 py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-20">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">How it works</h2>
                        <p className="text-stone-500">A seamless, invisible pipeline protecting your data.</p>
                    </motion.div>

                    <motion.div 
                        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0"
                    >
                        <motion.div variants={fadeInUp} className="flex flex-col items-center text-center z-10 w-full md:w-1/4">
                            <div className="w-24 h-24 rounded-3xl bg-white shadow-xl shadow-orange-900/5 border border-white/50 flex items-center justify-center mb-6 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-orange-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <FileText className="w-10 h-10 text-stone-700 relative z-10" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">1. Intercept</h3>
                            <p className="text-sm text-stone-500">Attachment is caught via Native API.</p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="hidden md:block text-orange-300"><ChevronRight className="w-8 h-8" /></motion.div>

                        <motion.div variants={fadeInUp} className="flex flex-col items-center text-center z-10 w-full md:w-1/4">
                            <div className="w-24 h-24 rounded-3xl bg-white shadow-xl shadow-orange-900/5 border border-white/50 flex items-center justify-center mb-6 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-orange-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <ServerCog className="w-10 h-10 text-orange-500 relative z-10" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">2. Sanitize</h3>
                            <p className="text-sm text-stone-500">Malicious payloads are neutralized instantly.</p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="hidden md:block text-orange-300"><ChevronRight className="w-8 h-8" /></motion.div>

                        <motion.div variants={fadeInUp} className="flex flex-col items-center text-center z-10 w-full md:w-1/4">
                            <div className="w-24 h-24 rounded-3xl bg-white shadow-xl shadow-orange-900/5 border border-white/50 flex items-center justify-center mb-6 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-orange-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <LockKeyhole className="w-10 h-10 text-stone-700 relative z-10" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">3. Encrypt</h3>
                            <p className="text-sm text-stone-500">Secured with rotating AES-256 keys.</p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="hidden md:block text-orange-300"><ChevronRight className="w-8 h-8" /></motion.div>

                        <motion.div variants={fadeInUp} className="flex flex-col items-center text-center z-10 w-full md:w-1/4">
                            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-orange-400 to-amber-600 shadow-xl shadow-orange-500/20 flex items-center justify-center mb-6 relative overflow-hidden group">
                                <Link2 className="w-10 h-10 text-white relative z-10" />
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-orange-600">4. Deliver</h3>
                            <p className="text-sm text-stone-500">Recipient gets a safe, trackable SecureLink.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* --- FEATURES BENTO GRID --- */}
            <section className="relative z-10 py-12 px-6">
                 <div className="max-w-5xl mx-auto">
                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div variants={fadeInUp} className="p-10 rounded-[2.5rem] bg-white/60 backdrop-blur-xl border border-white shadow-xl shadow-stone-200/50 hover:shadow-orange-900/5 transition-all duration-300 group">
                            <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <ShieldCheck className="w-7 h-7 text-orange-600" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-stone-900">Sovereign Vault</h3>
                            <p className="text-stone-500 leading-relaxed">Your files never leave your infrastructure. We deploy entirely within your perimeter for absolute GDPR compliance.</p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="p-10 rounded-[2.5rem] bg-white/60 backdrop-blur-xl border border-white shadow-xl shadow-stone-200/50 hover:shadow-orange-900/5 transition-all duration-300 group">
                            <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <EyeOff className="w-7 h-7 text-orange-600" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-stone-900">No-Download Viewer</h3>
                            <p className="text-stone-500 leading-relaxed">Documents are streamed into a hardened browser sandbox. Printing and downloading are cryptographically disabled.</p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="md:col-span-2 p-10 rounded-[2.5rem] bg-stone-900 text-white shadow-2xl overflow-hidden relative group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 blur-[80px] rounded-full group-hover:bg-orange-500/30 transition-colors" />
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6">
                                    <Fingerprint className="w-7 h-7 text-orange-400" />
                                </div>
                                <h3 className="text-3xl font-bold mb-4">Immutable Audit Trails</h3>
                                <p className="text-stone-400 text-lg max-w-2xl leading-relaxed">
                                    Every single interaction is logged on an immutable ledger. Gain absolute visibility into who accessed your documents, at what time, and from which location.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* --- NATIVE WORKSPACE INTEGRATION --- */}
            <section className="relative z-10 py-24 px-6 bg-stone-900 mt-12 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />
                
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="w-full md:w-1/2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6">
                            <Cpu className="w-4 h-4 text-orange-400" />
                            <span className="text-xs font-bold text-orange-300 tracking-widest uppercase">Native Integration</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Zero-friction deployment.</h2>
                        <p className="text-stone-400 text-lg leading-relaxed mb-8">
                            No complex MX record changes or SMTP relays. SecureLink connects natively to your existing Microsoft 365 or Google Workspace environments via secure OAuth 2.0 APIs. We listen to mailbox events and secure attachments in real-time.
                        </p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full md:w-1/2">
                        <div className="rounded-2xl bg-[#0d0d12] border border-white/10 shadow-2xl overflow-hidden">
                            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                <span className="ml-2 text-xs text-stone-500 font-mono flex items-center gap-2"><TerminalSquare className="w-3 h-3"/> workspace-setup.ts</span>
                            </div>
                            <div className="p-6 font-mono text-sm md:text-sm overflow-x-auto text-stone-300 leading-relaxed">
                                <p className="mb-2"><span className="text-purple-400">import</span> {`{ SecureLinkClient }`} <span className="text-purple-400">from</span> <span className="text-emerald-400">'@securelink/enterprise'</span>;</p>
                                <br />
                                <p className="mb-2 text-stone-500">// Initialize connection to Microsoft 365</p>
                                <p className="mb-2"><span className="text-blue-400">const</span> client = <span className="text-purple-400">new</span> <span className="text-yellow-200">SecureLinkClient</span>({`{`}</p>
                                <p className="pl-4 mb-1">provider: <span className="text-emerald-400">'microsoft_graph'</span>,</p>
                                <p className="pl-4 mb-1">tenantId: process.env.<span className="text-white">MS_TENANT_ID</span>,</p>
                                <p className="pl-4 mb-1">clientId: process.env.<span className="text-white">MS_CLIENT_ID</span>,</p>
                                <p className="mb-2">{`});`}</p>
                                <br />
                                <p className="mb-2 text-stone-500">// Start listening to mailbox events</p>
                                <p className="mb-1"><span className="text-purple-400">await</span> client.<span className="text-blue-300">startListener</span>({`{`}</p>
                                <p className="pl-4 mb-1">target: <span className="text-emerald-400">'all_mailboxes'</span>,</p>
                                <p className="pl-4 mb-1">action: <span className="text-emerald-400">'intercept_and_encrypt'</span>,</p>
                                <p className="mb-2">{`});`}</p>
                                <br />
                                <p className="text-stone-400">✨ <span className="text-emerald-400">Connected. Listening for incoming attachments...</span></p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- F.A.Q. --- */}
            <section className="relative z-10 py-24 px-6 max-w-3xl mx-auto">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
                    <p className="text-stone-500">Everything you need to know about the product and architecture.</p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl border border-stone-200/60 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <button 
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                            >
                                <span className="font-bold text-stone-900">{faq.question}</span>
                                <ChevronDown className={`w-5 h-5 text-stone-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-orange-500' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {openFaq === index && (
                                    <motion.div 
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-5 text-stone-500 leading-relaxed border-t border-stone-100 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- LIVE CERTIFICATE DEMO --- */}
            <section className="relative z-10 pt-12 pb-12 px-6">
                <motion.div 
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                    className="max-w-4xl mx-auto bg-stone-900 rounded-[2.5rem] p-10 md:p-14 text-center border border-stone-800 shadow-2xl relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[80px] rounded-full group-hover:bg-orange-500/20 transition-colors" />
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-amber-500/10 blur-[60px] rounded-full" />
                    
                    <Award className="w-16 h-16 text-orange-400 mx-auto mb-6 relative z-10" />
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">Verify Enterprise Authenticity</h2>
                    <p className="text-stone-400 mb-10 max-w-xl mx-auto text-lg leading-relaxed relative z-10">
                        Every email processed by SecureLink includes a cryptographic signature. Try our live verification portal to see how clients validate your infrastructure.
                    </p>
                    
                    <Link 
                        to="/securelink/certificate?license=SLK-FDG-2026" 
                        className="inline-flex items-center justify-center px-8 py-4 bg-white text-stone-900 font-bold rounded-xl hover:bg-orange-50 hover:scale-105 transition-all duration-300 relative z-10 shadow-lg"
                    >
                        <ShieldCheck className="w-5 h-5 mr-2 text-orange-500" />
                        Check Authenticity
                    </Link>
                </motion.div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="relative z-10 border-t border-stone-200/50 mt-12">
                <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col items-center text-center">
                    <ShieldCheck className="w-8 h-8 text-stone-300 mb-6" />
                    <p className="text-stone-500 font-medium mb-2">Designed & Engineered by</p>
                    <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-600 hover:opacity-80 transition-opacity">
                        Karl-Anthony Garozzo
                    </Link>
                    <p className="text-sm text-stone-400 mt-8">© {new Date().getFullYear()} SecureLink. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}