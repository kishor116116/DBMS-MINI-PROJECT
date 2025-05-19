import React, { useState } from "react";
import jsPDF from "jspdf";
import { Toaster, toast } from "react-hot-toast";

function RentalApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    moveInDate: "",
    type: "",
    members: "",
    address: "",
    occupation: "",
    income: "",
    idProof: null,
  });

  const [showDownload, setShowDownload] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "idProof") {
      setFormData({ ...formData, idProof: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const res = await fetch("http://localhost:5000/api/rental", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setShowDownload(true);
        toast.success("Application submitted successfully!");
      } else {
        toast.error("Failed to submit application.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error. Please try again later.");
    }
  };

  const downloadPDF = () => {
    const doc = new jsPDF();

    const text = "FIND MY STAY";
    const pageWidth = doc.internal.pageSize.getWidth();
    const textWidth = doc.getTextWidth(text);
    const x = (pageWidth - textWidth) / 2;

    doc.setFontSize(20);
    doc.text(text, x, 20);

    doc.setFontSize(14);
    doc.text("Rental Application Form", 20, 35);

    doc.setFontSize(12);

    const entries = [
      ["Name", formData.name],
      ["Email", formData.email],
      ["Phone", formData.phone],
      ["Move-In Date", formData.moveInDate],
      ["Type", formData.type],
      ["Members", formData.members],
      ["Address", formData.address],
      ["Occupation", formData.occupation],
      ["Income", formData.income],
    ];

    let y = 45;
    entries.forEach(([label, value]) => {
      doc.text(`${label}: ${value}`, 20, y);
      y += 10;
    });

    const thankYou = "THANK YOU";
    const thankYouWidth = doc.getTextWidth(thankYou);
    const thankYouX = (pageWidth - thankYouWidth) / 2;
    doc.setFontSize(16);
    doc.text(thankYou, thankYouX, y + 10);

    doc.save("FindMyStay_Application.pdf");
  };

  return (
    <>
      <Toaster position="top-right" />
      <div className="flex justify-center mt-20 pt-4 font-bold text-4xl">
        If You Are Interested, Book Here......
      </div>
      <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow">
        <div className="flex gap-2 justify-center ">
          <img src="img1.png" alt="" className="w-14 h-14" />
          <h1 className="text-3xl font-bold mb-6 text-center pt-2 text-blue-400">
            FIND MY STAY
          </h1>
        </div>
        <h2 className="text-xl font-bold mb-6 text-center">Rental Application</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            required
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            name="phone"
            type="tel"
            required
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            name="moveInDate"
            type="date"
            required
            value={formData.moveInDate}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          <select
            name="type"
            required
            value={formData.type}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">Select Type</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Family">Family</option>
          </select>
          <input
            name="members"
            type="number"
            required
            placeholder="Members"
            value={formData.members}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          <textarea
            name="address"
            required
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            name="occupation"
            required
            placeholder="Occupation"
            value={formData.occupation}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            name="income"
            type="number"
            required
            placeholder="Monthly Income"
            value={formData.income}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          <div className="font-semibold">Upload any ID proof</div>
          <input
            name="idProof"
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            required
            onChange={handleChange}
            className="w-full"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            Submit Application
          </button>
        </form>

        {showDownload && (
          <div className="mt-6 text-center">
            <button
              onClick={downloadPDF}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Download Application PDF
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default RentalApplicationForm;
