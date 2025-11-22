import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">

      <main className="flex-1 pt-24 pb-20">
        {/* Back Button */}
        <div className="container mx-auto px-4 mb-6">
          <a
            href="/"
            className="
              flex items-center gap-2 text-sm font-medium 
              px-4 py-2 rounded-lg border border-border/50 
              bg-background/70 hover:bg-primary/10 hover:border-primary/50 
              transition-colors w-fit
            "
          >
            <ArrowLeft size={16} />
            Back to Home
          </a>
        </div>

        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Privacy Policy
          </h1>

          <p className="text-muted-foreground mb-8 text-sm">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="space-y-6 text-sm leading-relaxed text-muted-foreground">
            <div>
              <h2 className="text-lg font-semibold mb-2 text-foreground">
                1. Introduction
              </h2>
              <p>
                At <strong>AK NextGen Solutions</strong>, we value your trust and
                are committed to protecting your privacy. This Privacy Policy
                explains how we collect, store, use, and safeguard your personal
                information when you use our website and services.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2 text-foreground">
                2. Information We Collect
              </h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Personal details (name, email, phone number)</li>
                <li>Business information for service onboarding</li>
                <li>Communication messages submitted through forms</li>
                <li>Usage data such as IP address, browser type, and pages visited</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2 text-foreground">
                3. How We Use Your Information
              </h2>
              <p>Your data is used to support and improve our services:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>To respond to inquiries and customer support requests</li>
                <li>To process service-related communication and onboarding</li>
                <li>To improve website performance and user experience</li>
                <li>To send important updates and notifications</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2 text-foreground">
                4. Sharing of Information
              </h2>
              <p>
                We do <strong>not</strong> sell, rent, or trade your personal
                information. We may share data only with:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Trusted partners who support our operations</li>
                <li>Government authorities when legally required</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2 text-foreground">
                5. Data Security
              </h2>
              <p>
                We use encryption, access controls, and industry-standard security
                practices to protect your personal information from unauthorized
                access, misuse, or disclosure.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2 text-foreground">
                6. Cookies & Tracking
              </h2>
              <p>
                Our website may use cookies and analytics tools to enhance
                performance and understand usage behavior. You can control cookie
                settings through your browser.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2 text-foreground">
                7. Your Rights
              </h2>
              <p>You may request the following at any time:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Access to your personal data</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your personal data</li>
                <li>Withdrawal of consent where applicable</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2 text-foreground">
                8. Third-Party Links
              </h2>
              <p>
                Our site may include links to third-party websites. We are not
                responsible for their privacy practices or content. We recommend
                reviewing their privacy policies before sharing any information.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2 text-foreground">
                9. Policy Updates
              </h2>
              <p>
                We may update this Privacy Policy occasionally. Updated versions
                will be published on this page with a revised “Last Updated” date.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2 text-foreground">
                10. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy or how we
                handle your data, please contact us at:
              </p>
              <p className="mt-2">
                📧 <strong>info@aknextgensolutions.com</strong> <br />
                🌐 <strong>www.aknextgensolutions.com</strong>
              </p>
            </div>
          </section>
        </div>
      </main>

    </div>
  );
};

export default PrivacyPolicy;
