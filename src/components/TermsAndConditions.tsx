import React from "react";
import { ArrowLeft } from "lucide-react";

const TermsAndConditions: React.FC = () => {
  const handleBack = () => {
    // Go to previous page
    if (window.history.length > 1) {
      window.history.back();
    } else {
      // Fallback: go to home
      window.location.href = "/";
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-4">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
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


        <h1 className="text-3xl font-bold mb-6">Terms &amp; Conditions</h1>

        <p className="text-muted-foreground mb-4">
          These Terms &amp; Conditions ("Terms") govern your use of the services
          provided by <strong>AK NextGen Solutions</strong> ("Company", "we",
          "our", "us"). By accessing or using our website, products, or
          services, you agree to be bound by these Terms. If you do not agree,
          please discontinue use.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">1. Services</h2>
        <p className="text-muted-foreground mb-4">
          AK NextGen Solutions provides software development services including
          but not limited to:
        </p>
        <ul className="list-disc ml-6 text-muted-foreground mb-4">
          <li>Website Development</li>
          <li>Mobile App Development</li>
          <li>UI/UX Design</li>
          <li>Software Testing &amp; QA</li>
          <li>Maintenance &amp; Support</li>
          <li>Internal Management System Development</li>
          <li>Cloud, API &amp; Custom Software Solutions</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">2. Project Terms</h2>
        <p className="text-muted-foreground mb-4">
          Project timelines, pricing, features, and deliverables will be
          defined in the project proposal or agreement. Any changes requested
          after project approval may incur additional charges.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          3. Client Responsibilities
        </h2>
        <p className="text-muted-foreground mb-4">
          Clients are responsible for providing accurate information, timely
          feedback, content, and approvals required to complete the project.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">4. Payments</h2>
        <p className="text-muted-foreground mb-4">
          Payment terms will be clearly mentioned in the project agreement.
          Advance payment or milestone-based payment may be required depending
          on the project type. Delayed payments may result in paused work.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          5. Intellectual Property
        </h2>
        <p className="text-muted-foreground mb-4">
          All design files, code, graphics, and content remain the property of
          AK NextGen Solutions until full payment is received. After payment,
          ownership will be transferred as per the agreement.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">6. Confidentiality</h2>
        <p className="text-muted-foreground mb-4">
          We respect client confidentiality and will not disclose project
          information to third parties except with written consent or when
          legally required.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          7. Limitations of Liability
        </h2>
        <p className="text-muted-foreground mb-4">
          AK NextGen Solutions is not liable for any damages including data
          loss, downtime, lost profits, or improper use of delivered software.
          We are not responsible for third-party service failures (hosting,
          APIs, etc.).
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          8. Third-Party Integrations
        </h2>
        <p className="text-muted-foreground mb-4">
          Projects may involve third-party services (APIs, SMS, Maps, Payment
          Gateways). Any extra charges for those services are to be paid by the
          client.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">9. Termination</h2>
        <p className="text-muted-foreground mb-4">
          Either party may terminate the project with written notice. Work
          completed until the date of termination must be paid by the client.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          10. Refund Policy
        </h2>
        <p className="text-muted-foreground mb-4">
          Refunds are not applicable once a project has started, as resources
          are allocated immediately upon project approval.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          11. Changes to Terms
        </h2>
        <p className="text-muted-foreground mb-4">
          We may update these Terms at any time. Updated versions will be
          posted on our website. Continued use of services indicates acceptance
          of the updated Terms.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">12. Contact Us</h2>
        <p className="text-muted-foreground mb-4">
          For questions about these Terms, you can contact us at:
        </p>

        <p className="text-muted-foreground">
          <strong>Email:</strong> support@aknextgensolutions.com
          <br />
          <strong>Location:</strong> Hyderabad, Telangana, India
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
