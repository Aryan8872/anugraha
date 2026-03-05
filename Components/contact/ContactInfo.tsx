// Contact page info panel — left column
import { MdEmail } from "react-icons/md";
import { PiPhone } from "react-icons/pi";
import { SlSocialInstagram } from "react-icons/sl";

const INFO = [
  {
    icon: MdEmail,
    label: "Email",
    links: [{ text: "hello@anugraha.com", href: "mailto:hello@anugraha.com" }],
  },
  {
    icon: PiPhone,
    label: "Phone",
    links: [{ text: "+977 9815016727", href: "tel:+9779815016727" }],
  },
  {
    icon: SlSocialInstagram,
    label: "Social",
    links: [
      { text: "Instagram", href: "#" },
      { text: "Facebook", href: "#" },
      { text: "WhatsApp", href: "#" },
    ],
  },
];

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <p className="text-[10px] uppercase tracking-[0.25em] text-text-black/40">
          Get in Touch
        </p>
        <h2 className="font-clash-display text-4xl lg:text-5xl font-medium uppercase leading-tight tracking-tight">
          We&apos;d love to <br />
          <span className="text-green-primary">hear from you.</span>
        </h2>
        <p className="text-sm text-text-black/50 leading-relaxed max-w-xs">
          Whether it&apos;s a product question, a collab idea, or just a hello —
          our team typically responds within 24 hours.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {INFO.map(({ icon: Icon, label, links }) => (
          <div key={label} className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] font-semibold text-text-black/40">
              <Icon size={12} />
              {label}
            </div>
            {links.map(({ text, href }) => (
              <a
                key={text}
                href={href}
                className="text-sm text-text-black hover:text-green-primary transition-colors duration-200 pl-5"
              >
                {text}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
