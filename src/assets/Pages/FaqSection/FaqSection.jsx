import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const FaqSection = () => {
  return (
    <div>
      <section className="py-10 bg-gray-200">
        <div className="container mx-auto">
          <SectionTitle heading="FAQ" subHeading="Frequently Asked Questions" />

          {/* First FAQ */}
          <div className="collapse collapse-arrow bg-base-200 mb-4">
            <input
              type="radio"
              name="my-accordion-2"
              id="faq1"
              defaultChecked
            />
            <div className="collapse-title text-xl font-medium">
              How can I upgrade my membership to a premium package?
            </div>
            <div className="collapse-content">
              <p>
                To upgrade your membership, go to the "Membership" section on
                your dashboard. Choose a premium package (Silver, Gold, or
                Platinum) and click on it. You'll be redirected to the checkout
                page for the payment process.
              </p>
            </div>
          </div>

          {/* Second FAQ */}
          <div className="collapse collapse-arrow bg-base-200 mb-4">
            <input type="radio" name="my-accordion-2" id="faq2" />
            <div className="collapse-title text-xl font-medium">
              How can I request a meal on the platform?
            </div>
            <div className="collapse-content">
              <p>
                To request a meal, browse through the available meals in the
                "Meals by Category" section. Click on the meal you want and
                press the "Request Meal" button. If you don't have a premium
                package, you'll be prompted to upgrade first.
              </p>
            </div>
          </div>

          {/* Third FAQ */}
          <div className="collapse collapse-arrow bg-base-200 mb-4">
            <input type="radio" name="my-accordion-2" id="faq3" />
            <div className="collapse-title text-xl font-medium">
              How do I view my requested meals and reviews?
            </div>
            <div className="collapse-content">
              <p>
                You can view your requested meals and reviews in the "My
                Dashboard" section. Click on "Requested Meals" to see the list
                of meals you've requested, along with their status. For reviews,
                visit the "My Reviews" page on your dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqSection;
