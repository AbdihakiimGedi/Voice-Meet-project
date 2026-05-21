import { useState } from "react";
import { Send, Phone, Mail, CheckCircle, Headphones } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required";
    if (!formData.phone.trim()) tempErrors.phone = "Phone number is required";
    if (!formData.message.trim()) tempErrors.message = "Please enter your message";
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setIsSuccess(true);
      setFormData({ name: "", phone: "", message: "" });
      setErrors({});
      setTimeout(() => setIsSuccess(false), 5000);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section id="contact" className="section-shell bg-white dark:bg-bg-dark">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="space-y-10">
              <div className="space-y-5">
                <div className="eyebrow">Connect</div>
                <h2 className="section-title">
                  Get in <span className="text-primary">Touch</span>
                </h2>
                <p className="section-copy">
                  Have questions about our voice network or interested in a partnership? Our team is ready to assist you.
                </p>
              </div>

              <div className="grid gap-5">
                {[
                  { icon: Phone, label: "Official Phone", val: "+252613936588" },
                  { icon: Mail, label: "Email Support", val: "cabdixakiincumar43@gmail.com" },
                ].map((item, i) => (
                  <div key={i} className="group flex items-center gap-5 rounded-3xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:border-primary/30 dark:border-white/10 dark:bg-slate-900/70">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-primary transition-colors group-hover:bg-primary group-hover:text-white dark:bg-white/10 dark:text-blue-200">
                      <item.icon size={24} />
                    </div>
                    <div className="min-w-0">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{item.label}</p>
                      <p className="break-all text-base font-semibold text-dark sm:text-lg dark:text-white">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center gap-5 rounded-3xl border border-primary/15 bg-primary/5 p-6 dark:bg-primary/10">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white">
                  <Headphones size={24} />
                </div>
                <p className="font-medium text-dark dark:text-white">24/7 Premium support for verified voicers and organizations.</p>
              </div>
            </div>

            <div className="surface relative overflow-hidden p-6 sm:p-8 md:p-10">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center space-y-6 py-16 text-center animate-in zoom-in duration-700">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500 text-white">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-3xl font-semibold text-dark dark:text-white">Success!</h3>
                  <p className="mx-auto max-w-xs text-slate-600 dark:text-slate-400">
                    Your message has been received. Our team will contact you shortly.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-sm font-semibold text-primary transition-colors hover:text-blue-700 dark:hover:text-blue-200"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-3">
                    <label className="ml-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-300">Full Name</label>
                    <input
                      type="text"
                      className={`w-full rounded-2xl border bg-slate-50 px-5 py-4 text-dark outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:ring-4 dark:bg-slate-800 dark:text-white dark:focus:bg-slate-800 ${
                        errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500/10" : "border-slate-200 focus:border-primary focus:ring-primary/10 dark:border-white/10"
                      }`}
                      placeholder="e.g. John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="ml-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-300">Phone Number</label>
                    <input
                      type="text"
                      className={`w-full rounded-2xl border bg-slate-50 px-5 py-4 text-dark outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:ring-4 dark:bg-slate-800 dark:text-white dark:focus:bg-slate-800 ${
                        errors.phone ? "border-red-500 focus:border-red-500 focus:ring-red-500/10" : "border-slate-200 focus:border-primary focus:ring-primary/10 dark:border-white/10"
                      }`}
                      placeholder="+252..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="ml-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-300">Your Message</label>
                    <textarea
                      rows="4"
                      className={`w-full resize-none rounded-2xl border bg-slate-50 px-5 py-4 text-dark outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:ring-4 dark:bg-slate-800 dark:text-white dark:focus:bg-slate-800 ${
                        errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500/10" : "border-slate-200 focus:border-primary focus:ring-primary/10 dark:border-white/10"
                      }`}
                      placeholder="How can we help?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-premium w-full py-4">
                    Send Message <Send size={20} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
