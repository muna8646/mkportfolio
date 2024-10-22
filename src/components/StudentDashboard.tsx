import React, { useState } from 'react';
import { Book, FileText, Award, Upload, BarChart2 } from 'lucide-react';

interface Course {
  id: number;
  name: string;
  progress: number;
}

interface Assignment {
  id: number;
  title: string;
  dueDate: string;
  course: string;
}

interface Grade {
  course: string;
  grade: string;
}

const StudentDashboard: React.FC = () => {
  const [courses] = useState<Course[]>([
    { id: 1, name: "Introduction to React", progress: 75 },
    { id: 2, name: "Advanced JavaScript", progress: 50 },
    { id: 3, name: "Web Design Fundamentals", progress: 90 },
  ]);

  const [assignments] = useState<Assignment[]>([
    { id: 1, title: "React Hooks Essay", dueDate: "2023-04-15", course: "Introduction to React" },
    { id: 2, title: "JavaScript Algorithms", dueDate: "2023-04-20", course: "Advanced JavaScript" },
  ]);

  const [grades] = useState<Grade[]>([
    { course: "Introduction to React", grade: "A" },
    { course: "Web Design Fundamentals", grade: "A-" },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Welcome, Student</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Enrolled Courses */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Book className="mr-2" /> Enrolled Courses
            </h2>
            <ul className="space-y-4">
              {courses.map((course) => (
                <li key={course.id} className="flex items-center justify-between">
                  <span>{course.name}</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Assignments */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FileText className="mr-2" /> Upcoming Assignments
            </h2>
            <ul className="space-y-4">
              {assignments.map((assignment) => (
                <li key={assignment.id} className="flex flex-col">
                  <span className="font-medium">{assignment.title}</span>
                  <span className="text-sm text-gray-600">
                    {assignment.course} - Due: {assignment.dueDate}
                  </span>
                </li>
              ))}
            </ul>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 flex items-center">
              <Upload className="mr-2" size={18} /> Submit Assignment
            </button>
          </div>

          {/* Grades */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <BarChart2 className="mr-2" /> Recent Grades
            </h2>
            <ul className="space-y-4">
              {grades.map((grade, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{grade.course}</span>
                  <span className="font-semibold">{grade.grade}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Certificates */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Award className="mr-2" /> Certificates
            </h2>
            <p className="text-gray-600 mb-4">You haven't earned any certificates yet. Keep learning!</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300 flex items-center" disabled>
              <Award className="mr-2" size={18} /> View Certificates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;