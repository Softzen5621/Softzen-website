import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/legal.css";

function TermsOfService() {
  return (
    <>
      <Navbar />

      <div className="legal-page">
        <div className="legal-container">

          {/* ── HERO ── */}
          <section className="legal-hero">
            <span className="legal-tag">LEGAL AGREEMENT</span>
            <h1 className="legal-title">Terms of Service</h1>
            <p className="legal-desc">
              Please read these Terms of Service carefully before accessing or using any
              Softzen Technology products, cloud platforms, enterprise software, SaaS
              services, APIs, AI solutions, websites or professional services. By
              accessing or using any Softzen service you acknowledge that you have read,
              understood and agreed to these Terms in their entirety.
            </p>
            <div className="legal-info">
              <div>
                <small>Effective Date</small>
                <strong>27 June 2026</strong>
              </div>
              <div>
                <small>Company</small>
                <strong>Softzen Technology</strong>
              </div>
              <div>
                <small>Jurisdiction</small>
                <strong>India</strong>
              </div>
            </div>
          </section>

          <div className="legal-content">

            {/* ── SIDEBAR ── */}
            <aside className="legal-sidebar">
              <div className="legal-toc">
                <h3>Contents</h3>
                <a href="#acceptance">1. Acceptance of Terms</a>
                <a href="#definitions">2. Definitions</a>
                <a href="#eligibility">3. Eligibility</a>
                <a href="#account-registration">4. Account Registration</a>
                <a href="#user-responsibilities">5. User Responsibilities</a>
                <a href="#services-overview">6. Services Overview</a>
                <a href="#saas-subscription">7. SaaS Subscription</a>
                <a href="#license-grant">8. License Grant</a>
                <a href="#acceptable-use">9. Acceptable Use Policy</a>
                <a href="#prohibited-activities">10. Prohibited Activities</a>
                <a href="#customer-responsibilities">11. Customer Responsibilities</a>
                <a href="#school-erp">12. School ERP Terms</a>
                <a href="#ai-disclaimer">13. AI Services Disclaimer</a>
                <a href="#enterprise-software">14. Enterprise Software Terms</a>
                <a href="#api-usage">15. API Usage Policy</a>
                <a href="#custom-dev">16. Custom Development Services</a>
                <a href="#professional-services">17. Professional Services</a>
                <a href="#ip-rights">18. Intellectual Property Rights</a>
                <a href="#trademarks">19. Trademarks</a>
                <a href="#customer-data">20. Customer Data Ownership</a>
                <a href="#privacy">21. Privacy</a>
                <a href="#security">22. Security</a>
                <a href="#data-processing">23. Data Processing</a>
                <a href="#third-party">24. Third Party Integrations</a>
                <a href="#confidentiality">25. Confidentiality</a>
                <a href="#payment-terms">26. Payment Terms</a>
                <a href="#taxes">27. Taxes</a>
                <a href="#subscription-renewal">28. Subscription Renewal</a>
                <a href="#cancellation">29. Cancellation Policy</a>
                <a href="#no-refund">30. No Refund Policy</a>
                <a href="#suspension">31. Suspension of Service</a>
                <a href="#termination">32. Account Termination</a>
                <a href="#beta">33. Beta Features</a>
                <a href="#availability">34. Service Availability</a>
                <a href="#maintenance">35. Maintenance Windows</a>
                <a href="#backups">36. Backups</a>
                <a href="#disaster-recovery">37. Disaster Recovery</a>
                <a href="#compliance">38. Compliance</a>
                <a href="#export-control">39. Export Control</a>
                <a href="#indemnification">40. Indemnification</a>
                <a href="#warranty-disclaimer">41. Warranty Disclaimer</a>
                <a href="#liability">42. Limitation of Liability</a>
                <a href="#force-majeure">43. Force Majeure</a>
                <a href="#governing-law">44. Governing Law</a>
                <a href="#arbitration">45. Arbitration &amp; Dispute Resolution</a>
                <a href="#modification">46. Modification of Terms</a>
                <a href="#severability">47. Severability</a>
                <a href="#entire-agreement">48. Entire Agreement</a>
                <a href="#contact">49. Contact Information</a>
                <a href="#final-notice">50. Final Legal Notice</a>
              </div>
            </aside>

            {/* ── MAIN ── */}
            <main className="legal-main">

              {/* 1 */}
              <div className="legal-card" id="acceptance">
                <h2>1. Acceptance of Terms</h2>
                <p>
                  These Terms of Service (hereinafter "Terms", "Agreement" or "ToS")
                  constitute a legally binding contract between Softzen Technology
                  (hereinafter "Softzen", "Company", "we", "our" or "us"), a technology
                  company incorporated and operating under the laws of India, and any
                  individual, organization, corporate entity, educational institution,
                  government body, partnership, sole proprietorship or any other legal
                  entity (hereinafter "Customer", "User", "you" or "your") that accesses,
                  browses, registers for, subscribes to, installs, uses or purchases any
                  Softzen product, service, platform, application, API, cloud offering,
                  consulting service, training or any other deliverable.
                </p>
                <p>
                  Your access to or use of any Softzen service constitutes your full,
                  unconditional and legally binding acceptance of these Terms, including
                  all policies incorporated herein by reference such as our Privacy
                  Policy, Security Policy, Acceptable Use Policy, Service Level
                  Agreement (where applicable) and any Order Forms or Statements of Work
                  executed between you and Softzen. If you are accepting these Terms on
                  behalf of a company or other legal entity, you represent and warrant
                  that you have full authority to bind that entity to these Terms, and
                  all references to "you" or "your" shall refer to that entity.
                </p>
                <p>
                  If you disagree with any provision of these Terms, you must immediately
                  cease access to and use of all Softzen services, delete any downloaded
                  software, and contact us to initiate any applicable offboarding process.
                  Continued use of our services after any update to these Terms shall
                  constitute your acceptance of the revised Terms.
                </p>
                <div className="notice-box">
                  <strong>Important Notice</strong>
                  <p>
                    If you do not agree with these Terms, you must immediately discontinue
                    the use of all Softzen products and services. Access or use after
                    notification of these Terms constitutes irrevocable acceptance.
                  </p>
                </div>
              </div>

              {/* 2 */}
              <div className="legal-card" id="definitions">
                <h2>2. Definitions</h2>
                <p>
                  For the purposes of these Terms, the following capitalized terms shall
                  have the meanings ascribed to them below. Unless the context otherwise
                  requires, singular terms include the plural and vice versa.
                </p>
                <ul>
                  <li>
                    <strong>"Services"</strong> means all software products, SaaS
                    platforms, cloud infrastructure, APIs, mobile applications, AI
                    solutions, professional services, consulting, implementation,
                    training, support and any other offerings provided by Softzen,
                    whether currently available or released in the future.
                  </li>
                  <li>
                    <strong>"Platform"</strong> means Softzen's proprietary cloud-hosted
                    or on-premise software environment through which the Services are
                    delivered, accessed or operated.
                  </li>
                  <li>
                    <strong>"Subscription"</strong> means a time-bound, paid or trial
                    license to access and use the Services, subject to payment of
                    applicable fees and compliance with these Terms.
                  </li>
                  <li>
                    <strong>"Customer Data"</strong> means any data, records, files,
                    content or information that the Customer or its authorized users
                    upload, submit, transmit or otherwise input into the Platform.
                  </li>
                  <li>
                    <strong>"Authorized User"</strong> means any individual employee,
                    contractor, agent or representative of the Customer who has been
                    granted access credentials to the Services by the Customer or by
                    Softzen on the Customer's behalf.
                  </li>
                  <li>
                    <strong>"Intellectual Property"</strong> means all patents, copyrights,
                    trademarks, trade secrets, know-how, source code, object code,
                    algorithms, methodologies, designs, user interfaces, documentation and
                    all other proprietary rights recognized under applicable law.
                  </li>
                  <li>
                    <strong>"Order Form"</strong> means a written or electronic agreement
                    specifying the Services subscribed to, subscription term, pricing,
                    payment terms and any special conditions, executed by both parties.
                  </li>
                  <li>
                    <strong>"Confidential Information"</strong> means any non-public
                    information disclosed by one party to the other in connection with
                    these Terms that is designated as confidential or that reasonably
                    should be understood to be confidential given the nature of the
                    information and circumstances of disclosure.
                  </li>
                  <li>
                    <strong>"AI Services"</strong> means any artificial intelligence,
                    machine learning, natural language processing, predictive analytics,
                    generative or inferential features embedded in or offered as part of
                    the Softzen Platform.
                  </li>
                  <li>
                    <strong>"School ERP"</strong> means Softzen's education resource
                    planning platform designed for schools, colleges, universities and
                    educational institutions.
                  </li>
                  <li>
                    <strong>"API"</strong> means the application programming interfaces,
                    webhooks, SDKs or other technical interfaces provided by Softzen for
                    programmatic integration with the Services.
                  </li>
                  <li>
                    <strong>"Fees"</strong> means all charges payable by the Customer
                    for the Services, including subscription fees, implementation fees,
                    consulting fees, training fees, customization fees, migration fees
                    and any other amounts specified in an Order Form or invoice.
                  </li>
                </ul>
              </div>

              {/* 3 */}
              <div className="legal-card" id="eligibility">
                <h2>3. Eligibility</h2>
                <p>
                  The Services are intended for use by legal entities and business
                  organizations including but not limited to private limited companies,
                  public limited companies, limited liability partnerships, sole
                  proprietorships, partnership firms, educational institutions,
                  government bodies and non-governmental organizations. Individual
                  consumer use is subject to Softzen's prior written consent.
                </p>
                <p>
                  By accepting these Terms, you represent and warrant that: (a) you are
                  at least 18 years of age; (b) you have the legal authority to enter
                  into binding contracts; (c) you are not prohibited by applicable law
                  from accessing or using the Services; (d) if acting on behalf of a
                  legal entity, you have full authority to bind that entity; and (e) all
                  information provided during registration or procurement is accurate,
                  current and complete.
                </p>
                <p>
                  Softzen reserves the right to refuse service, terminate accounts or
                  cancel subscriptions at its sole discretion if it determines that an
                  applicant or Customer does not meet the eligibility requirements set
                  forth herein or if such Customer's use of the Services poses a legal,
                  reputational or operational risk to Softzen.
                </p>
              </div>

              {/* 4 */}
              <div className="legal-card" id="account-registration">
                <h2>4. Account Registration</h2>
                <p>
                  Access to and use of the Services requires the creation of an
                  organizational account ("Account") through Softzen's onboarding
                  process. During registration you must provide accurate, complete and
                  up-to-date information about your organization including its legal
                  name, registered address, contact details, authorized administrator
                  identity and any other information Softzen may require for KYC,
                  contractual or compliance purposes.
                </p>
                <p>
                  You are solely responsible for maintaining the confidentiality and
                  security of your Account credentials, including usernames, passwords,
                  two-factor authentication codes and API keys. You agree not to share
                  credentials with unauthorized individuals, not to use automated tools
                  to access your Account in an unauthorized manner, and to take all
                  reasonable security precautions to protect your Account from
                  unauthorized access.
                </p>
                <p>
                  You acknowledge that you are fully responsible for all activities
                  conducted under your Account, whether or not authorized by you, until
                  you notify Softzen in writing of any suspected or confirmed
                  unauthorized access or security breach. Softzen shall not be liable
                  for any loss or damage arising from unauthorized use of your Account
                  credentials where such unauthorized use was not directly caused by
                  Softzen's negligence.
                </p>
                <ul>
                  <li>Maintain accurate and current registration information at all times.</li>
                  <li>Protect login credentials and immediately report unauthorized access.</li>
                  <li>Designate only qualified and authorized personnel as Account administrators.</li>
                  <li>Revoke access credentials of terminated employees or contractors promptly.</li>
                  <li>Ensure that the number of Authorized Users does not exceed the limits of your subscription plan.</li>
                  <li>Cooperate with Softzen's reasonable requests for identity verification.</li>
                </ul>
              </div>

              {/* 5 */}
              <div className="legal-card" id="user-responsibilities">
                <h2>5. User Responsibilities</h2>
                <p>
                  Each Customer and Authorized User is solely responsible for their
                  conduct while using the Services and for ensuring that their use
                  complies at all times with these Terms, applicable law, and any
                  relevant industry standards or regulations. Softzen acts solely as a
                  technology provider and is not responsible for how Customers use the
                  Services or what business decisions they make based on information
                  derived from the Services.
                </p>
                <p>
                  Customers are responsible for training their Authorized Users on the
                  proper and lawful use of the Services. Customers must ensure that all
                  content, data and information uploaded to the Platform complies with
                  applicable law and does not infringe upon the rights of any third
                  party. Customers must also ensure that they have all necessary rights,
                  licenses and consents required to upload, process and use Customer Data
                  within the Platform.
                </p>
                <p>
                  Customers must not use the Services in any manner that could damage,
                  disable, overburden or impair the Platform, or interfere with any other
                  party's use of the Services. Customers must comply with all rate limits,
                  usage quotas and technical guidelines prescribed by Softzen from time
                  to time. Violation of any user responsibility may result in immediate
                  suspension or termination of the Account.
                </p>
              </div>

              {/* 6 */}
              <div className="legal-card" id="services-overview">
                <h2>6. Services Overview</h2>
                <p>
                  Softzen Technology develops, operates and maintains a comprehensive
                  suite of enterprise-grade software products and technology services
                  designed to serve businesses, educational institutions, government
                  bodies and other organizations. Our offerings span multiple technology
                  domains and are continuously evolving to address the needs of our
                  customers.
                </p>
                <p>
                  The Services are delivered primarily through a cloud-based SaaS model,
                  with select offerings available for on-premise or hybrid deployment
                  subject to separate licensing agreements. Feature availability, storage
                  limits, user capacity and performance specifications may vary based on
                  the specific subscription tier, deployment model and applicable
                  Order Form.
                </p>
                <ul>
                  <li><strong>Enterprise ERP Solutions</strong> — End-to-end resource planning software for manufacturing, retail, logistics and services industries.</li>
                  <li><strong>School ERP Platform</strong> — Comprehensive academic management, admissions, fee management, payroll, timetable and examination management systems for educational institutions.</li>
                  <li><strong>HRMS Platform</strong> — Human resource management, attendance, leave, payroll, performance and compliance management solutions.</li>
                  <li><strong>CRM Platform</strong> — Customer relationship management, sales pipeline, marketing automation and service desk solutions.</li>
                  <li><strong>AI &amp; Analytics Services</strong> — Artificial intelligence, machine learning, business intelligence and predictive analytics integrated within the Platform.</li>
                  <li><strong>Custom SaaS Development</strong> — Bespoke software application design, development, testing, deployment and maintenance services.</li>
                  <li><strong>Cloud Infrastructure &amp; Hosting</strong> — Managed cloud infrastructure, server management, database administration and DevOps services.</li>
                  <li><strong>API &amp; Integration Services</strong> — Programmatic access and integration capabilities to connect the Platform with third-party systems.</li>
                  <li><strong>Professional Services</strong> — Implementation, onboarding, data migration, configuration, consulting and training services.</li>
                </ul>
                <p>
                  Softzen reserves the right to add, modify, discontinue or retire any
                  feature, product or service at any time with reasonable prior notice
                  where practicable. Discontinuation of a service that forms a material
                  part of a paid subscription will be handled in accordance with the
                  applicable service agreement.
                </p>
              </div>

              {/* 7 */}
              <div className="legal-card" id="saas-subscription">
                <h2>7. SaaS Subscription</h2>
                <p>
                  Softzen offers the Services on a subscription basis with subscription
                  terms, user limits, feature entitlements and pricing as specified in
                  the applicable Order Form or pricing page at the time of purchase.
                  Subscriptions are granted on a per-organization basis unless otherwise
                  specified and may not be transferred to another organization without
                  Softzen's prior written consent.
                </p>
                <p>
                  Subscriptions commence on the activation date specified in the Order
                  Form or, if no such date is specified, on the date Softzen first
                  provides access credentials to the Customer. Subscriptions renew
                  automatically unless either party provides written notice of
                  non-renewal in accordance with Section 28 of these Terms.
                </p>
                <p>
                  Softzen may offer multiple subscription tiers (e.g., Starter,
                  Professional, Enterprise) with different feature sets, usage limits
                  and support levels. Upgrading to a higher tier takes effect immediately
                  and the Customer will be charged the pro-rated difference for the
                  remainder of the current billing cycle. Downgrading to a lower tier
                  takes effect at the start of the next billing cycle.
                </p>
                <p>
                  Softzen reserves the right to modify subscription pricing with not
                  less than thirty (30) days' prior written notice to existing
                  Customers. Price changes shall apply to the subsequent renewal cycle
                  and shall not affect the current prepaid subscription period. Continued
                  use of the Services following the effective date of a price change
                  shall constitute the Customer's acceptance of the revised pricing.
                </p>
              </div>

              {/* 8 */}
              <div className="legal-card" id="license-grant">
                <h2>8. License Grant</h2>
                <p>
                  Subject to the Customer's compliance with these Terms and timely
                  payment of all applicable Fees, Softzen hereby grants the Customer a
                  limited, non-exclusive, non-transferable, non-sublicensable, revocable
                  license to access and use the Services solely for the Customer's own
                  internal business purposes during the subscription term specified in
                  the applicable Order Form.
                </p>
                <p>
                  This license does not include the right to: (a) copy, modify, adapt,
                  translate or create derivative works of the Services or any component
                  thereof; (b) reverse engineer, disassemble, decompile or otherwise
                  attempt to derive the source code, structure, algorithms or
                  architecture of any part of the Services; (c) sublicense, sell, resell,
                  transfer, assign or otherwise commercialize the Services or access
                  thereto; (d) use the Services to build a competing product or service;
                  or (e) remove or alter any proprietary notices, labels or trademarks
                  displayed within the Services.
                </p>
                <p>
                  Softzen retains full ownership of and all rights, title and interest in
                  and to the Services, including all underlying software, source code,
                  object code, databases, algorithms, methodologies, user interfaces,
                  documentation and all enhancements or modifications thereto. No
                  provision of these Terms transfers any ownership right, title or
                  interest in the Services to the Customer. The license granted herein is
                  the full extent of the Customer's rights in the Services and shall
                  automatically terminate upon expiration or termination of the
                  applicable subscription.
                </p>
              </div>

              {/* 9 */}
              <div className="legal-card" id="acceptable-use">
                <h2>9. Acceptable Use Policy</h2>
                <p>
                  The Services are provided for lawful business and organizational
                  purposes only. Customers and their Authorized Users must use the
                  Services in a manner consistent with these Terms, all applicable laws
                  and regulations, and Softzen's operational guidelines as amended from
                  time to time. Softzen's Acceptable Use Policy is designed to protect
                  the integrity, availability and security of the Platform and to ensure
                  a fair and lawful experience for all users.
                </p>
                <p>
                  Acceptable use includes but is not limited to: processing legitimate
                  business transactions and records within the scope of the subscribed
                  Service; managing organizational data in compliance with applicable
                  data protection laws; integrating with third-party systems via
                  authorized APIs within documented rate limits; and using AI-generated
                  outputs as advisory inputs subject to human review and verification.
                </p>
                <p>
                  Customers must not use the Services in any manner that: imposes an
                  unreasonable or disproportionate load on Softzen's infrastructure;
                  circumvents any technical or contractual access controls; involves
                  the processing of data that the Customer does not have lawful authority
                  to process; or constitutes a violation of any third party's legal
                  rights. Softzen may monitor usage patterns for compliance purposes and
                  may throttle, suspend or terminate access for policy violations.
                </p>
              </div>

              {/* 10 */}
              <div className="legal-card" id="prohibited-activities">
                <h2>10. Prohibited Activities</h2>
                <p>
                  The following activities are strictly prohibited in connection with
                  the use of any Softzen service. Violation of any of these prohibitions
                  may result in immediate suspension or permanent termination of the
                  Customer's Account without notice or refund, and may expose the
                  Customer to civil and/or criminal liability:
                </p>
                <ul>
                  <li>Reverse engineering, decompiling, disassembling or attempting to derive the source code, algorithms, data models or internal architecture of any part of the Services.</li>
                  <li>Reselling, sublicensing, leasing, lending, time-sharing or otherwise commercializing access to the Services without Softzen's express prior written authorization.</li>
                  <li>Redistributing, publishing or otherwise making the Services or any component thereof available to any unauthorized third party.</li>
                  <li>Using the Services to develop, test or operate a competing software product or service.</li>
                  <li>Accessing the Services through unauthorized scripts, bots, crawlers or automated tools that circumvent rate limits or access controls.</li>
                  <li>Uploading, transmitting or distributing malicious code, viruses, ransomware, spyware or any software designed to damage, disrupt or gain unauthorized access to systems.</li>
                  <li>Conducting penetration tests, vulnerability scans or security assessments of the Platform without prior written approval from Softzen's security team.</li>
                  <li>Using the Services to process, store or transmit data that is illegal, defamatory, obscene, fraudulent or that infringes the intellectual property rights of any third party.</li>
                  <li>Circumventing, disabling or interfering with any authentication, authorization, encryption or access control mechanism of the Platform.</li>
                  <li>Misrepresenting your identity, organizational affiliation or authorization level when accessing the Services.</li>
                  <li>Using the Services to engage in phishing, social engineering or other deceptive practices targeting Softzen employees, other customers or third parties.</li>
                  <li>Exploiting any error, vulnerability or unintended feature of the Platform for unauthorized purposes, and failing to promptly report such vulnerabilities to Softzen's security team.</li>
                  <li>Using the Services in violation of any applicable export control, sanctions, anti-bribery or anti-corruption law.</li>
                </ul>
              </div>

              {/* 11 */}
              <div className="legal-card" id="customer-responsibilities">
                <h2>11. Customer Responsibilities</h2>
                <p>
                  The Customer acknowledges and agrees that successful deployment and
                  beneficial use of the Services requires active cooperation and
                  fulfillment of certain obligations on the Customer's part. Softzen's
                  ability to deliver the Services is contingent upon the Customer
                  meeting these responsibilities in a timely and complete manner.
                </p>
                <p>
                  The Customer is responsible for providing Softzen with accurate and
                  complete information, access and cooperation reasonably required to
                  perform implementation, migration, integration or support services.
                  Delays, errors or failures caused by the Customer's failure to fulfill
                  these responsibilities shall not constitute a breach by Softzen and
                  may result in additional fees for remediation or schedule extension.
                </p>
                <ul>
                  <li>Designating a qualified project manager or implementation coordinator to liaise with Softzen throughout the engagement.</li>
                  <li>Ensuring that Customer's IT environment, network, hardware and third-party systems meet Softzen's technical prerequisites as communicated during onboarding.</li>
                  <li>Providing timely review and sign-off on deliverables, configurations and test results within agreed timelines.</li>
                  <li>Training end users on the proper use of the Services prior to go-live.</li>
                  <li>Maintaining up-to-date browser versions, operating systems and network configurations compatible with the Platform.</li>
                  <li>Ensuring that Customer Data uploaded to the Platform complies with applicable data privacy, protection and localization laws.</li>
                  <li>Obtaining all third-party consents and authorizations required for data migration, API integrations and use of the Services.</li>
                  <li>Implementing and maintaining appropriate internal access controls over Authorized Users.</li>
                </ul>
              </div>

              {/* 12 */}
              <div className="legal-card" id="school-erp">
                <h2>12. School ERP Terms</h2>
                <p>
                  Softzen's School ERP platform is a technology solution designed to
                  assist educational institutions in managing administrative and
                  operational functions including student admissions, attendance,
                  examination records, fee collection, timetable management, library
                  management, payroll, and communication. Softzen provides the School
                  ERP solely as a technology platform and does not participate in,
                  influence or bear any responsibility for any academic, administrative,
                  financial or regulatory decisions made by the institution using the
                  platform.
                </p>
                <p>
                  The educational institution is solely responsible for the accuracy,
                  legality and completeness of all data entered into the School ERP
                  platform, including but not limited to student records, staff records,
                  fee structures, examination results, payroll data, and compliance
                  reports. Softzen makes no representation that the School ERP platform
                  meets the specific regulatory requirements of any particular state
                  board, central board, university, accreditation body or government
                  authority, and it is the institution's sole responsibility to ensure
                  regulatory compliance.
                </p>
                <p>
                  Softzen is not responsible for: (a) errors in examination results,
                  grades or transcripts arising from incorrect data entry by institution
                  staff; (b) admissions decisions, seat allocations or merit calculations
                  made using the platform; (c) payroll calculations including salary
                  disbursements, provident fund, income tax deductions or other statutory
                  benefits — these remain the institution's responsibility; (d) student
                  or parent data sharing in violation of applicable privacy laws caused
                  by improper access control configuration by the institution; or (e)
                  any regulatory non-compliance arising from the institution's use of
                  the platform in a manner inconsistent with applicable law.
                </p>
                <p>
                  Data processed within the School ERP platform on behalf of students,
                  parents and staff is processed by Softzen as a data processor acting
                  on the instructions of the institution as data controller, in
                  accordance with Softzen's Data Processing Agreement and Privacy Policy.
                  Educational institutions must ensure that all data processing activities
                  conducted via the platform comply with applicable data protection laws,
                  including but not limited to the Digital Personal Data Protection Act,
                  2023 (India) and any other applicable regional legislation.
                </p>
              </div>

              {/* 13 */}
              <div className="legal-card" id="ai-disclaimer">
                <h2>13. AI Services Disclaimer</h2>
                <p>
                  Softzen's AI Services, including but not limited to predictive
                  analytics, natural language processing, automated recommendations,
                  generative content features and intelligent automation, are provided as
                  technology tools to assist Customers in processing information and
                  making informed decisions. Customers expressly acknowledge and agree
                  that AI-generated outputs are probabilistic in nature and may contain
                  inaccuracies, errors, biases or omissions.
                </p>
                <p>
                  All AI-generated outputs, recommendations, analyses, reports, summaries
                  or decisions produced by the Services must be independently reviewed,
                  validated and verified by qualified human personnel before being relied
                  upon for any business, financial, legal, medical, academic, regulatory
                  or operational purpose. Softzen explicitly disclaims any liability
                  arising from Customer's reliance on unverified AI outputs.
                </p>
                <p>
                  Customers must not use AI Services for purposes that require absolute
                  accuracy, that involve critical infrastructure, that impact individual
                  legal rights, or that require decisions to be solely automated without
                  human oversight, except where the Customer has independently validated
                  the accuracy and fitness of the AI output for such purpose and accepts
                  all associated risks. Softzen shall not be liable for any decisions,
                  damages or outcomes resulting from the Customer's use of AI Services,
                  whether the output is accurate, inaccurate, incomplete or misleading.
                </p>
                <p>
                  Softzen continuously improves its AI models and may update, retrain,
                  retune or replace AI models used within the Platform at any time.
                  Such updates may change the behavior, output format or accuracy of AI
                  Services. Softzen will provide reasonable advance notice of material
                  changes to AI Service behavior where practicable but does not guarantee
                  backward compatibility of AI outputs across model versions.
                </p>
              </div>

              {/* 14 */}
              <div className="legal-card" id="enterprise-software">
                <h2>14. Enterprise Software Terms</h2>
                <p>
                  Enterprise software products offered by Softzen, including ERP, CRM,
                  HRMS and other multi-module business applications, are complex systems
                  requiring professional implementation, proper configuration, staff
                  training and ongoing maintenance to function effectively. The Customer
                  acknowledges that enterprise software implementation inherently involves
                  significant effort from both Softzen and the Customer, and that the
                  success of the implementation depends substantially on the Customer's
                  active participation, timely decision-making and organizational
                  readiness.
                </p>
                <p>
                  Softzen provides enterprise software on an "as-is" basis after
                  successful acceptance testing and go-live sign-off by the Customer.
                  Post-go-live support is subject to the applicable support plan
                  purchased by the Customer. Softzen shall not be responsible for issues
                  arising from: (a) customizations made by the Customer or third parties
                  without Softzen's authorization; (b) failure to apply recommended
                  patches or updates; (c) use of the software on unsupported
                  infrastructure; or (d) integration with third-party systems not
                  certified by Softzen.
                </p>
                <p>
                  Softzen is not responsible for any business decisions, financial
                  outcomes, HR decisions, payroll calculations, tax filings, regulatory
                  submissions, or operational outcomes resulting from the Customer's use
                  of enterprise software. The software is a tool and its outputs depend
                  entirely on the accuracy of the data and configurations provided by
                  the Customer. Customers must maintain appropriate internal controls,
                  audit processes and human oversight over all enterprise software
                  outputs.
                </p>
              </div>

              {/* 15 */}
              <div className="legal-card" id="api-usage">
                <h2>15. API Usage Policy</h2>
                <p>
                  Softzen provides APIs to enable programmatic integration between the
                  Services and the Customer's internal systems or approved third-party
                  applications. API access is granted subject to these Terms, the
                  applicable subscription plan, documented rate limits and any separate
                  API licensing agreement. All API usage must be conducted within the
                  technical and contractual limits established by Softzen.
                </p>
                <p>
                  The Customer shall not: (a) use the API to access data or functionality
                  beyond the scope of the Customer's subscription; (b) share API keys
                  with unauthorized parties; (c) use the API to build products or
                  services that compete with Softzen; (d) use the API in a manner that
                  exceeds documented rate limits or adversely impacts Platform
                  performance; or (e) conduct automated bulk data extraction using the
                  API for any purpose not authorized by Softzen in writing.
                </p>
                <p>
                  Softzen reserves the right to modify, deprecate or discontinue any
                  API endpoint, version or functionality with reasonable prior notice.
                  Softzen shall not be liable for any disruption to the Customer's
                  systems or workflows resulting from API deprecation or modification
                  where reasonable advance notice was provided. Customers are responsible
                  for maintaining their integrations in alignment with Softzen's current
                  API documentation and versioning policy.
                </p>
                <p>
                  Unauthorized API access, attempts to circumvent API authentication,
                  or use of the API in violation of this Policy shall constitute a
                  material breach of these Terms and may result in immediate suspension
                  of API access, Account termination and pursuit of applicable legal
                  remedies.
                </p>
              </div>

              {/* 16 */}
              <div className="legal-card" id="custom-dev">
                <h2>16. Custom Development Services</h2>
                <p>
                  Softzen offers custom software development services including design,
                  development, testing, integration, deployment and maintenance of
                  bespoke software applications, modules, plugins and integrations,
                  as detailed in applicable Statements of Work (SOW). Custom development
                  engagements are governed by these Terms together with the specific SOW,
                  which shall prevail in the event of a conflict with respect to the
                  subject matter of the custom development.
                </p>
                <p>
                  Unless the applicable SOW expressly provides for transfer of
                  intellectual property ownership to the Customer, all work product,
                  source code, documentation, designs, frameworks and tools developed or
                  used by Softzen in the course of a custom development engagement shall
                  remain the exclusive intellectual property of Softzen. The Customer
                  shall receive a limited license to use the deliverables as specified in
                  the SOW and these Terms.
                </p>
                <p>
                  Custom development fees, including deposits, milestone payments and
                  final payments, are non-refundable upon payment, as the work reflects
                  dedicated human and technical resources allocated exclusively to the
                  Customer's project. Scope changes requested by the Customer after
                  SOW execution may result in additional charges and timeline revisions
                  subject to Softzen's change order process. Softzen shall not be
                  liable for delays caused by the Customer's failure to provide timely
                  inputs, approvals or access.
                </p>
              </div>

              {/* 17 */}
              <div className="legal-card" id="professional-services">
                <h2>17. Professional Services</h2>
                <p>
                  Softzen's professional services include implementation, onboarding,
                  configuration, data migration, training, consulting and project
                  management services. These services are provided by Softzen's
                  qualified implementation specialists and consultants and are designed
                  to help Customers successfully deploy and adopt the Services within
                  their organizations.
                </p>
                <p>
                  Professional services are charged at rates specified in the applicable
                  Order Form or SOW and are billed either on a fixed-price project basis
                  or on a time-and-materials basis, as agreed. Professional services
                  fees are non-refundable upon commencement of the engagement, as
                  Softzen incurs resource costs from the moment services are initiated.
                  Unused professional services hours purchased in a bundle shall expire
                  as specified in the Order Form.
                </p>
                <p>
                  While Softzen will exercise professional care and skill in delivering
                  professional services, Softzen does not warrant that professional
                  services will meet the Customer's specific requirements or achieve
                  particular business outcomes. Recommendations made during consulting
                  engagements are advisory in nature, and the Customer retains sole
                  responsibility for business decisions made based on such
                  recommendations. Softzen shall not be liable for outcomes resulting
                  from the Customer's implementation of or failure to implement advisory
                  recommendations.
                </p>
              </div>

              {/* 18 */}
              <div className="legal-card" id="ip-rights">
                <h2>18. Intellectual Property Rights</h2>
                <p>
                  Softzen Technology retains sole and exclusive ownership of all
                  intellectual property rights in and to the Services, including but
                  not limited to all software source code, object code, compiled
                  binaries, proprietary algorithms, data models, machine learning models,
                  neural network architectures, APIs, databases, database schemas,
                  application frameworks, user interfaces, user experience designs,
                  documentation, training materials, methodologies, know-how, trade
                  secrets and all improvements, modifications and derivative works
                  thereof, whether created by Softzen alone or in collaboration with
                  the Customer.
                </p>
                <p>
                  Any feedback, suggestions, ideas, enhancement requests or
                  recommendations provided by the Customer or its Authorized Users
                  regarding the Services ("Feedback") shall become the sole property
                  of Softzen. The Customer hereby irrevocably assigns to Softzen all
                  right, title and interest in and to any Feedback, and Softzen shall
                  be free to use Feedback for any purpose without restriction or
                  compensation to the Customer.
                </p>
                <p>
                  The Customer shall promptly notify Softzen in writing of any actual
                  or suspected infringement of Softzen's intellectual property rights
                  that comes to the Customer's attention. The Customer shall cooperate
                  with Softzen in the investigation and enforcement of such infringement
                  claims and shall not take any independent action to enforce Softzen's
                  intellectual property rights without Softzen's prior written consent.
                </p>
                <p>
                  The Customer expressly acknowledges that nothing in these Terms grants
                  the Customer any right to the source code of the Services under any
                  circumstances, including upon expiration or termination of the
                  subscription. The Customer's license is strictly limited to using the
                  Services through the user interface or API as provided by Softzen.
                </p>
              </div>

              {/* 19 */}
              <div className="legal-card" id="trademarks">
                <h2>19. Trademarks</h2>
                <p>
                  "Softzen Technology", "Softzen", the Softzen logo and all product
                  names, service names, slogans and taglines associated with Softzen's
                  products and services are trademarks, service marks or registered
                  trademarks of Softzen Technology (collectively, "Softzen Marks").
                  All rights in and to the Softzen Marks are reserved by Softzen.
                </p>
                <p>
                  Customers may not use the Softzen Marks in any manner, including in
                  connection with any product, service, domain name, social media
                  profile or advertisement, without Softzen's prior written consent.
                  Authorized use of Softzen Marks is permitted solely in accordance
                  with Softzen's Trademark Usage Guidelines as published and updated
                  from time to time. Customers may identify themselves as Softzen
                  customers in factual, non-misleading statements subject to these
                  guidelines.
                </p>
                <p>
                  All other trademarks, trade names and logos appearing within the
                  Services that are not owned by Softzen are the property of their
                  respective owners. Softzen's use of third-party trademarks within the
                  Platform does not imply any affiliation, endorsement or sponsorship
                  by or with those trademark owners.
                </p>
              </div>

              {/* 20 */}
              <div className="legal-card" id="customer-data">
                <h2>20. Customer Data Ownership</h2>
                <p>
                  As between Softzen and the Customer, the Customer retains all
                  ownership rights in and to the Customer Data that the Customer and its
                  Authorized Users upload, submit or otherwise provide to the Platform.
                  Softzen claims no ownership interest in Customer Data and does not sell,
                  rent, trade or monetize Customer Data to third parties.
                </p>
                <p>
                  The Customer grants Softzen a limited, worldwide, royalty-free,
                  non-exclusive license to store, process, transmit, display and use
                  Customer Data solely to the extent necessary to provide the Services,
                  fulfill Softzen's obligations under these Terms, comply with applicable
                  law and enforce Softzen's rights. This license terminates upon
                  expiration or termination of the subscription, subject to applicable
                  data retention obligations.
                </p>
                <p>
                  Softzen may use aggregated, anonymized and de-identified data derived
                  from Customer Data (which cannot be used to identify the Customer or
                  any individual) for the purpose of improving the Services, developing
                  new features, training AI models and conducting internal analytics.
                  Such aggregated data shall be owned by Softzen and shall not constitute
                  Customer Data for the purposes of these Terms.
                </p>
                <p>
                  Upon termination or expiration of the subscription, Softzen will
                  provide the Customer with a reasonable opportunity to export Customer
                  Data in a standard format as specified by Softzen prior to deletion.
                  Following the applicable data retention period, Softzen will securely
                  delete or anonymize Customer Data in accordance with its data
                  retention policy.
                </p>
              </div>

              {/* 21 */}
              <div className="legal-card" id="privacy">
                <h2>21. Privacy</h2>
                <p>
                  Softzen's collection, use, storage, processing and disclosure of
                  personal data is governed by Softzen's Privacy Policy, which is
                  incorporated into these Terms by reference. By using the Services, the
                  Customer acknowledges that it has read and understood Softzen's Privacy
                  Policy and consents to the data practices described therein.
                </p>
                <p>
                  Customers who are subject to data protection laws such as the Digital
                  Personal Data Protection Act, 2023 (India), the General Data Protection
                  Regulation (EU) or other applicable privacy legislation must ensure that
                  their use of the Services, including the submission of personal data
                  to the Platform, complies with all applicable data protection
                  obligations. Softzen will cooperate with Customers in executing
                  appropriate data processing agreements where required by applicable law.
                </p>
                <p>
                  Customers are responsible for obtaining all necessary consents from
                  data subjects (including employees, students, parents, customers and
                  other individuals whose personal data is processed via the Platform)
                  prior to uploading such data to the Services. Softzen shall not be
                  liable for any failure by the Customer to obtain required consents or
                  to comply with applicable data protection obligations.
                </p>
              </div>

              {/* 22 */}
              <div className="legal-card" id="security">
                <h2>22. Security</h2>
                <p>
                  Softzen implements commercially reasonable administrative, physical
                  and technical security measures designed to protect the Services and
                  Customer Data from unauthorized access, disclosure, alteration or
                  destruction. These measures include but are not limited to encryption
                  in transit and at rest, access control mechanisms, intrusion detection
                  systems, vulnerability management programs, regular security assessments
                  and security awareness training for Softzen personnel.
                </p>
                <p>
                  However, Customers expressly acknowledge and agree that no security
                  system is impenetrable and that Softzen cannot guarantee absolute
                  security of the Platform or Customer Data against all possible security
                  threats, including sophisticated cyberattacks, zero-day vulnerabilities,
                  insider threats or force majeure events. Softzen shall not be liable
                  for unauthorized access to, or alteration, theft or destruction of,
                  Customer Data except to the extent caused directly by Softzen's gross
                  negligence or wilful misconduct.
                </p>
                <p>
                  In the event of a confirmed security breach that materially affects
                  Customer Data, Softzen will notify affected Customers within the
                  timeframe required by applicable law and will cooperate with Customers
                  in mitigating the impact of such breach to the extent within Softzen's
                  reasonable control. Customers must promptly notify Softzen of any
                  suspected security incidents related to the Services at
                  security@softzen.in.
                </p>
              </div>

              {/* 23 */}
              <div className="legal-card" id="data-processing">
                <h2>23. Data Processing</h2>
                <p>
                  Where Softzen processes personal data on behalf of the Customer in
                  the context of providing the Services, Softzen acts as a data processor
                  and the Customer acts as a data controller within the meaning of
                  applicable data protection law. In such capacity, Softzen will process
                  personal data only on documented instructions from the Customer,
                  will implement appropriate security measures as described in Section 22,
                  and will assist the Customer in meeting its data subject rights
                  obligations to the extent technically feasible.
                </p>
                <p>
                  Softzen will not process Customer Data for any purpose other than
                  providing and improving the Services, complying with legal obligations,
                  and exercising Softzen's rights under these Terms. Softzen will ensure
                  that its personnel who process Customer Data are bound by appropriate
                  confidentiality obligations.
                </p>
                <p>
                  Softzen may engage sub-processors (including cloud infrastructure
                  providers, payment processors and other technology partners) to assist
                  in providing the Services. Softzen will maintain an up-to-date list
                  of sub-processors and will notify Customers of any material changes to
                  its sub-processor arrangements with reasonable advance notice. Softzen
                  will ensure that sub-processors are bound by data protection obligations
                  no less protective than those imposed on Softzen under these Terms.
                </p>
              </div>

              {/* 24 */}
              <div className="legal-card" id="third-party">
                <h2>24. Third Party Integrations</h2>
                <p>
                  The Services may offer integrations, connectors or compatibility with
                  third-party applications, platforms, payment gateways, communication
                  tools, government portals and other external systems ("Third-Party
                  Services"). These integrations are provided as a convenience to
                  Customers and are subject to the terms, conditions and privacy policies
                  of the respective third-party providers.
                </p>
                <p>
                  Softzen does not endorse, control, warrant or assume any responsibility
                  for any Third-Party Services or the terms under which they are offered.
                  Customers are solely responsible for evaluating and complying with the
                  terms of any Third-Party Services they choose to integrate with the
                  Softzen Platform. Softzen shall not be liable for any disruption,
                  data breach, service failure or other issue arising from or related
                  to Third-Party Services.
                </p>
                <p>
                  Integration with Third-Party Services may require the Customer to
                  share Customer Data with the third-party provider. The Customer is
                  solely responsible for ensuring that such data sharing complies with
                  applicable law and the terms of applicable consent. Softzen is not
                  responsible for the data practices of Third-Party Service providers.
                  Where any Third-Party Service is deprecated, modified or discontinued,
                  Softzen will use reasonable efforts to provide alternative integration
                  options but does not guarantee continuity of any specific integration.
                </p>
              </div>

              {/* 25 */}
              <div className="legal-card" id="confidentiality">
                <h2>25. Confidentiality</h2>
                <p>
                  Each party (the "Receiving Party") agrees to hold in strict confidence
                  all Confidential Information of the other party (the "Disclosing Party")
                  and not to disclose such Confidential Information to any third party
                  without the Disclosing Party's prior written consent, except to the
                  Receiving Party's employees, contractors and advisors who have a
                  need to know such information for the purposes of these Terms and who
                  are bound by confidentiality obligations no less restrictive than those
                  set forth herein.
                </p>
                <p>
                  Confidential Information shall not include information that: (a) is or
                  becomes publicly available through no fault of the Receiving Party;
                  (b) was rightfully in the Receiving Party's possession before
                  disclosure by the Disclosing Party; (c) is independently developed by
                  the Receiving Party without use of or reference to the Disclosing
                  Party's Confidential Information; or (d) is required to be disclosed
                  by applicable law, court order or regulatory authority, provided that
                  the Receiving Party gives the Disclosing Party prompt written notice
                  of such requirement to the extent permitted by law and cooperates with
                  the Disclosing Party in seeking a protective order.
                </p>
                <p>
                  The Receiving Party shall use the Disclosing Party's Confidential
                  Information solely for the purpose of performing its obligations or
                  exercising its rights under these Terms, and shall implement reasonable
                  administrative, technical and physical safeguards to protect
                  Confidential Information from unauthorized access or disclosure.
                  Confidentiality obligations shall survive termination or expiration of
                  these Terms for a period of five (5) years.
                </p>
              </div>

              {/* 26 */}
              <div className="legal-card" id="payment-terms">
                <h2>26. Payment Terms</h2>
                <p>
                  All Fees for the Services are payable in accordance with the payment
                  schedule specified in the applicable Order Form or invoice. Unless
                  otherwise specified, subscription fees are payable in advance on an
                  annual or monthly basis, and professional services fees are payable
                  as specified in the applicable SOW or invoice. All amounts are
                  stated and payable in Indian Rupees (INR) unless otherwise agreed
                  in the Order Form.
                </p>
                <p>
                  Payment must be made within the credit period specified in the invoice
                  (which shall be not less than seven (7) days from the invoice date
                  unless otherwise agreed). Late payments shall attract interest at the
                  rate of two percent (2%) per month on the outstanding amount, calculated
                  from the due date until the date of actual payment. Softzen reserves
                  the right to suspend access to the Services for accounts with overdue
                  payments following reasonable notice.
                </p>
                <p>
                  All Fees are exclusive of applicable taxes, levies and duties unless
                  expressly stated otherwise. The Customer is responsible for paying all
                  applicable taxes as described in Section 27. Softzen reserves the right
                  to adjust its pricing with not less than thirty (30) days' prior written
                  notice. Pricing adjustments shall not apply to the current prepaid
                  subscription term but shall apply upon renewal.
                </p>
                <p>
                  Softzen accepts payments via bank transfer (NEFT/RTGS/IMPS), UPI,
                  cheque or such other payment methods as Softzen may make available
                  from time to time. Credit card and online payment options, where
                  available, may attract processing fees as disclosed at the time of
                  payment. Bounced cheques shall attract applicable banking charges in
                  addition to the outstanding invoice amount.
                </p>
              </div>

              {/* 27 */}
              <div className="legal-card" id="taxes">
                <h2>27. Taxes</h2>
                <p>
                  All Fees quoted by Softzen are exclusive of all applicable taxes
                  including but not limited to Goods and Services Tax (GST), Value Added
                  Tax, withholding tax, service tax, customs duty, excise duty and any
                  other tax, levy, surcharge or cess imposed by any governmental
                  authority ("Taxes"). The Customer is solely responsible for the
                  payment of all applicable Taxes in addition to the quoted Fees.
                </p>
                <p>
                  Softzen will issue tax-compliant GST invoices for all Services rendered
                  in India. The Customer must provide accurate GST registration details
                  (GSTIN) at the time of onboarding or account setup to enable correct
                  invoicing. Softzen shall not be responsible for any tax liabilities
                  arising from the Customer's failure to provide accurate tax registration
                  information.
                </p>
                <p>
                  Where applicable law requires the Customer to withhold taxes on
                  payments made to Softzen, the Customer shall: (a) deduct the required
                  withholding tax from the gross payment; (b) remit such withholding tax
                  to the appropriate tax authority; and (c) provide Softzen with an
                  official withholding tax certificate within thirty (30) days of payment.
                  The net payment received by Softzen after withholding shall not be less
                  than the agreed Fee, and the Customer shall gross-up the payment to
                  account for any withholding where required by applicable law.
                </p>
              </div>

              {/* 28 */}
              <div className="legal-card" id="subscription-renewal">
                <h2>28. Subscription Renewal</h2>
                <p>
                  All paid subscriptions to Softzen's Services shall automatically renew
                  at the end of each subscription term (monthly or annual) for a
                  successive equivalent period, unless either party provides written
                  notice of non-renewal to the other party not less than thirty (30) days
                  before the expiration of the then-current subscription term.
                </p>
                <p>
                  Upon automatic renewal, the Customer's subscription will be renewed at
                  Softzen's then-current pricing for the applicable subscription tier,
                  which may differ from the pricing applicable during the preceding term.
                  Softzen will send renewal reminder communications to the Customer's
                  registered email address before the renewal date. It is the Customer's
                  responsibility to update its payment details and ensure that payment
                  methods on file are valid and adequately funded prior to the renewal date.
                </p>
                <p>
                  If payment for renewal is not received within the applicable credit
                  period following the renewal date, Softzen may suspend access to the
                  Services pending payment resolution. Softzen shall not be liable for
                  any disruption to the Customer's operations resulting from a lapse in
                  subscription coverage due to the Customer's failure to ensure timely
                  payment at renewal.
                </p>
              </div>

              {/* 29 */}
              <div className="legal-card" id="cancellation">
                <h2>29. Cancellation Policy</h2>
                <p>
                  Customers may cancel their subscription at any time by providing
                  written notice to Softzen at least thirty (30) days before the end of
                  the then-current subscription term. Cancellation requests must be
                  submitted in writing to the Customer's dedicated account manager or to
                  support@softzen.in, and must include the Customer's account name,
                  subscription details and the requested cancellation effective date.
                </p>
                <p>
                  Upon cancellation, the Customer's subscription will remain active and
                  accessible until the end of the current paid subscription term. Softzen
                  does not offer prorated refunds for early cancellation of annual
                  subscriptions or any other subscription type. Customers who cancel
                  mid-term will retain access to the Services until the end of the
                  period for which Fees have been paid, after which access will be
                  automatically discontinued.
                </p>
                <p>
                  Following cancellation, the Customer will have a defined data export
                  window (typically thirty (30) days, unless otherwise specified by
                  Softzen) during which Customer Data may be exported. After this export
                  window expires, Softzen reserves the right to permanently delete all
                  Customer Data from the Platform in accordance with its data retention
                  policy. Customers are strongly advised to export all necessary data
                  before the cancellation effective date.
                </p>
              </div>

              {/* 30 */}
              <div className="legal-card" id="no-refund">
                <h2>30. Strict No Refund Policy</h2>
                <p>
                  ALL FEES PAID TO SOFTZEN TECHNOLOGY ARE STRICTLY NON-REFUNDABLE,
                  EXCEPT WHERE MANDATORY CONSUMER PROTECTION LAWS IN THE APPLICABLE
                  JURISDICTION EXPRESSLY REQUIRE OTHERWISE AND CANNOT BE CONTRACTUALLY
                  WAIVED. BY PROCEEDING WITH ANY PURCHASE, SUBSCRIPTION, OR ENGAGEMENT
                  WITH SOFTZEN, THE CUSTOMER EXPRESSLY ACKNOWLEDGES AND AGREES TO
                  THIS NO REFUND POLICY IN ITS ENTIRETY.
                </p>
                <p>
                  This No Refund Policy applies unconditionally to the following
                  categories of fees:
                </p>
                <ul>
                  <li><strong>Subscription Fees</strong> — All monthly, quarterly, annual or multi-year subscription fees, whether paid in full or in installments, are fully non-refundable once charged, regardless of whether the Customer uses the Services during the subscription period.</li>
                  <li><strong>Implementation &amp; Onboarding Fees</strong> — All fees charged for setup, onboarding, system configuration, go-live support and initial training are non-refundable once the implementation engagement has commenced, as these fees compensate for dedicated human resources allocated to the Customer's project.</li>
                  <li><strong>Customization &amp; Development Fees</strong> — All fees for custom features, module development, UI/UX customization, workflow automation, report development and any other bespoke development work are non-refundable upon payment of each milestone or invoice.</li>
                  <li><strong>Consulting Fees</strong> — All advisory, strategy, process design, architecture and business consulting fees are non-refundable once the consulting session or engagement has been initiated.</li>
                  <li><strong>Training Fees</strong> — All fees for instructor-led training, e-learning modules, training material creation and training delivery are non-refundable once training materials have been shared or a training session has commenced.</li>
                  <li><strong>Data Migration Fees</strong> — All fees for data extraction, transformation, cleansing, loading and migration validation are non-refundable once the migration process has commenced.</li>
                  <li><strong>API Access Fees</strong> — All fees associated with API access, API capacity increases and integration support are non-refundable once access has been provisioned.</li>
                  <li><strong>Add-On &amp; Module Fees</strong> — All fees for additional modules, features, user seats, storage capacity or functionality activated on the Customer's account are non-refundable from the date of activation.</li>
                  <li><strong>Annual Plan Pre-payments</strong> — Customers who choose to pay for annual subscriptions upfront in exchange for a discounted rate acknowledge that such payments are fully non-refundable under any circumstances including early cancellation, change of business circumstances, merger, acquisition or dissolution of the Customer's organization.</li>
                </ul>
                <p>
                  Refunds will not be issued in any of the following circumstances, without limitation: Customer's change of mind; Customer's failure to use the Services during the subscription period; Customer's dissatisfaction with features that were accurately represented prior to purchase; Customer's inability to integrate the Services with third-party systems; Customer's failure to onboard or train staff; technical issues caused by the Customer's own infrastructure or internet connectivity; or business decisions of the Customer that render the Services unnecessary.
                </p>
                <p>
                  In the exceptional and rare circumstance where Softzen, in its sole and absolute discretion, determines that a service failure directly attributable to Softzen's gross negligence or wilful default materially prevented the Customer from accessing the Services for a continuous period exceeding that specified in the applicable Service Level Agreement, Softzen may, at its election and as the Customer's sole and exclusive remedy, provide a service credit equal to the pro-rated subscription fee for the period of verified unavailability. Such service credits shall not be exchangeable for cash and shall expire at the end of the then-current subscription term.
                </p>
                <div className="notice-box">
                  <strong>No Refund — Final Notice</strong>
                  <p>
                    By making any payment to Softzen Technology, you confirm your
                    understanding and irrevocable acceptance that all such payments
                    are non-refundable in accordance with this policy.
                  </p>
                </div>
              </div>

              {/* 31 */}
              <div className="legal-card" id="suspension">
                <h2>31. Suspension of Service</h2>
                <p>
                  Softzen reserves the right to suspend the Customer's access to the
                  Services, in whole or in part, immediately and without prior notice
                  in any of the following circumstances: (a) non-payment or late payment
                  of any Fees; (b) material violation of these Terms, including the
                  Acceptable Use Policy or Prohibited Activities provisions; (c) suspected
                  or confirmed unauthorized access, security breach or fraudulent
                  activity associated with the Customer's Account; (d) use of the
                  Services in a manner that poses an immediate threat to the security,
                  integrity or availability of the Platform or other customers' accounts;
                  or (e) Softzen's compliance with a court order, regulatory directive
                  or other legal obligation requiring suspension.
                </p>
                <p>
                  In non-emergency situations, Softzen will endeavor to provide the
                  Customer with written notice and a reasonable opportunity to cure the
                  breach before implementing a suspension. During a suspension, the
                  Customer will be unable to access the Services, but Customer Data will
                  be retained in accordance with Softzen's data retention policy.
                  Subscription fees continue to accrue during any suspension period,
                  and no refunds or credits will be issued for the period of suspension
                  unless the suspension was caused solely by Softzen's error.
                </p>
                <p>
                  Softzen shall not be liable to the Customer or any third party for any
                  loss, damage, disruption or expense resulting from a service suspension
                  that is in accordance with these Terms. Customers who dispute a
                  suspension must submit a formal written dispute to Softzen within
                  fifteen (15) days of receiving the suspension notice, detailing the
                  grounds for the dispute and any supporting evidence.
                </p>
              </div>

              {/* 32 */}
              <div className="legal-card" id="termination">
                <h2>32. Account Termination</h2>
                <p>
                  Either party may terminate these Terms and the associated subscription
                  upon expiration of the subscription term by providing timely
                  non-renewal notice in accordance with Section 28. In addition, Softzen
                  may terminate these Terms and the Customer's access to the Services
                  immediately upon written notice in any of the following circumstances:
                  (a) the Customer commits a material breach of these Terms that is
                  either incapable of cure or that remains uncured for fifteen (15)
                  days following written notice of the breach; (b) the Customer becomes
                  insolvent, enters into liquidation, administration or receivership,
                  or is subject to any similar insolvency proceedings; (c) the Customer
                  engages in fraudulent activity in connection with the Services; or
                  (d) continuation of the Services would violate applicable law.
                </p>
                <p>
                  Upon termination of these Terms for any reason: (a) all licenses
                  granted to the Customer shall immediately terminate; (b) the Customer
                  must immediately cease all use of the Services; (c) all outstanding
                  Fees shall become immediately due and payable; (d) Softzen shall
                  provide the Customer with a data export window as described in Section
                  29; and (e) each party shall return or destroy the other party's
                  Confidential Information as directed.
                </p>
                <p>
                  Termination of these Terms shall not relieve the Customer of its
                  obligation to pay all Fees accrued prior to the termination date, nor
                  shall it affect any provisions of these Terms that by their nature
                  should survive termination, including but not limited to Sections 18
                  (Intellectual Property), 25 (Confidentiality), 30 (No Refund Policy),
                  40 (Indemnification), 41 (Warranty Disclaimer), 42 (Limitation of
                  Liability) and 44 (Governing Law).
                </p>
              </div>

              {/* 33 */}
              <div className="legal-card" id="beta">
                <h2>33. Beta Features</h2>
                <p>
                  From time to time, Softzen may invite Customers to participate in
                  beta testing programs or provide access to early-stage, experimental
                  or preview features ("Beta Features"). Beta Features are provided
                  on an "as-is" and "as-available" basis for evaluation purposes only
                  and may not be suitable for use in production environments.
                </p>
                <p>
                  Beta Features may contain errors, bugs, performance issues or
                  incomplete functionality. Softzen makes no warranties or
                  representations regarding the quality, reliability, accuracy or
                  fitness for purpose of Beta Features. Softzen reserves the right to
                  modify, discontinue or remove any Beta Feature at any time without
                  notice or liability. Beta Features that are discontinued will not
                  entitle the Customer to any refund or credit.
                </p>
                <p>
                  Customer Data processed through Beta Features may be subject to
                  different data handling practices. Customers should exercise caution
                  when using Beta Features with sensitive or production-critical data.
                  Feedback provided to Softzen regarding Beta Features shall be treated
                  as Feedback under Section 18 and shall become Softzen's exclusive
                  property.
                </p>
              </div>

              {/* 34 */}
              <div className="legal-card" id="availability">
                <h2>34. Service Availability</h2>
                <p>
                  Softzen targets high availability for its cloud-based Services and
                  endeavors to make the Services available in accordance with the uptime
                  commitments set forth in the applicable Service Level Agreement (SLA),
                  where purchased. Where no SLA has been purchased, Softzen provides
                  no specific uptime guarantee and the Services are provided on a
                  best-effort basis.
                </p>
                <p>
                  Customers expressly acknowledge that the Services may experience
                  interruptions, downtime or degraded performance due to: (a) scheduled
                  maintenance as described in Section 35; (b) emergency maintenance
                  required to address critical security vulnerabilities or system
                  failures; (c) failures or limitations of third-party infrastructure
                  providers, including cloud hosting providers and telecommunications
                  carriers; (d) cyberattacks, distributed denial of service attacks
                  or other malicious activity targeting the Platform; (e) Force Majeure
                  events as described in Section 43; or (f) the Customer's own network
                  connectivity or infrastructure issues.
                </p>
                <p>
                  Softzen shall not be liable for any loss, damage or business
                  disruption caused by unavailability of the Services where such
                  unavailability is attributable to any of the above causes. Customers
                  are advised to implement appropriate business continuity measures,
                  including offline backup procedures, to mitigate the impact of
                  potential service interruptions.
                </p>
              </div>

              {/* 35 */}
              <div className="legal-card" id="maintenance">
                <h2>35. Maintenance Windows</h2>
                <p>
                  Softzen performs scheduled and emergency maintenance on the Platform
                  to implement updates, security patches, performance improvements and
                  infrastructure upgrades. Scheduled maintenance windows are typically
                  conducted during off-peak hours (such as between 11:00 PM and 5:00 AM
                  IST) and will be communicated to Customers via email or in-platform
                  notification with not less than forty-eight (48) hours' advance notice
                  where practicable.
                </p>
                <p>
                  Emergency maintenance may be performed without advance notice where
                  Softzen determines that immediate action is required to address a
                  critical security vulnerability, system failure or threat to data
                  integrity. Softzen will notify Customers of emergency maintenance as
                  soon as reasonably practicable following its commencement. Downtime
                  arising from scheduled or emergency maintenance is excluded from the
                  uptime calculations under any applicable SLA.
                </p>
                <p>
                  Customers are advised to plan their operations to accommodate
                  maintenance windows and to avoid scheduling critical business activities
                  that are entirely dependent on the Services during communicated
                  maintenance periods. Softzen shall not be liable for any loss or
                  inconvenience caused by maintenance activities conducted in accordance
                  with this policy.
                </p>
              </div>

              {/* 36 */}
              <div className="legal-card" id="backups">
                <h2>36. Backups</h2>
                <p>
                  Softzen performs periodic automated backups of Customer Data stored
                  on its cloud infrastructure as part of its standard platform operations.
                  The frequency, retention period and recovery capabilities of these
                  backups vary by subscription tier and infrastructure configuration
                  and are described in the applicable product documentation. Backup
                  procedures are designed to support Softzen's ability to restore the
                  Platform in the event of a system failure and are not intended as
                  a substitute for the Customer's own data backup and disaster recovery
                  strategy.
                </p>
                <p>
                  Customers are solely responsible for maintaining their own independent
                  backups of Customer Data, including regular exports of critical
                  business records, to the extent that the Customer's business continuity
                  and data recovery requirements exceed the capabilities of Softzen's
                  standard platform backups. Softzen's backup procedures are a
                  platform-level safeguard and do not constitute a service guarantee
                  that any particular version of Customer Data will be available for
                  recovery at any specific point in time.
                </p>
                <p>
                  Softzen shall not be liable for any loss of Customer Data resulting
                  from: (a) the Customer's failure to maintain independent backups;
                  (b) accidental or deliberate deletion of data by the Customer or its
                  Authorized Users; (c) corruption of Customer Data caused by the
                  Customer's own actions or by third-party systems; or (d) loss of data
                  that occurred prior to the most recent successful backup retained by
                  Softzen. Requests for data restoration from Softzen's platform backups
                  may attract additional service fees.
                </p>
              </div>

              {/* 37 */}
              <div className="legal-card" id="disaster-recovery">
                <h2>37. Disaster Recovery</h2>
                <p>
                  Softzen maintains a disaster recovery plan designed to restore the
                  Services to operational status following a significant infrastructure
                  failure, data center incident or other catastrophic event. The recovery
                  time objective (RTO) and recovery point objective (RPO) associated
                  with Softzen's disaster recovery capabilities are specified in the
                  applicable product documentation or SLA, and may vary by subscription
                  tier and deployment model.
                </p>
                <p>
                  In the event of a disaster or major service disruption, Softzen will
                  activate its incident response and disaster recovery procedures and
                  will communicate status updates to affected Customers through its
                  official status page and email notifications as promptly as
                  circumstances permit. Softzen's disaster recovery capabilities are
                  designed to provide reasonable assurance of service continuity but
                  do not constitute an absolute guarantee of data recovery or service
                  restoration within any specific timeframe.
                </p>
                <p>
                  Customers should conduct their own business impact analysis and
                  implement complementary disaster recovery and business continuity
                  measures appropriate to their organization's risk tolerance and
                  regulatory requirements. Softzen is not responsible for losses
                  incurred by the Customer during the period of service restoration
                  following a disaster, except to the extent expressly provided in an
                  applicable SLA.
                </p>
              </div>

              {/* 38 */}
              <div className="legal-card" id="compliance">
                <h2>38. Compliance</h2>
                <p>
                  Softzen designs its Services in a manner intended to assist Customers
                  in meeting various regulatory compliance requirements. However, the
                  Customer is solely responsible for evaluating whether the Services
                  meet the specific compliance requirements applicable to the Customer's
                  industry, geography and regulatory environment, and for implementing
                  any additional controls, configurations or policies required to achieve
                  compliance.
                </p>
                <p>
                  Customers operating in regulated industries (including but not limited
                  to financial services, healthcare, education, government and critical
                  infrastructure) must independently verify that their use of the
                  Services complies with all applicable sector-specific regulations,
                  including but not limited to the Information Technology Act, 2000
                  (India), the Digital Personal Data Protection Act, 2023 (India),
                  the RBI's guidelines on outsourcing of financial services, and other
                  applicable regulations.
                </p>
                <p>
                  Softzen will cooperate with Customers' reasonable compliance inquiries
                  and audit requests to the extent permitted by Softzen's security and
                  confidentiality policies. Compliance cooperation beyond standard
                  documentation may be subject to additional professional services fees.
                  Softzen does not provide legal advice and its cooperation with
                  compliance inquiries should not be construed as a representation that
                  the Services meet any specific regulatory requirement.
                </p>
              </div>

              {/* 39 */}
              <div className="legal-card" id="export-control">
                <h2>39. Export Control</h2>
                <p>
                  The Services, including any technology, software and technical data
                  incorporated therein, may be subject to export control laws and
                  regulations of India and other applicable jurisdictions. Customers
                  must not use, export, re-export or transfer the Services, directly or
                  indirectly, to any country, entity or individual in violation of
                  applicable export control laws, trade sanction regimes or government
                  restrictions.
                </p>
                <p>
                  By using the Services, Customers represent and warrant that: (a) they
                  are not located in, under the control of, or nationals or residents
                  of any country subject to applicable export restrictions or trade
                  embargoes; (b) they are not listed on any governmental list of
                  prohibited or restricted parties; and (c) their use of the Services
                  will comply with all applicable export control and trade compliance
                  laws. Customers are solely responsible for ensuring their compliance
                  with all applicable export control regulations.
                </p>
              </div>

              {/* 40 */}
              <div className="legal-card" id="indemnification">
                <h2>40. Indemnification</h2>
                <p>
                  The Customer agrees to indemnify, defend and hold harmless Softzen
                  Technology and its directors, officers, employees, agents, licensors,
                  contractors and successors (collectively, "Softzen Indemnitees") from
                  and against any and all claims, demands, actions, losses, liabilities,
                  damages, penalties, fines, costs and expenses (including reasonable
                  legal fees) arising out of or relating to: (a) the Customer's breach
                  of any provision of these Terms; (b) the Customer's violation of any
                  applicable law or regulation; (c) the Customer's infringement of any
                  third-party intellectual property right; (d) any claim by a third
                  party arising from Customer Data or from the Customer's use of the
                  Services; (e) the Customer's gross negligence or wilful misconduct;
                  or (f) any claim arising from the Customer's business decisions or
                  operational outcomes derived from use of the Services.
                </p>
                <p>
                  Softzen will notify the Customer promptly of any indemnifiable claim
                  of which Softzen becomes aware, will cooperate reasonably with the
                  Customer in the defense of such claim at the Customer's expense, and
                  will give the Customer reasonable control over the defense and
                  settlement of such claim, provided that Softzen reserves the right to
                  participate in the defense of any claim using counsel of its own
                  choosing at its own expense. The Customer may not settle any claim
                  on behalf of any Softzen Indemnitee without Softzen's prior written
                  consent.
                </p>
              </div>

              {/* 41 */}
              <div className="legal-card" id="warranty-disclaimer">
                <h2>41. Warranty Disclaimer</h2>
                <p>
                  THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS,
                  WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS, IMPLIED,
                  STATUTORY OR OTHERWISE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE
                  LAW, SOFTZEN TECHNOLOGY EXPRESSLY DISCLAIMS ALL WARRANTIES,
                  INCLUDING BUT NOT LIMITED TO: IMPLIED WARRANTIES OF MERCHANTABILITY,
                  FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, ACCURACY,
                  COMPLETENESS AND UNINTERRUPTED OR ERROR-FREE OPERATION.
                </p>
                <p>
                  WITHOUT LIMITING THE FOREGOING, SOFTZEN DOES NOT WARRANT THAT: (A)
                  THE SERVICES WILL MEET THE CUSTOMER'S SPECIFIC REQUIREMENTS OR
                  EXPECTATIONS; (B) THE SERVICES WILL BE AVAILABLE, UNINTERRUPTED,
                  TIMELY, SECURE OR ERROR-FREE AT ALL TIMES; (C) ANY ERRORS OR DEFECTS
                  IN THE SERVICES WILL BE CORRECTED WITHIN ANY SPECIFIC TIMEFRAME; (D)
                  AI-GENERATED OUTPUTS WILL BE ACCURATE, COMPLETE OR FIT FOR ANY
                  PARTICULAR PURPOSE; OR (E) THE SERVICES WILL PRODUCE ANY PARTICULAR
                  BUSINESS OUTCOME OR RESULT FOR THE CUSTOMER.
                </p>
                <p>
                  SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES.
                  IN SUCH JURISDICTIONS, SOFTZEN'S WARRANTIES ARE LIMITED TO THE MINIMUM
                  EXTENT PERMITTED BY APPLICABLE LAW, AND THE REMAINDER OF THESE
                  DISCLAIMERS SHALL APPLY TO THE FULLEST EXTENT PERMISSIBLE.
                </p>
              </div>

              {/* 42 */}
              <div className="legal-card" id="liability">
                <h2>42. Limitation of Liability</h2>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL
                  SOFTZEN TECHNOLOGY, ITS DIRECTORS, OFFICERS, EMPLOYEES, AGENTS OR
                  LICENSORS BE LIABLE TO THE CUSTOMER OR ANY THIRD PARTY FOR ANY
                  INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, PUNITIVE
                  OR ENHANCED DAMAGES OF ANY KIND, INCLUDING BUT NOT LIMITED TO LOSS
                  OF PROFITS, LOSS OF REVENUE, LOSS OF BUSINESS, LOSS OF GOODWILL,
                  LOSS OF DATA, LOSS OF ANTICIPATED SAVINGS, BUSINESS INTERRUPTION,
                  COST OF SUBSTITUTE SERVICES, OR ANY OTHER ECONOMIC LOSS, ARISING OUT
                  OF OR RELATED TO THESE TERMS OR THE USE OF OR INABILITY TO USE THE
                  SERVICES, REGARDLESS OF THE THEORY OF LIABILITY (WHETHER IN CONTRACT,
                  TORT, STRICT LIABILITY, NEGLIGENCE OR OTHERWISE) AND EVEN IF SOFTZEN
                  HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>
                <p>
                  NOTWITHSTANDING ANY OTHER PROVISION OF THESE TERMS, SOFTZEN'S TOTAL
                  CUMULATIVE LIABILITY TO THE CUSTOMER FOR ALL CLAIMS ARISING OUT OF OR
                  RELATED TO THESE TERMS OR THE SERVICES, WHETHER IN CONTRACT, TORT,
                  STRICT LIABILITY OR OTHERWISE, SHALL IN NO EVENT EXCEED THE TOTAL
                  FEES ACTUALLY PAID BY THE CUSTOMER TO SOFTZEN DURING THE THREE (3)
                  MONTH PERIOD IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
                </p>
                <p>
                  THE PARTIES ACKNOWLEDGE THAT THE LIMITATIONS OF LIABILITY SET FORTH
                  IN THIS SECTION ARE AN ESSENTIAL ELEMENT OF THE BASIS OF THE BARGAIN
                  BETWEEN SOFTZEN AND THE CUSTOMER, AND THAT SOFTZEN WOULD NOT HAVE
                  ENTERED INTO THESE TERMS WITHOUT SUCH LIMITATIONS. SOME JURISDICTIONS
                  DO NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY FOR CERTAIN
                  TYPES OF DAMAGES. IN SUCH JURISDICTIONS, SOFTZEN'S LIABILITY SHALL
                  BE LIMITED TO THE MINIMUM EXTENT PERMITTED BY APPLICABLE LAW.
                </p>
              </div>

              {/* 43 */}
              <div className="legal-card" id="force-majeure">
                <h2>43. Force Majeure</h2>
                <p>
                  Softzen shall not be liable for any delay or failure to perform its
                  obligations under these Terms to the extent that such delay or failure
                  is caused by circumstances beyond Softzen's reasonable control,
                  including but not limited to: acts of God; natural disasters (including
                  earthquakes, floods, fires, storms and pandemics); acts of war,
                  terrorism or civil unrest; government actions, orders or restrictions;
                  power outages or telecommunications failures not caused by Softzen's
                  negligence; failures of third-party infrastructure providers or cloud
                  platforms; large-scale cyberattacks or distributed denial of service
                  attacks; labor disputes, strikes or lockouts not involving Softzen's
                  own employees; or any other event beyond Softzen's reasonable control
                  (each, a "Force Majeure Event").
                </p>
                <p>
                  Upon the occurrence of a Force Majeure Event, Softzen will notify the
                  Customer as soon as reasonably practicable and will use commercially
                  reasonable efforts to minimize the impact of the Force Majeure Event
                  on the Services and to resume normal service delivery as promptly as
                  possible. If a Force Majeure Event continues for more than sixty (60)
                  consecutive days and materially impairs Softzen's ability to provide
                  the Services, either party may terminate the affected portion of these
                  Terms on written notice, without liability to the other party for
                  such termination, subject to the no-refund provisions of Section 30.
                </p>
              </div>

              {/* 44 */}
              <div className="legal-card" id="governing-law">
                <h2>44. Governing Law</h2>
                <p>
                  These Terms, and any dispute, controversy or claim arising out of or
                  in connection with these Terms, the Services, or any breach,
                  termination or invalidity thereof, shall be governed by and construed
                  in accordance with the laws of India, without regard to its conflict
                  of laws principles. The United Nations Convention on Contracts for the
                  International Sale of Goods shall not apply to these Terms.
                </p>
                <p>
                  Subject to the dispute resolution provisions of Section 45, the parties
                  consent to the exclusive jurisdiction of the courts located in
                  Raipur, Chhattisgarh, India for the resolution of any dispute that
                  is not subject to mandatory arbitration. The Customer hereby waives
                  any objection to the jurisdiction or venue of such courts on any ground,
                  including any claim of inconvenient forum.
                </p>
              </div>

              {/* 45 */}
              <div className="legal-card" id="arbitration">
                <h2>45. Arbitration &amp; Dispute Resolution</h2>
                <p>
                  The parties agree to attempt to resolve any dispute, controversy or
                  claim arising out of or in connection with these Terms (a "Dispute")
                  amicably through good-faith negotiations for a period of thirty (30)
                  days following written notice of the Dispute by the aggrieved party
                  to the other party ("Negotiation Period"). During the Negotiation
                  Period, designated senior representatives of each party shall meet
                  (in person, by telephone or by video conference) and attempt in good
                  faith to resolve the Dispute.
                </p>
                <p>
                  If the Dispute is not resolved during the Negotiation Period, it shall
                  be finally and exclusively resolved by binding arbitration conducted
                  in accordance with the Arbitration and Conciliation Act, 1996 (India),
                  as amended. The arbitration shall be conducted by a sole arbitrator
                  mutually appointed by the parties, or if the parties cannot agree on
                  an arbitrator within fifteen (15) days of the expiry of the Negotiation
                  Period, by an arbitrator appointed in accordance with the Arbitration
                  and Conciliation Act, 1996.
                </p>
                <p>
                  The seat and venue of arbitration shall be Raipur, Chhattisgarh,
                  India. The language of the arbitration shall be English. The
                  arbitral award shall be final, binding and enforceable and shall not
                  be subject to appeal except as expressly provided under the Arbitration
                  and Conciliation Act, 1996. Each party shall bear its own costs of
                  arbitration unless the arbitrator determines otherwise. Notwithstanding
                  the foregoing, either party may seek interim or emergency relief from
                  a court of competent jurisdiction to protect its intellectual property
                  rights, confidential information or other proprietary interests.
                </p>
              </div>

              {/* 46 */}
              <div className="legal-card" id="modification">
                <h2>46. Modification of Terms</h2>
                <p>
                  Softzen reserves the right to modify, update or replace any provision
                  of these Terms at any time, in its sole discretion. Where Softzen
                  makes material changes to these Terms, it will notify Customers via
                  email to the registered account email address and/or via prominent
                  notice within the Platform not less than thirty (30) days before the
                  changes take effect, unless earlier implementation is required to
                  comply with applicable law or to address a critical security issue.
                </p>
                <p>
                  Customers are responsible for reviewing any notified changes to these
                  Terms and for determining whether such changes are acceptable. The
                  Customer's continued access to or use of the Services following the
                  effective date of any changes shall constitute the Customer's binding
                  acceptance of the revised Terms. If the Customer objects to any
                  material change, the Customer's sole remedy is to discontinue use of
                  the Services and provide written notice of non-renewal in accordance
                  with Section 28.
                </p>
                <p>
                  Softzen maintains a version history of these Terms, which is available
                  on request, so that Customers can understand what has changed between
                  versions. Customers are encouraged to check the effective date of
                  these Terms regularly to ensure they are reviewing the most current
                  version.
                </p>
              </div>

              {/* 47 */}
              <div className="legal-card" id="severability">
                <h2>47. Severability</h2>
                <p>
                  If any provision of these Terms is found by a court or arbitrator of
                  competent jurisdiction to be invalid, illegal, void or unenforceable
                  under applicable law, such provision shall be deemed modified to the
                  minimum extent necessary to make it valid, legal and enforceable. If
                  such modification is not possible, the relevant provision shall be
                  deemed severed from these Terms, and the remaining provisions of these
                  Terms shall continue in full force and effect and shall be construed
                  so as to give effect to the original intent of the parties to the
                  maximum extent possible.
                </p>
                <p>
                  The invalidity or unenforceability of any provision in one jurisdiction
                  shall not affect the validity or enforceability of that provision in
                  any other jurisdiction, nor the validity or enforceability of any other
                  provision of these Terms in any jurisdiction.
                </p>
              </div>

              {/* 48 */}
              <div className="legal-card" id="entire-agreement">
                <h2>48. Entire Agreement</h2>
                <p>
                  These Terms, together with the Privacy Policy, Security Policy,
                  Acceptable Use Policy, any applicable Order Forms, Statements of Work,
                  Service Level Agreements and Data Processing Agreements, constitute
                  the entire agreement between Softzen and the Customer with respect to
                  the subject matter hereof and supersede all prior and contemporaneous
                  agreements, proposals, negotiations, representations, warranties and
                  understandings, whether written or oral, between the parties regarding
                  the Services.
                </p>
                <p>
                  In the event of a conflict between these Terms and any Order Form or
                  SOW executed by the parties, the Order Form or SOW shall prevail with
                  respect to the specific subject matter of that document, and these
                  Terms shall govern all other matters. No modification of these Terms
                  shall be effective unless made in writing and signed by authorized
                  representatives of both parties, except as provided in Section 46.
                </p>
                <p>
                  Any waiver by either party of any breach or default of any provision
                  of these Terms shall not constitute a waiver of any subsequent breach
                  or default and shall not affect the other provisions of these Terms.
                  No failure or delay by either party in exercising any right or remedy
                  under these Terms shall operate as a waiver of that right or remedy.
                </p>
              </div>

              {/* 49 */}
              <div className="legal-card" id="contact">
                <h2>49. Contact Information</h2>
                <p>
                  For any questions, concerns, notices or requests relating to these
                  Terms or Softzen's Services, please contact Softzen Technology through
                  the following channels:
                </p>
                <div className="contact-box">
                  <h3>Softzen Technology</h3>
                  <p>Legal &amp; Compliance Department</p>
                  <p>
                    Email:{" "}
                    <a href="mailto:Complaince@softzentechnology.com">Complaince@softzentechnology.com</a>
                  </p>
                  <p>
                    Support:{" "}
                    <a href="mailto:Enquiry@softzentechnology.com">Enquiry@softzentechnology.com</a>
                  </p>
                  <p>
                    Security:{" "}
                    <a href="mailto:Complaince@softzentechnology.com">Complaince@softzentechnology.com</a>
                  </p>
                  <p>Website: <a href="https://softzentechnology.com">www.softzentechnology.com</a></p>
                  <p>Jurisdiction: India</p>
                </div>
                <p>
                  Notices under these Terms must be provided in writing and sent to
                  the addresses above, or to such other address as a party may designate
                  in writing from time to time. Notices shall be deemed received: (a)
                  upon delivery if sent by registered post with acknowledgment due;
                  (b) on the next business day if sent by courier; or (c) upon confirmation
                  of delivery if sent by email, provided no delivery failure notification
                  is received.
                </p>
              </div>

              {/* 50 */}
              <div className="legal-card" id="final-notice">
                <h2>50. Final Legal Notice</h2>
                <p>
                  These Terms of Service represent a comprehensive, binding and enforceable
                  legal agreement between Softzen Technology and each Customer. By
                  accessing, subscribing to, purchasing, implementing or using any
                  Softzen product, platform or service, the Customer acknowledges that
                  it has had the opportunity to read these Terms in full, to seek
                  independent legal advice if required, and agrees to be bound by all
                  provisions herein without reservation.
                </p>
                <p>
                  Softzen Technology is committed to delivering enterprise-grade software
                  solutions with the highest standards of professionalism, security and
                  reliability. These Terms are designed to protect the legitimate
                  interests of both Softzen and its Customers while enabling a clear and
                  transparent commercial relationship. Softzen does not waive any right
                  under these Terms by failing to enforce it in any particular instance,
                  and all rights not expressly granted herein are reserved by Softzen.
                </p>
                <p>
                  If you have accessed or used any Softzen service, you have accepted
                  these Terms. If you do not agree with any part of these Terms, you
                  must cease use of all Softzen services immediately and contact
                  Softzen to initiate the appropriate offboarding process.
                </p>
                <div className="notice-box">
                  <strong>© 2026 Softzen Technology. All Rights Reserved.</strong>
                  <p>
                    These Terms of Service are proprietary to Softzen Technology and
                    may not be reproduced, copied or used as a template without prior
                    written authorization. All Softzen products, services, platforms,
                    methodologies and intellectual property are protected under applicable
                    Indian and international intellectual property law.
                  </p>
                </div>
              </div>

            </main>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default TermsOfService;
