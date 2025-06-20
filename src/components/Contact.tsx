import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'fullName':
        if (value.length < 2) {
          return 'Name must be at least 2 characters long';
        }
        if (!/^[a-zA-Z\s]*$/.test(value)) {
          return 'Name can only contain letters and spaces';
        }
        break;
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return 'Please enter a valid email address';
        }
        break;
      case 'phone':
        if (!/^[0-9+\s-]{10,15}$/.test(value)) {
          return 'Please enter a valid phone number (10-15 digits)';
        }
        break;
      case 'message':
        if (value.length < 10) {
          return 'Message must be at least 10 characters long';
        }
        break;
    }
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validate and set error
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: ''
    });
    setErrors({
      fullName: '',
      email: '',
      phone: '',
      message: ''
    });
    setSubmitStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields before submission
    const newErrors = {
      fullName: validateField('fullName', formData.fullName),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      message: validateField('message', formData.message)
    };

    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).some(error => error !== '')) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const templateParams = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        time: new Date().toLocaleString(), // or any format you want
        message: formData.message
      };

      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_USER_ID
      );

      setSubmitStatus('success');
      resetForm();
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="text-coral">Touch</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Mail & Website */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-coral rounded-lg flex items-center justify-center mr-3">
                  📧
                </div>
                Mail & Website
              </h3>
              <div className="space-y-2 text-slate-300">
                <div>📧 <a href="mailto:nik@nikheelkumbhani.com" className="hover:text-coral transition-colors">nik@nikheelkumbhani.com</a></div>
                <div>🌐 <a href="https://profile.nikheelkumbhani.com/" target="_blank" rel="noopener noreferrer" className="hover:text-coral transition-colors">https://profile.nikheelkumbhani.com/</a></div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-coral rounded-lg flex items-center justify-center mr-3">
                  📱
                </div>
                Contact
              </h3>
              <div className="space-y-2 text-slate-300">
                <div>📱 +91 6355639005</div>
                <div>📱 +91 7046136372</div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <div className="w-8 h-8 bg-coral rounded-lg flex items-center justify-center mr-3">
                  📍
                </div>
                Address
              </h3>
              <div className="text-slate-300">
                📍 Surat, Gujarat, India - 395006
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  maxLength={50}
                  required
                  autoComplete="off"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-coral focus:outline-none transition-colors"
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-400">{errors.fullName}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={100}
                  required
                  autoComplete="off"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-coral focus:outline-none transition-colors"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={15}
                  pattern="[0-9+\-\s]{10,15}"
                  required
                  autoComplete="off"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-coral focus:outline-none transition-colors"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                )}
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={1000}
                  required
                  autoComplete="off"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-coral focus:outline-none transition-colors resize-none"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
                <p className="mt-1 text-sm text-slate-400 text-right">
                  {formData.message.length}/1000
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <button
                  type="submit"
                  className="bg-coral text-white px-8 py-3 rounded-lg font-medium hover:bg-coral/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  disabled={isSubmitting || Object.values(errors).some(error => error !== '') || Object.values(formData).some(value => value === '')}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : 'Submit'}
                </button>

                {submitStatus === 'success' && (
                  <div className="text-green-400 text-sm text-center">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="text-red-400 text-sm text-center">
                    Failed to send message. Please try again later.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
