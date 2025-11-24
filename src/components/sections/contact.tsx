"use client";

import { User, Mail } from "lucide-react";
import { FaRegCommentDots, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link";
import { useState, ChangeEvent, FormEvent, ComponentType } from "react";
import { FORM_ENDPOINT } from "../constants/data";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormField {
  name: keyof FormData;
  type: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  placeholder: string;
  rows?: number;
}

type FormStatus = "idle" | "submitting" | "success" | "error";
type SetStateFunction<T> = (value: T | ((prev: T) => T)) => void;

const FORM_CONFIG = {
  endpoint: FORM_ENDPOINT,
  initialData: { name: "", email: "", message: "" } as FormData,
  fields: [
    {
      name: "name",
      type: "text",
      label: "Name",
      icon: User,
      placeholder: "Your name",
    },
    {
      name: "email",
      type: "email",
      label: "Email",
      icon: Mail,
      placeholder: "your.email@example.com",
    },
    {
      name: "message",
      type: "textarea",
      label: "Message",
      icon: FaRegCommentDots,
      placeholder: "What would you like to discuss?",
      rows: 4,
    },
  ] as FormField[],
};

// API Submit
const submitForm = async (
  formData: FormData,
  setStatus: SetStateFunction<FormStatus>,
  setErrorMessage: SetStateFunction<string>,
  setFormData: SetStateFunction<FormData>
) => {
  setStatus("submitting");
  setErrorMessage("");

  try {
    const response = await fetch(FORM_CONFIG.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("success");
      setFormData(FORM_CONFIG.initialData);
    } else {
      const errorData = await response.json();
      setErrorMessage(errorData.error || "Something went wrong. Please try again.");
      setStatus("error");
    }
  } catch {
    setErrorMessage("An unexpected error occurred. Please try again.");
    setStatus("error");
  }
};

const renderField = (
  field: FormField,
  formData: FormData,
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
) => {
  const Icon = field.icon;
  const commonClasses =
    "w-full bg-background/60 pl-11 pr-4 py-3 rounded-xl border border-border/50 backdrop-blur-md shadow-sm text-foreground placeholder:text-muted-foreground transition focus:ring-2 focus:ring-primary focus:outline-none";

  return (
    <div key={field.name} className="space-y-1">
      <label htmlFor={field.name} className="block text-sm font-medium text-muted-foreground">
        {field.label}
      </label>

      <div className="relative">
        <Icon className="w-5 h-5 absolute left-3 top-3 text-muted-foreground" />

        {field.type === "textarea" ? (
          <textarea
            id={field.name}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            required
            placeholder={field.placeholder}
            rows={field.rows}
            className={`${commonClasses} resize-none`}
          />
        ) : (
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            required
            placeholder={field.placeholder}
            className={commonClasses}
          />
        )}
      </div>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>(FORM_CONFIG.initialData);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    submitForm(formData, setStatus, setErrorMessage, setFormData);
  };

  return (
    <section className="py-8 space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight">Let's Connect</h2>
      <p className="text-muted-foreground text-sm">Choose your preferred way to contact me.</p>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Card 1 */}
        <div className="p-5 rounded-2xl bg-card/70 backdrop-blur-md border border-border/40 shadow-md transition hover:shadow-lg hover:bg-card/80">
          <h3 className="font-semibold text-sm mb-3">Profiles & Links</h3>

          <div className="space-y-3 text-sm">
            <Link href="https://github.com/shasbinas" target="_blank" className="premium-link">
              <FaGithub className="icon" /> GitHub
            </Link>

            <Link href="https://linkedin.com" target="_blank" className="premium-link">
              <FaLinkedin className="icon" /> LinkedIn
            </Link>

            <Link href="https://leetcode.com/u/shasbinas/" target="_blank" className="premium-link">
              <SiLeetcode className="icon" /> LeetCode
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="p-5 rounded-2xl bg-card/70 backdrop-blur-md border border-border/40 shadow-md transition hover:shadow-lg hover:bg-card/80">
          <h3 className="font-semibold text-sm mb-3">Get in Touch</h3>

          <div className="space-y-3 text-sm">
            <Link href="https://wa.me/919746998909" target="_blank" className="premium-link">
              <FaWhatsapp className="icon" /> WhatsApp
            </Link>

            <Link href="mailto:shasbinas1@gmail.com" className="premium-link">
              <Mail className="icon" /> Send Email
            </Link>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .premium-link {
          display: flex;
          gap: 8px;
          align-items: center;
          padding: 8px 10px;
          border-radius: 10px;
          transition: 0.25s ease;
        }
        .premium-link:hover {
          background: rgba(255,255,255,0.08);
          transform: translateX(3px);
        }
        .icon {
          width: 18px;
          height: 18px;
        }
      `}</style>
    </section>
  );
};

export default Contact;
