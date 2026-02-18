import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, ShieldAlert, Award, Fingerprint, Lock, ArrowLeft, CheckCircle2 } from 'lucide-react';

// --- BASE DE DONNÉES SIMULÉE (No-Backend) ---
const LICENSE_DB: Record<string, any> = {
    "SLK-FDG-2026": {
        company: "FDG Group",
        tier: "Enterprise Sovereign Vault",
        status: "Active & Secured",
        issueDate: "October 12, 2025",
        expiryDate: "October 12, 2026",
        region: "Europe (Paris, FR)",
        hash: "0x8F92...3B1A",
        fingerprint: "a94a8fe5ccb19ba61c4c0873d391e987982fbbd3"
    },
    "SLK-EFR-9932": {
        company: "EFREI Paris",
        tier: "Education Shield",
        status: "Active & Secured",
        issueDate: "January 5, 2026",
        expiryDate: "January 5, 2027",
        region: "Europe (Paris, FR)",
        hash: "0x4A19...9C2F",
        fingerprint: "b25b294cb4deb69ea00a4c3cb3189914619b02a9"
    }
};

export default function SecureCertificate() {
    const [searchParams] = useSearchParams();
    const licenseKey = searchParams.get("license");
    const [certData, setCertData] = useState<any | null>(null);
    const [isChecking, setIsChecking] = useState(true);

    // Simulation d'un temps de vérification cryptographique
    useEffect(() => {
        const timer = setTimeout(() => {
            if (licenseKey && LICENSE_DB[licenseKey]) {
                setCertData(LICENSE_DB[licenseKey]);
            }
            setIsChecking(false);
        }, 1200); // 1.2s de faux chargement pour faire "pro"
        return () => clearTimeout(timer);
    }, [licenseKey]);

    // --- ÉTAT 1 : CHARGEMENT ---
    if (isChecking) {
        return (
            <div className="min-h-screen bg-[#faf9f6] flex flex-col items-center justify-center font-sans">
                <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin mb-4"></div>
                <p className="text-stone-500 font-medium tracking-widest uppercase text-sm animate-pulse">
                    Verifying Cryptographic Signature...
                </p>
            </div>
        );
    }

    // --- ÉTAT 2 : LICENCE INVALIDE / ABSENTE ---
    if (!certData) {
        return (
            <div className="min-h-screen bg-[#faf9f6] flex flex-col items-center justify-center font-sans p-6">
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl shadow-red-900/5 border border-red-100 text-center"
                >
                    <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <ShieldAlert className="w-8 h-8" />
                    </div>
                    <h1 className="text-2xl font-bold text-stone-900 mb-2">Invalid Certificate</h1>
                    <p className="text-stone-500 mb-8 leading-relaxed">
                        This SecureLink instance cannot be verified. The license key is either missing, expired, or cryptographically tampered with.
                    </p>
                    <Link to="/securelink" className="inline-flex items-center justify-center w-full px-6 py-3 bg-stone-900 text-white rounded-xl hover:bg-stone-800 transition-colors">
                        Return to SecureLink
                    </Link>
                </motion.div>
            </div>
        );
    }

    // --- ÉTAT 3 : CERTIFICAT VALIDE (Le rendu "Apple/Enterprise") ---
    return (
        <div className="min-h-screen bg-[#faf9f6] py-20 px-6 font-sans selection:bg-orange-200 flex flex-col items-center">
            
            <Link to="/securelink" className="inline-flex items-center text-stone-500 hover:text-stone-900 transition-colors mb-10 group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Platform
            </Link>

            <motion.div 
                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}
                className="max-w-3xl w-full bg-white rounded-[2rem] shadow-2xl shadow-stone-200/50 border border-stone-200/50 overflow-hidden relative"
            >
                {/* Filigrane de fond */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
                    <ShieldCheck className="w-96 h-96" />
                </div>

                {/* En-tête du certificat */}
                <div className="bg-stone-900 p-10 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 blur-[80px] rounded-full" />
                    <Award className="w-12 h-12 text-orange-400 mx-auto mb-4 relative z-10" />
                    <h1 className="text-3xl font-bold text-white tracking-tight relative z-10">Official Deployment Certificate</h1>
                    <p className="text-stone-400 mt-2 relative z-10">SecureLink Cryptographic Guarantee</p>
                </div>

                {/* Corps du certificat */}
                <div className="p-10 md:p-14 relative z-10">
                    <div className="flex items-center justify-center gap-2 text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full w-max mx-auto mb-10 border border-emerald-200">
                        <CheckCircle2 className="w-5 h-5" />
                        <span className="font-bold text-sm uppercase tracking-widest">Verified & Authentic</span>
                    </div>

                    <p className="text-center text-stone-500 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
                        This certifies that the infrastructure utilized by <strong className="text-stone-900 border-b-2 border-orange-200 pb-0.5">{certData.company}</strong> is an authentic, secure, and actively monitored deployment of the SecureLink Enterprise system.
                    </p>

                    {/* Grille de données techniques */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#faf9f6] p-6 rounded-2xl border border-stone-200 mb-10">
                        <div>
                            <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">License ID</p>
                            <p className="font-mono text-sm text-stone-900 font-semibold">{licenseKey}</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Service Tier</p>
                            <p className="text-sm text-stone-900 font-semibold">{certData.tier}</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Valid From</p>
                            <p className="text-sm text-stone-900">{certData.issueDate}</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Valid Until</p>
                            <p className="text-sm text-stone-900">{certData.expiryDate}</p>
                        </div>
                    </div>

                    {/* Zone cryptographique */}
                    <div className="border-t border-dashed border-stone-300 pt-8">
                        <div className="flex items-center gap-2 mb-4">
                            <Lock className="w-4 h-4 text-stone-400" />
                            <h3 className="text-sm font-bold text-stone-900 uppercase tracking-widest">Cryptographic Fingerprint</h3>
                        </div>
                        <div className="bg-stone-900 p-4 rounded-xl flex items-center gap-4">
                            <Fingerprint className="w-8 h-8 text-orange-500 opacity-50 flex-shrink-0" />
                            <div className="overflow-hidden">
                                <p className="text-stone-400 text-xs mb-1">SHA-256 Hash</p>
                                <p className="text-emerald-400 font-mono text-xs truncate">{certData.fingerprint}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#faf9f6] py-4 text-center border-t border-stone-200">
                    <p className="text-xs text-stone-400 font-medium">Engineered by Karl-Anthony Garozzo • SecureLink Core Systems</p>
                </div>
            </motion.div>
        </div>
    );
}