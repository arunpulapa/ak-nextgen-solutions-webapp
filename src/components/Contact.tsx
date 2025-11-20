import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";

const Contact = () => {
  const sectionRef = useScrollReveal();

  // Form states
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  // 👉 Submit via backend API (Node + Nodemailer)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // basic front-end guard
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in Name, Email and Project Details.");
      return;
    }

    try {
      setIsSubmitting(true);

      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed to send");
      }

      const data = await res.json();
      if (!data.success) {
        throw new Error(data.error || "Failed to send");
      }

      // clear form
      setForm({
        name: "",
        company: "",
        email: "",
        budget: "",
        timeline: "",
        message: "",
      });

      alert("Thanks! Your message has been sent.");
    } catch (err) {
      console.error(err);
      alert("Sorry, something went wrong. Please try again or contact me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsAppDirect = () => {
    const phone = "919949196343";
    window.open("https://wa.me/" + phone, "_blank");
  };

  const callNow = () => {
    window.location.href = "tel:+919949196343";
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div
          ref={sectionRef}
          className="text-center max-w-3xl mx-auto mb-16 scroll-reveal"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Let&apos;s Build Together
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to start your project? Share the details and I’ll respond quickly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="rounded-2xl border bg-card p-8 shadow-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="bg-muted/30"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="bg-muted/30"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="john@company.com"
                  className="bg-muted/30"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range</Label>
                  <Input
                    id="budget"
                    value={form.budget}
                    onChange={handleChange}
                    placeholder="₹50K - ₹3L"
                    className="bg-muted/30"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline">Timeline</Label>
                  <Input
                    id="timeline"
                    value={form.timeline}
                    onChange={handleChange}
                    placeholder="4-8 weeks"
                    className="bg-muted/30"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Project Details *</Label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  className="bg-muted/30 min-h-[150px]"
                />
              </div>

              <Button className="w-full" size="lg" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Submit Request"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
                 {/* RIGHT PANEL – FULL HEIGHT */}
          <div className="rounded-2xl border bg-card p-8 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    aknextgensolutions@gmail.com
                  </p>
                </div>
                
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-sm text-muted-foreground">
                    +91 99491 96343
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Based In</h3>
                  <p className="text-sm text-muted-foreground">
                    Hyderabad, India — working with global clients
                  </p>
                </div>
              </div>

               <div className="mt-6 space-y-3 ml-4">
      <h3 className="font-semibold text-sm">Why Work With Me?</h3>

      <ul className="text-sm text-muted-foreground space-y-2">
        <li className="flex gap-2 items-start">
          <span className="text-primary mt-1">•</span>
          Fast and clear communication
        </li>

        <li className="flex gap-2 items-start">
          <span className="text-primary mt-1">•</span>
          High-quality engineering & scalable code
        </li>

        <li className="flex gap-2 items-start">
          <span className="text-primary mt-1">•</span>
          Transparent development process
        </li>

        <li className="flex gap-2 items-start">
          <span className="text-primary mt-1">•</span>
          On-time delivery guaranteed
        </li>
      </ul>
    </div>
            </div>

            {/* You can add an image or message here */}
            <div className="mt-10 text-sm text-muted-foreground">
              I usually respond within a few hours.  
              Let’s bring your idea to life.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
