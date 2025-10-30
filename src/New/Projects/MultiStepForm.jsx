import { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Check,
  User,
  Briefcase,
  MapPin,
  CreditCard
} from 'lucide-react';

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    company: '', position: '', experience: '', skills: '',
    street: '', city: '', state: '', zipCode: '', country: '',
    cardNumber: '', cardName: '', expiryDate: '', cvv: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const totalSteps = 4;

  const steps = [
    { number: 1, title: 'Personal', icon: User },
    { number: 2, title: 'Professional', icon: Briefcase },
    { number: 3, title: 'Address', icon: MapPin },
    { number: 4, title: 'Payment', icon: CreditCard }
  ];

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => currentStep < totalSteps && setCurrentStep(currentStep + 1);
  const prevStep = () => currentStep > 1 && setCurrentStep(currentStep - 1);
  const handleSubmit = () => setSubmitted(true);
  const resetForm = () => {
    setFormData({
      firstName: '', lastName: '', email: '', phone: '',
      company: '', position: '', experience: '', skills: '',
      street: '', city: '', state: '', zipCode: '', country: '',
      cardNumber: '', cardName: '', expiryDate: '', cvv: ''
    });
    setCurrentStep(1);
    setSubmitted(false);
  };

  const inputClass =
    "w-full px-4 py-2 bg-gray-900/70 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all";

  const labelClass = "block text-sm font-medium text-gray-400 mb-2";

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-6">Personal Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>First Name *</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className={inputClass} placeholder="John" />
              </div>
              <div>
                <label className={labelClass}>Last Name *</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className={inputClass} placeholder="Doe" />
              </div>
            </div>
            <div>
              <label className={labelClass}>Email Address *</label>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} className={inputClass} placeholder="john.doe@example.com" />
            </div>
            <div>
              <label className={labelClass}>Phone Number *</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className={inputClass} placeholder="+1 (555) 123-4567" />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-6">Professional Information</h2>
            <div>
              <label className={labelClass}>Company Name *</label>
              <input type="text" name="company" value={formData.company} onChange={handleInputChange} className={inputClass} placeholder="Acme Corporation" />
            </div>
            <div>
              <label className={labelClass}>Job Position *</label>
              <input type="text" name="position" value={formData.position} onChange={handleInputChange} className={inputClass} placeholder="Software Engineer" />
            </div>
            <div>
              <label className={labelClass}>Years of Experience *</label>
              <select name="experience" value={formData.experience} onChange={handleInputChange} className={inputClass}>
                <option value="">Select experience</option>
                <option value="0-1">0-1 years</option>
                <option value="1-3">1-3 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5-10">5-10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Key Skills</label>
              <textarea name="skills" value={formData.skills} onChange={handleInputChange} rows="4" className={inputClass} placeholder="React, Node.js, Python..." />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-6">Address Information</h2>
            <div>
              <label className={labelClass}>Street Address *</label>
              <input type="text" name="street" value={formData.street} onChange={handleInputChange} className={inputClass} placeholder="123 Main Street" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>City *</label>
                <input type="text" name="city" value={formData.city} onChange={handleInputChange} className={inputClass} placeholder="New York" />
              </div>
              <div>
                <label className={labelClass}>State *</label>
                <input type="text" name="state" value={formData.state} onChange={handleInputChange} className={inputClass} placeholder="NY" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>ZIP Code *</label>
                <input type="text" name="zipCode" value={formData.zipCode} onChange={handleInputChange} className={inputClass} placeholder="10001" />
              </div>
              <div>
                <label className={labelClass}>Country *</label>
                <input type="text" name="country" value={formData.country} onChange={handleInputChange} className={inputClass} placeholder="United States" />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-6">Payment Information</h2>
            <div>
              <label className={labelClass}>Card Number *</label>
              <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} className={inputClass} placeholder="1234 5678 9012 3456" maxLength="19" />
            </div>
            <div>
              <label className={labelClass}>Cardholder Name *</label>
              <input type="text" name="cardName" value={formData.cardName} onChange={handleInputChange} className={inputClass} placeholder="John Doe" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Expiry Date *</label>
                <input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleInputChange} className={inputClass} placeholder="MM/YY" maxLength="5" />
              </div>
              <div>
                <label className={labelClass}>CVV *</label>
                <input type="text" name="cvv" value={formData.cvv} onChange={handleInputChange} className={inputClass} placeholder="123" maxLength="4" />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black flex items-center justify-center p-8">
        <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-xl p-8 max-w-2xl w-full">
          <div className="text-center">
            <div className="mx-auto w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6">
              <Check size={40} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Form Submitted Successfully!
            </h2>
            <p className="text-gray-400 mb-8">
              Thank you for completing the form. Here's your summary:
            </p>
            <div className="bg-gray-900/70 border border-gray-700 rounded-lg p-6 text-left max-h-96 overflow-y-auto">
              <pre className="text-sm text-gray-300 whitespace-pre-wrap">
                {JSON.stringify(formData, null, 2)}
              </pre>
            </div>
            <button
              onClick={resetForm}
              className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-medium shadow-md shadow-blue-500/30"
            >
              Start New Form
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isCompleted = currentStep > step.number;
              const isCurrent = currentStep === step.number;

              return (
                <div key={step.number} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-md ${
                        isCompleted
                          ? 'bg-green-500 text-white shadow-green-500/40'
                          : isCurrent
                          ? 'bg-blue-600 text-white shadow-blue-500/40'
                          : 'bg-gray-700 text-gray-400'
                      }`}
                    >
                      {isCompleted ? <Check size={24} /> : <Icon size={24} />}
                    </div>
                    <span className={`mt-2 text-sm ${isCurrent ? 'text-blue-400' : 'text-gray-400'}`}>
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`h-1 flex-1 mx-2 rounded-full ${
                        isCompleted ? 'bg-green-500' : 'bg-gray-700'
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-xl p-8 transition-all duration-500">
          {renderStepContent()}

          {/* Navigation */}
          <div className="flex justify-between mt-10 pt-6 border-t border-gray-700">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                currentStep === 1
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-700 text-gray-200 hover:bg-gray-600 hover:shadow-lg hover:shadow-gray-500/30'
              }`}
            >
              <ChevronLeft size={20} />
              Previous
            </button>

            {currentStep < totalSteps ? (
              <button
                onClick={nextStep}
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 shadow-md shadow-blue-500/30 font-medium transition-all"
              >
                Next
                <ChevronRight size={20} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 shadow-md shadow-green-500/30 font-medium transition-all"
              >
                <Check size={20} />
                Submit
              </button>
            )}
          </div>
        </div>

        <div className="text-center mt-6 text-gray-400 text-sm">
          Step {currentStep} of {totalSteps}
        </div>
      </div>
    </div>
  );
}
