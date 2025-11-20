const PrivacyPolicy = () => {
  return (
    <section id="privacy" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-3">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().getFullYear()}
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              This Privacy Policy explains how we collect, use and protect your
              information when you use our website and services.
            </p>
          </div>

          {/* Content */}
          <div className="rounded-2xl border bg-card p-6 md:p-8 shadow-sm space-y-8 text-sm leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold mb-2">1. Information We Collect</h2>
              <p className="text-muted-foreground">
                We collect information that you provide directly to us when you:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
                <li>Submit a contact form or project request</li>
                <li>Communicate with us via email, phone or WhatsApp</li>
                <li>Use our website and interact with our content</li>
              </ul>
              <p className="text-muted-foreground mt-2">
                This may include your name, email address, phone number, company name,
                project details and any other information you choose to share.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">2. How We Use Your Information</h2>
              <p className="text-muted-foreground">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
                <li>Respond to your enquiries and project requests</li>
                <li>Prepare proposals, timelines and cost estimates</li>
                <li>Provide, maintain and improve our services</li>
                <li>Communicate important updates related to your project</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">3. Data Storage & Security</h2>
              <p className="text-muted-foreground">
                We take reasonable technical and organisational measures to protect your
                information from unauthorised access, loss, misuse or disclosure.
                However, no method of transmission over the internet is 100% secure, and
                we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">4. Sharing of Information</h2>
              <p className="text-muted-foreground">
                We do not sell or rent your personal information. We may share it only:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
                <li>With service providers who help us deliver our services</li>
                <li>When required by law, regulation or legal process</li>
                <li>To protect our rights, property or safety, or the rights of others</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">5. Cookies & Analytics</h2>
              <p className="text-muted-foreground">
                Our website may use basic analytics or cookies to understand usage
                patterns and improve the experience. This data is generally aggregated
                and does not personally identify you.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">6. Your Rights</h2>
              <p className="text-muted-foreground">
                You can contact us at any time to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
                <li>Request a copy of the information we hold about you</li>
                <li>Ask us to update or correct your details</li>
                <li>Request deletion of your personal information, where applicable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">7. Third-Party Links</h2>
              <p className="text-muted-foreground">
                Our site may contain links to third-party websites. We are not responsible
                for the privacy practices or content of those sites and encourage you to
                review their policies separately.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">8. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. Any changes will be
                posted on this page with an updated “Last updated” date.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">9. Contact</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, you can contact us at:
              </p>
              <p className="text-muted-foreground mt-2">
                Email:{" "}
                <a
                  href="mailto:aknextgensolutions@gmail.com"
                  className="text-primary underline underline-offset-2"
                >
                  aknextgensolutions@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
