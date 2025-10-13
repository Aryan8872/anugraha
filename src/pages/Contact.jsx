import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { PiPhone } from "react-icons/pi";
import { SlSocialInstagram } from "react-icons/sl";

const Contact = () => {
  const queryTypes = ["General", "Product", "Others", "Payments & refunds", "Collaboration"];

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [queryType, setQueryType] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false); // ✅ track submission success

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const data = new URLSearchParams(formData).toString();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: data,
    })
      .then(() => {
        setSuccess(true); // show success message
        // Reset form fields
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setQueryType("");
        setMessage("");

        // Hide success message after 5 seconds
        setTimeout(() => setSuccess(false), 5000);
      })
      .catch((err) => alert("Failed to send message: " + err));
  };

  return (
    <div
      style={{
        backgroundImage: `url('/contact.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="min-h-[88.5vh] w-full relative"
    >
      <div className="w-full bg-black/30 h-full absolute inset-0 z-10"></div>

      <div className="absolute z-20 px-3 md:px-6 py-7 h-full flex flex-col md:flex-row w-full justify-between">
        {/* Left side info */}
        <div className="hidden md:flex flex-col h-full justify-between w-xl">
          <section className="flex flex-col gap-5">
            <p className="flex flex-col gap-4 text-5xl font-dew-semibold text-white">
              You Have Questions,<br />
              We Have Answers
            </p>
            <span className="font-dew-regular text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti
              voluptatibus quas totam quod. Rerum quod earum cupiditate deleniti recusandae.
            </span>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-y-10">
            <div className="flex flex-col gap-2">
              <span className="flex flex-row text-white font-dew-semibold items-center gap-2">
                <MdEmail color="white" size={20} />
                Email
              </span>
              <a href="mailto:example@gmail.com" className="text-white font-dew-regular pl-7">
                example@gmail.com
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <span className="flex flex-row text-white font-dew-semibold items-center gap-2">
                <PiPhone color="white" size={20} />
                Phone Number
              </span>
              <a href="tel:+9779815016727" className="text-white font-dew-regular pl-7">
                9815016727
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <span className="flex flex-row text-white font-dew-semibold items-center gap-2">
                <SlSocialInstagram color="white" size={20} />
                Social Media
              </span>
              <a href="#" className="text-white font-dew-regular pl-7">
                Facebook
              </a>
              <a href="#" className="text-white font-dew-regular pl-7">
                Instagram
              </a>
              <a href="#" className="text-white font-dew-regular pl-7">
                Whatsapp
              </a>
            </div>
          </section>
        </div>

        {/* Right side contact form */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="bg-white w-full self-center md:self-auto max-w-[480px] h-full rounded-xl shadow-md px-4 py-3 flex flex-col gap-3 relative"
        >
          {/* Hidden inputs for Netlify */}
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="queryType" value={queryType} />

          {/* Success message overlay */}
          {success && (
            <div className="absolute inset-0 bg-green-100 bg-opacity-90 flex items-center justify-center rounded-xl z-30 text-green-900 font-dew-semibold text-center px-4">
              Your message has been sent successfully!
            </div>
          )}

          <span className="font-dew-semibold text-2xl">Tell Us Your Query</span>
          <span className="font-dew-regular text-black/50">
            Our team is ready to assist you with every detail, big or small
          </span>

          <div className="mt-5 flex flex-col sm:flex-row gap-3  w-full">
            <input
              placeholder="First Name"
              value={firstName}
              name="firstName"
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              className="h-10 px-4 sm:w-1/2 shrink focus:outline-none rounded-3xl border-[1.2px] border-black/30"
            />
            <input
              placeholder="Last Name"
              type="text"
              value={lastName}
              name="lastName"
              onChange={(e) => setLastName(e.target.value)}
              className="rounded-3xl w-full sm:w-1/2 focus:outline-none h-10 px-4 border-[1.2px] border-black/30"
            />
          </div>

          <div className="md:mt-3   flex flex-col sm:flex-row gap-3  w-full">
            <input
              placeholder="Email"
              type="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="h-10 w-full sm:w-1/2 focus:outline-none px-4 rounded-3xl border-[1.2px] border-black/30"
            />
            <input
              placeholder="Phone Number"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="text"
              className="w-full sm:w-1/2 rounded-3xl focus:outline-none h-10 px-4 border-[1.2px] border-black/30"
            />
          </div>

          {/* Query type selection */}
          <div className="mt-3 flex flex-col gap-2">
            <span className="font-dew-regular text-black/50">Type of query</span>
            <div className="flex flex-row gap-3 w-full overflow-x-auto no-scrollbar">
              {queryTypes.map((query, index) => (
                <button
                  type="button"
                  key={index}
                  className={`shrink-0 rounded-3xl px-4 py-2 border ${
                    queryType === query ? "bg-black/10 text-black" : "text-black/50 border-black/30"
                  }`}
                  onClick={() => setQueryType(query)}
                >
                  {query}
                </button>
              ))}
            </div>
          </div>

          <textarea
            placeholder="Message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-3 px-3 py-4 focus:outline-none rounded-xl resize-none w-full h-full border-[1.2px] border-black/30"
          />

          <button
            type="submit"
            className="w-full mt-2 bg-green-primary cursor-pointer text-sm md:text-base rounded-4xl sm:py-3 px-3 py-2 sm:px-5 font-dew-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
