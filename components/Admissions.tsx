import React from 'react';
import { Calendar, CheckCircle, Download, FileText, ClipboardList } from 'lucide-react';

export const Admissions: React.FC = () => {
  const eligibility = [
    "Resident of Uttar Pradesh (Domicile required)",
    "Annual family income below defined limits (Income Certificate required)",
    "Qualifying marks in the previous class",
    "Category certificate (SC/ST/OBC) if applicable",
    "Entrance exam qualification for specific classes (6th, 9th, 11th)"
  ];

  const documents = [
    "Aadhar Card of Student & Parents",
    "Income Certificate (Income Tax Dept/Tehsil)",
    "Caste Certificate",
    "Domicile Certificate",
    "Previous Class Marksheet",
    "Transfer Certificate (TC)",
    "Passport Size Photographs"
  ];

  const importantDates = [
    { event: "Application Start Date", date: "February 15, 2025" },
    { event: "Last Date of Submission", date: "March 30, 2025" },
    { event: "Entrance Examination", date: "April 15, 2025" },
    { event: "Result Declaration", date: "May 10, 2025" },
    { event: "Counseling & Admission", date: "May 20 - June 5, 2025" }
  ];

  return (
    <section id="admissions" className="py-20 bg-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 hindi-text">प्रवेश प्रक्रिया (Admissions)</h2>
          <div className="h-1 w-24 bg-orange-600 mx-auto rounded"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Join our community of learners. Review the eligibility criteria and application process below for the upcoming academic session.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Process & Eligibility */}
          <div className="space-y-8">
            
            {/* Eligibility */}
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-orange-500">
              <div className="flex items-center mb-6">
                <CheckCircle className="text-orange-600 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-gray-800">Eligibility Criteria</h3>
              </div>
              <ul className="space-y-3">
                {eligibility.map((item, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <span className="mr-2 mt-1.5 h-2 w-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Documents */}
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-600">
              <div className="flex items-center mb-6">
                <FileText className="text-blue-600 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-gray-800">Required Documents</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-center text-gray-600 text-sm bg-gray-50 p-2 rounded">
                    <div className="h-1.5 w-1.5 bg-blue-400 rounded-full mr-2"></div>
                    {doc}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Dates & Download */}
          <div className="space-y-8">
            
            {/* Important Dates */}
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-green-600">
              <div className="flex items-center mb-6">
                <Calendar className="text-green-600 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-gray-800">Important Dates (2025-26)</h3>
              </div>
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {importantDates.map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.event}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Download Section */}
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl shadow-xl p-8 text-white text-center">
              <ClipboardList className="mx-auto mb-4 opacity-80" size={48} />
              <h3 className="text-2xl font-bold mb-2">Ready to Apply?</h3>
              <p className="mb-6 text-orange-100">Download the official admission form for the upcoming academic session.</p>
              <button 
                onClick={() => alert("Download functionality simulated: Admission Form PDF")}
                className="inline-flex items-center bg-white text-orange-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors shadow-lg transform hover:-translate-y-1"
              >
                <Download className="mr-2" size={20} />
                Download Admission Form (PDF)
              </button>
              <p className="mt-4 text-xs text-orange-200 opacity-80">* Please submit the filled form at the school office.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};