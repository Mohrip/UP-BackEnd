import { Injectable } from '@nestjs/common';

@Injectable()
export class CfyService {
  calculateEligibility(T: number, Q: number, GPA: number): string {
    if (T > 100 || Q > 100) {
      return "Wrong Input!!! The input must be less than or equal to 100";
    }

    const avg = (T * 0.25) + (Q * 0.25) + ((GPA / 5) * 50);   
    console.log("thisistheavg", avg);

    if (avg >= 95) {
      return `According to your grades: (${avg}), you are eligible to apply for:
        1-Software Engineering
        2-Computer Science
        3-Information System
        4-Computer Engineering
        5-Dentist college
        6-College of medicine
        7-college of pharmacy
        8-College of Engineering (General)
        9-Architecture and Building Sciences
        10-Urban Planning`;
    } else if (avg >= 90) {
      return `According to your grades: ( ${avg} ), you are eligible to apply for:
        1-Computer Science
        2-Information System
        3-Computer Engineering
        4-Dentist college
        5-College of medicine
        6-college of pharmacy
        7-College of Engineering (General)
        8-Architecture and Building Sciences
        9-Urban Planning`;
    } else {
      return "According to your grades: ( ${avg} ), you are not eligible to apply for any of the above colleges";
    }
  }

  // New function to return the list of Saudi colleges based on the average
  // getSaudiColleges(avg: number): string {
  //   if (avg >= 95) {
  //     return `According to your average: ( ${avg} ), you are eligible to apply for:
  //       1-King Saud University
  //       2-King Abdulaziz University
  //       3-King Fahd University of Petroleum and Minerals
  //       4-Princess Nourah Bint Abdulrahman University
  //       5-Imam Abdulrahman Bin Faisal University`;
  //   } else if (avg >= 85) {
  //     return `According to your average: ( ${avg} ), you are eligible to apply for:
  //       1-King Saud University
  //       2-King Abdulaziz University
  //       3-Princess Nourah Bint Abdulrahman University
  //       4-Imam Abdulrahman Bin Faisal University`;
  //   } else {
  //     return `According to your average: ( ${avg} ), you are eligible to apply for:
  //       1-King Saud University
  //       2-Princess Nourah Bint Abdulrahman University`;
  //   }
  // }
}