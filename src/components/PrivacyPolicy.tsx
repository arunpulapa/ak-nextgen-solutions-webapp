import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-10">
      {/* Back Button - same placement as Terms & Conditions */}


      <div className="container mx-auto px-4 max-w-4xl pb-20">
       <button
  onClick={handleBack}
  className="
    flex items-center gap-2
    text-sm font-medium
    px-4 py-2 mb-6
    rounded-lg
    border border-border/60
    bg-background/60 backdrop-blur-sm
    hover:bg-primary/10 hover:border-primary/40
    transition-all duration-200
  "
>
  <ArrowLeft size={18} />
  Back
</button>


        <h1 className="text-3xl lg:text-4xl font-bold mb-4">Privacy Policy</h1>

        <p className="text-muted-foreground mb-8 text-sm">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h2 className="text-lg font-semibold mb-2 text-foreground">
              1. Introduction
            </h2>
            <p>
              At <strong>AK NextGen Solutions</strong>, we value your trust and are committed
              to protecting your privacy. This Privacy Policy explains how we
              collect, store, use, and safeguard your personal information when
              you use our website and services.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2 text-foreground">
              2. Information We Collect
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Personal details (name, email, phone number)</li>
              <li>Business onboarding information</li>
              <li>Messages submitted through contact forms</li>
              <li>Usage data including IP, browser type, and pages visited</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2 text-foreground">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Respond to inquiries and provide customer support</li>
              <li>Process onboarding and service requests</li>
              <li>Improve website performance</li>
              <li>Send important updates and notifications</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2 text-foreground">
              4. Sharing of Information
            </h2>
            <p>
              We **do not** sell, rent, or trade your personal information. Data
              may be shared only with:
            </p>
            <ul className="list-disc ml-6 space-y-2 mt-2">
              <li>Trusted partners assisting with operations</li>
              <li>Authorities when legally required</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2 text-foreground">
              5. Data Security
            </h2>
            <p>
              We use encryption, authentication, and access controls to protect
              your information from unauthorized access or misuse.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2 text-foreground">
              6. Cookies & Tracking
            </h2>
            <p>
              Cookies and analytics tools may be used to enhance your browsing
              experience. You can manage cookie preferences in your browser.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2 text-foreground">
              7. Your Rights
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Request a copy of your stored data</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your personal data</li>
              <li>Withdraw consent where applicable</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2 text-foreground">
              8. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party sites. We are not
              responsible for their privacy practices and recommend reviewing
              their policies.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2 text-foreground">
              9. Policy Updates
            </h2>
            <p>
              We may update this policy periodically. Any changes will be posted
              on this page with an updated date.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2 text-foreground">
              10. Contact Us
            </h2>
            <p>
              For questions or concerns about this Privacy Policy, contact us:
            </p>
            <p className="mt-2">
              📧 <strong>info@aknextgensolutions.com</strong> <br />
              🌐 <strong>www.aknextgensolutions.com</strong>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
