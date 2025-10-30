import  { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const FormValidation = () => {
  // 🎯 Form data ke liye state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // ❌ Error messages ke liye state
  const [errors, setErrors] = useState({});

  // 🌟 GSAP ke liye ref
  const formRef = useRef(null);

  // 🌀 GSAP animation jab component mount hota hai
  useEffect(() => {
    gsap.from(formRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  // 🔁 Input change handle karne ke liye function
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    // har input ke change par state update hoti hai
    setFormData({ ...formData, [name]: value });
    console.log(formData);
    // user likhne lage toh error hata do
    setErrors({ ...errors, [name]: "" });
  };

  // ✅ Validation logic
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name likhna zaroori hai";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email likhna zaroori hai";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Sahi email likho (example@domain.com)";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password likhna zaroori hai";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password kam se kam 6 characters ka hona chahiye";
    }

    console.log(newErrors);
    return newErrors;
  };

  // 🚀 Submit handle karne ke liye function
  const handleSubmit = (e) => {
    e.preventDefault(); 
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // agar error aaye toh thoda shake animation dikhaye
      gsap.fromTo(
        formRef.current,
        { x: -10 },
        { x: 10, duration: 0.1, repeat: 3, yoyo: true, ease: "power1.inOut" }
      );
    } else {
      alert("Form successfully submit ho gaya 🎉");
      setFormData({ name: "", email: "", password: "" });
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">
          React Form Validation
        </h2>

        {/* 👤 Name Field */}
        <div>
          <label className="block text-gray-300 mb-1">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Apna naam likho..."
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* 📧 Email Field */}
        <div>
          <label className="block text-gray-300 mb-1">Email</label>
          <input
            type="text"
            name="email"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* 🔒 Password Field */}
        <div>
          <label className="block text-gray-300 mb-1">Password</label>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <p className="text-red-400 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        {/* 🧨 Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-md font-semibold transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormValidation;
