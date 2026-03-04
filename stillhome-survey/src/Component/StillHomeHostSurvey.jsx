import { useState } from "react";

export default function StillHomeHostSurvey() {
  const [form, setForm] = useState({
    location: [],
    platforms: [],
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (question, value) => {
    setForm({ ...form, [question]: value });
  };

  const handleCheckboxChange = (question, value) => {
    const currentValues = form[question] || [];

    if (currentValues.includes(value)) {
      setForm({
        ...form,
        [question]: currentValues.filter((item) => item !== value),
      });
    } else {
      setForm({
        ...form,
        [question]: [...currentValues, value],
      });
    }
  };

  /* ⭐ FINAL SUBMIT */
  const handleSubmit = () => {
    if (submitted) return;

    // Validation
    if (!form.businessName) {
      alert("Please enter your business name");
      return;
    }

    if (!form.owner) {
      alert("Please select if you are an owner or manager");
      return;
    }

    if (!form.location || form.location.length === 0) {
      alert("Please select at least one location");
      return;
    }

    if (!form.units) {
      alert("Please select number of apartments you manage");
      return;
    }

    if (!form.interest) {
      alert("Please select your interest in listing on Still Homes");
      return;
    }

    if (!form.phone) {
      alert("Please enter your phone / WhatsApp number");
      return;
    }

    const message = `
Still Homes Host Survey

Business Name: ${form.businessName || ""}
Owner/Manager: ${form.owner || ""}
Location: ${(form.location || []).join(", ")}
Units: ${form.units || ""}
Platforms: ${(form.platforms || []).join(", ")}
Interested: ${form.interest || ""}
Booking Struggles: ${form.bookings || ""}
Free Package Interest: ${form.free || ""}
Paid Package Interest: ${form.paid || ""}
Client Phone: ${form.phone || ""}
`;

    const phoneNumber = "2348134221463";

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    alert(
      `${form.businessName} you have successfully submitted. You will be added to our WhatsApp community for more updates on Still Homes`
    );

    setSubmitted(true);
    window.open(whatsappURL, "_blank");
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}>
        Still Home – Apartment Host Survey (Abuja & Lagos)
      </h1>

      <p style={{ marginBottom: "20px" }}>
        Still Home is a curated short-let and serviced apartment booking
        platform focused on high-quality homes in Abuja and Lagos.
      </p>

      <hr style={{ margin: "30px 0" }} />

      <h2>Apartment Host Survey</h2>

      <style>
        {`
          input[type="checkbox"], input[type="radio"] {
            width: 24px;
            height: 24px;
            margin-right: 12px;
            cursor: pointer;
          }
          label {
            display: flex;
            align-items: center;
            margin-bottom: 14px;
            font-size: 16px;
            cursor: pointer;
          }
          .question {
            margin-top: 25px;
            font-weight: bold;
          }
        `}
      </style>

      {/* Business Name */}
      <div className="question">Business Name</div>
      <input
        type="text"
        placeholder="Enter your business name"
        onChange={(e) => handleChange("businessName", e.target.value)}
        style={{
          padding: "12px",
          width: "100%",
          marginTop: "10px",
          fontSize: "16px",
        }}
      />

      {/* Q1 */}
      <div className="question">
        1. Are you an apartment / short-let owner or manager?
      </div>
      <label>
        <input
          type="radio"
          name="owner"
          onChange={() => handleChange("owner", "Yes")}
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          name="owner"
          onChange={() => handleChange("owner", "No")}
        />
        No
      </label>

      {/* Q2 */}
      <div className="question">
        2. Where is your apartment located?
      </div>
      {["Abuja", "Lagos","Both", "Other cities"].map((city) => (
        <label key={city}>
          <input
            type="checkbox"
            onChange={() => handleCheckboxChange("location", city)}
          />
          {city}
        </label>
      ))}

      {/* Q3 */}
      <div className="question">
        3. How many apartments do you manage?
      </div>
      {["1", "2-5", "6-10", "10+"].map((num) => (
        <label key={num}>
          <input
            type="radio"
            name="units"
            onChange={() => handleChange("units", num)}
          />
          {num}
        </label>
      ))}

      {/* Q4 */}
      <div className="question">
        4. Which platforms do you currently use?
      </div>
      {[
        "Airbnb",
        "Booking.com",
        "Instagram / WhatsApp",
        "Agents / Brokers",
      ].map((platform) => (
        <label key={platform}>
          <input
            type="checkbox"
            onChange={() => handleCheckboxChange("platforms", platform)}
          />
          {platform}
        </label>
      ))}

      {/* Q5 */}
      <div className="question">
        5. Would you be interested in listing on Still Home?
      </div>
      <label>
        <input
          type="radio"
          name="interest"
          onChange={() => handleChange("interest", "Yes")}
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          name="interest"
          onChange={() => handleChange("interest", "No")}
        />
        No
      </label>

      {/* Q6 */}
      <div className="question">
        6. Do you struggle with getting consistent bookings?
      </div>
      <label>
        <input
          type="radio"
          name="bookings"
          onChange={() => handleChange("bookings", "Yes")}
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          name="bookings"
          onChange={() => handleChange("bookings", "No")}
        />
        No
      </label>

      {/* Q7 */}
      <div className="question">
        7. Would you be interested in a free host package?
      </div>
      <label>
        <input
          type="radio"
          name="free"
          onChange={() => handleChange("free", "Yes")}
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          name="free"
          onChange={() => handleChange("free", "No")}
        />
        No
      </label>

      {/* Q8 */}
      <div className="question">
        8. Would you be interested in a paid host package?
      </div>
      <label>
        <input
          type="radio"
          name="paid"
          onChange={() => handleChange("paid", "Yes")}
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          name="paid"
          onChange={() => handleChange("paid", "No")}
        />
        No
      </label>

      {/* Phone */}
      <div className="question">Phone / WhatsApp Contact</div>
      <input
        type="text"
        placeholder="Enter your phone number"
        onChange={(e) => handleChange("phone", e.target.value)}
        style={{
          padding: "12px",
          width: "100%",
          marginTop: "10px",
          fontSize: "16px",
        }}
      />

      <button
        onClick={handleSubmit}
        disabled={submitted}
        style={{
          marginTop: "30px",
          padding: "14px",
          width: "100%",
          backgroundColor: submitted ? "gray" : "black",
          color: "white",
          fontSize: "16px",
          cursor: submitted ? "not-allowed" : "pointer",
          borderRadius: "6px",
        }}
      >
        {submitted ? "Submitted" : "Submit Survey"}
      </button>
    </div>
  );
}