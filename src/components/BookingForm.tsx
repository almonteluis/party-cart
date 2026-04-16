import { useState, type FormEvent } from 'react';

const eventTypes = ['Wedding', 'Birthday', 'Corporate Event', 'Baby Shower', 'Graduation', 'Holiday Party', 'Other'];
const cartOptions = ['Candy Cart', 'Champagne Cart', 'Snack Cart', 'Shot Cart'];
const addOns = ['Custom Branding', 'Decor Package', 'Extra Setup Time'];
const referralSources = ['Instagram', 'Facebook', 'Google Search', 'Friend/Family Referral', 'Event/Venue Referral', 'Other'];

export default function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventDate: '',
    eventTime: '',
    eventType: '',
    eventLocation: '',
    setting: '',
    selectedCarts: [] as string[],
    selectedAddOns: [] as string[],
    referralSource: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const toggleArrayItem = (field: 'selectedCarts' | 'selectedAddOns', item: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(item) ? prev[field].filter((i) => i !== item) : [...prev[field], item],
    }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'Required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Required';
    if (!formData.email.trim()) newErrors.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    return newErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log('Booking submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-brand-charcoal rounded-lg p-12 text-center">
        <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl mb-3">Thank You!</h3>
        <p className="text-white/60">Your booking request has been submitted. We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  const inputClass = (field: string) =>
    `w-full bg-brand-dark border ${errors[field] ? 'border-red-500' : 'border-white/10'} rounded px-4 py-3 text-white placeholder-white/30 focus:border-brand-gold focus:outline-none transition-colors`;

  const labelClass = 'block text-sm text-white/60 mb-2';

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {/* Personal Info */}
      <div>
        <h3 className="section-label mb-6">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>First Name *</label>
            <input type="text" value={formData.firstName} onChange={(e) => updateField('firstName', e.target.value)} className={inputClass('firstName')} placeholder="Jane" />
            {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>}
          </div>
          <div>
            <label className={labelClass}>Last Name *</label>
            <input type="text" value={formData.lastName} onChange={(e) => updateField('lastName', e.target.value)} className={inputClass('lastName')} placeholder="Doe" />
            {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>}
          </div>
          <div>
            <label className={labelClass}>Email *</label>
            <input type="email" value={formData.email} onChange={(e) => updateField('email', e.target.value)} className={inputClass('email')} placeholder="jane@example.com" />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className={labelClass}>Phone</label>
            <input type="tel" value={formData.phone} onChange={(e) => updateField('phone', e.target.value)} className={inputClass('phone')} placeholder="(555) 123-4567" />
          </div>
        </div>
      </div>

      {/* Event Details */}
      <div>
        <h3 className="section-label mb-6">Event Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Event Date</label>
            <input type="date" value={formData.eventDate} onChange={(e) => updateField('eventDate', e.target.value)} className={inputClass('eventDate')} />
          </div>
          <div>
            <label className={labelClass}>Event Time</label>
            <input type="time" value={formData.eventTime} onChange={(e) => updateField('eventTime', e.target.value)} className={inputClass('eventTime')} />
          </div>
          <div>
            <label className={labelClass}>Type of Event</label>
            <select value={formData.eventType} onChange={(e) => updateField('eventType', e.target.value)} className={inputClass('eventType')}>
              <option value="">Select event type</option>
              {eventTypes.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label className={labelClass}>Event Location</label>
            <input type="text" value={formData.eventLocation} onChange={(e) => updateField('eventLocation', e.target.value)} className={inputClass('eventLocation')} placeholder="Venue name or address" />
          </div>
        </div>
        <div className="mt-4">
          <label className={labelClass}>Setting</label>
          <div className="flex gap-6">
            {['Indoor', 'Outdoor'].map((opt) => (
              <label key={opt} className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="setting" value={opt.toLowerCase()} checked={formData.setting === opt.toLowerCase()} onChange={(e) => updateField('setting', e.target.value)} className="accent-[#c9a84c]" />
                <span className="text-white/60 text-sm">{opt}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div>
        <h3 className="section-label mb-6">Preferences</h3>
        <div className="mb-6">
          <label className={labelClass}>Select Your Cart(s)</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cartOptions.map((cart) => (
              <label key={cart} className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={formData.selectedCarts.includes(cart)} onChange={() => toggleArrayItem('selectedCarts', cart)} className="accent-[#c9a84c]" />
                <span className="text-white/60 text-sm">{cart}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className={labelClass}>Add-Ons</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {addOns.map((addon) => (
              <label key={addon} className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={formData.selectedAddOns.includes(addon)} onChange={() => toggleArrayItem('selectedAddOns', addon)} className="accent-[#c9a84c]" />
                <span className="text-white/60 text-sm">{addon}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Additional */}
      <div>
        <h3 className="section-label mb-6">Additional Information</h3>
        <div className="space-y-4">
          <div>
            <label className={labelClass}>How did you hear about us?</label>
            <select value={formData.referralSource} onChange={(e) => updateField('referralSource', e.target.value)} className={inputClass('referralSource')}>
              <option value="">Select an option</option>
              {referralSources.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className={labelClass}>Notes / Special Requests</label>
            <textarea value={formData.notes} onChange={(e) => updateField('notes', e.target.value)} rows={4} className={inputClass('notes')} placeholder="Tell us about your vision..." />
          </div>
        </div>
      </div>

      <button type="submit" className="btn-primary w-full text-center text-base py-4">Submit Booking Request</button>
    </form>
  );
}
