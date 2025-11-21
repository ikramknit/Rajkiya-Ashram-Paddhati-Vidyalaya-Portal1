import React from 'react';

export interface ExamResult {
  year: string;
  class10: number;
  class12: number;
}

export interface StaffMember {
  id: number;
  name: string;
  designation: string;
  subject: string;
}

export interface Facility {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export enum Department {
  ARTS = 'Arts',
  SCIENCE = 'Science'
}