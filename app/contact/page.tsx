import ContactInfo from "@/Components/contact/ContactInfo";
import ContactForm from "@/Components/contact/ContactForm";

export default function Contact() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 py-16 text-text-black">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}
