import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { ExamResult } from '../types';

const data: ExamResult[] = [
  { year: '2012-13', class10: 100, class12: 100 },
  { year: '2014-15', class10: 100, class12: 100 },
  { year: '2016-17', class10: 96.15, class12: 91.67 },
  { year: '2018-19', class10: 88.88, class12: 77.77 },
  { year: '2020-21', class10: 100, class12: 100 },
  { year: '2022-23', class10: 80.76, class12: 87.5 },
  { year: '2023-24', class10: 53.33, class12: 100 },
];

export const Stats: React.FC = () => {
  return (
    <section id="results" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 hindi-text">परीक्षाफल (Academic Results)</h2>
          <div className="h-1 w-24 bg-orange-600 mx-auto rounded"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A track record of academic excellence over the years in both Class 10 and Class 12 board examinations.
          </p>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl">
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="year" />
                <YAxis domain={[0, 100]} />
                <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                />
                <Legend />
                <Bar dataKey="class10" name="Class 10 Pass %" fill="#ea580c" radius={[4, 4, 0, 0]} />
                <Bar dataKey="class12" name="Class 12 Pass %" fill="#1e293b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-600">
                <h3 className="text-xl font-bold mb-2">Consistent 100%</h3>
                <p className="text-gray-600 text-sm">Achieved 100% pass results in multiple academic years including 2012, 2014, 2020, and 2021.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-900">
                <h3 className="text-xl font-bold mb-2">Class 12 Excellence</h3>
                <p className="text-gray-600 text-sm">Maintained high standards in Senior Secondary education with recent 100% results in 2023-24.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-600">
                <h3 className="text-xl font-bold mb-2">Toppers</h3>
                <p className="text-gray-600 text-sm">Producing district toppers like Nitin Kumar, Shivam, and Vishal Sharma consistently.</p>
            </div>
        </div>
      </div>
    </section>
  );
};