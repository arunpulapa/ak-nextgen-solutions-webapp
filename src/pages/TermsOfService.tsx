const TermsOfService = () => {
  return (
    <section id="terms" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-3">Terms of Service</h1>
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().getFullYear()}
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              These Terms of Service govern your use of this website and any
              services provided by AK NextGen Solutions.
            </p>
          </div>

          {/* Content */}
          <div className="rounded-2xl border bg-card p-6 md:p-8 shadow-sm space-y-8 text-sm leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold mb-2">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing or using this website, you agree to be bound by these Terms
                of Service and our Privacy Policy. If you do not agree, please do not
                use the website or our services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">2. Services</h2>
              <p className="text-muted-foreground">
                We provide software development, consulting and related services. The
                specific scope, timelines and pricing for any project will be agreed in
                writing (such as a proposal, statement of work or contract) before we
                start.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">3. Client Responsibilities</h2>
              <p className="text-muted-foreground">
                You agree to provide accurate information, timely feedback and any
                necessary access or assets required to complete the project. Delays in
                feedback or approvals may impact timelines.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">4. Intellectual Property</h2>
              <p className="text-muted-foreground">
                Unless otherwise agreed, you will own the final deliverables of the
                project once full payment has been received. We may retain the right to
                reuse generic code, libraries or know-how that do not contain your
                confidential information.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">5. Payments</h2>
              <p className="text-muted-foreground">
                Payment terms (milestones, due dates, currencies) will be defined in the
                proposal or invoice. Late payments may pause ongoing work until the
                outstanding amount is cleared.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">6. Warranties & Limitations</h2>
              <p className="text-muted-foreground">
                We aim to deliver high-quality work, but we cannot guarantee that any
                software will be completely error-free. To the maximum extent permitted
                by law, we are not liable for any indirect, incidental or consequential
                damages arising from the use of our services or deliverables.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">7. Third-Party Services</h2>
              <p className="text-muted-foreground">
                Some projects may rely on third-party services or platforms (such as
                hosting, APIs, payment providers). You are responsible for any fees or
                terms associated with those services, and we are not responsible for
                their availability or performance.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">8. Termination</h2>
              <p className="text-muted-foreground">
                Either party may end a project engagement with reasonable written
                notice. You will be responsible for payment for work completed up to the
                termination date, as defined in the agreement for that project.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">9. Changes to These Terms</h2>
              <p className="text-muted-foreground">
                We may update these Terms of Service from time to time. Any changes will
                be posted on this page with an updated “Last updated” date. Your
                continued use of the website or services after the changes means you
                accept the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">10. Contact</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Service, please contact:
              </p>
              <p className="text-muted-foreground mt-2">
                Email:{" "}
                <a
                  href="mailto:info@aknextgensolutions.com"
                  className="text-primary underline underline-offset-2"
                >
                  info@aknextgensolutions.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
