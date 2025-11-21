import React from 'react';
import { StaffMember } from '../types';

const staffData: StaffMember[] = [
  { id: 1, name: "Dr. Dinesh Kumar", designation: "Principal", subject: "History" },
  { id: 2, name: "Mr. Pavan Kumar", designation: "Lecturer", subject: "Biology" },
  { id: 3, name: "Mr. Sanjeev Kumar", designation: "Lecturer", subject: "Sociology" },
  { id: 4, name: "Mr. Khalid Ahmed", designation: "Lecturer", subject: "Economics" },
  { id: 5, name: "Mr. Anil Kumar", designation: "Lecturer", subject: "Chemistry" },
  { id: 6, name: "Mr. Ashu Kumar", designation: "Asst. Teacher", subject: "Science" },
  { id: 7, name: "Mr. Hardeep Singh", designation: "Asst. Teacher", subject: "Physical Education" },
  { id: 8, name: "Mrs. Priyanka Sharma", designation: "Asst. Teacher", subject: "Hindi" },
];

export const Staff: React.FC = () => {
  return (
    <section id="staff" className="py-20 bg-orange-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 hindi-text">शैक्षणिक स्टाफ (Our Faculty)</h2>
          <div className="h-1 w-24 bg-orange-600 mx-auto rounded"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Dedicated educators committed to shaping the future of our students.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="py-4 px-6 font-semibold text-sm uppercase tracking-wider">Name</th>
                  <th className="py-4 px-6 font-semibold text-sm uppercase tracking-wider">Designation</th>
                  <th className="py-4 px-6 font-semibold text-sm uppercase tracking-wider">Department/Subject</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {staffData.map((member) => (
                  <tr key={member.id} className="hover:bg-orange-50 transition-colors">
                    <td className="py-4 px-6 text-gray-800 font-medium">{member.name}</td>
                    <td className="py-4 px-6 text-gray-600">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {member.designation}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-600">{member.subject}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Department Summary */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Arts Stream</h3>
                <p className="text-gray-600">Hindi, English, Sociology, Economics, History, Physical Education</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Science Stream</h3>
                <p className="text-gray-600">Hindi, English, Physics, Chemistry, Biology, Mathematics</p>
            </div>
        </div>
      </div>
    </section>
  );
};