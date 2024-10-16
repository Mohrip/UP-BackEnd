import { Injectable } from "@nestjs/common";

@Injectable()
export class homeService {
  private universities = [
    {
      UniversityName: "KAU",
      location: "Jeddah",
      rating: 4.5,
      UniversityID: 1,
      UniversityUrl: "https://www.kau.edu.sa/Home.aspx",
    },
    {
      UniversityName: "KSU",
      location: "Riyadh",
      rating: 4.3,
      UniversityID: 2,
      UniversityUrl: "https://www.ksu.edu.sa/",
    },
    {
      UniversityName: "KFU",
      location: "Dammam",
      rating: 4.1,
      UniversityID: 3,
      UniversityUrl: "https://www.kfu.edu.sa/ar/Pages/default.aspx",
    },
    {
      UniversityName: "UQU",
      location: "Makkah",
      rating: 4.0,
      UniversityID: 4,
      UniversityUrl: "https://uqu.edu.sa/",
    },
    {
      UniversityName: "PSU",
      location: "Al-Ahsa",
      rating: 3.9,
      UniversityID: 5,
      UniversityUrl: "https://www.psu.edu.sa/ar/",
    },
    {
    UniversityName: "PMU",
    location: "Al-Khobar",
    rating: 3.8,
    UniversityID: 6,
    UniversityUrl: "https://www.pmu.edu.sa/",
    },
    {
    UniversityName: "IMAMU",
    location: "Riyadh",
    rating: 3.7,
    UniversityID: 7,
    UniversityUrl: "https://www.imamu.edu.sa/",
    },
    

    {
      UniversityName: "YU",
      location: "Yanbu",
      rating: 3.6,
      UniversityID: 8,
      UniversityUrl: "https://yu.edu.sa/",
    },
    {
      UniversityName: "QassimU",
      location: "Qassim",
      rating: 3.5,
      UniversityID: 9,
      UniversityUrl: "https://www.qu.edu.sa/",
    },
    {
      UniversityName: "JU",
      location: "Jazan",
      rating: 3.4,
      UniversityID: 10,
      UniversityUrl: "https://www.ju.edu.sa/",
    },
    {
      UniversityName: "BU",
      location: "Buraydah",
      rating: 3.3,
      UniversityID: 11,
      UniversityUrl: "https://www.bu.edu.sa/web/",
    },
    {
      UniversityName: "TU",
      location: "Tabuk",
      rating: 3.2,
      UniversityID: 12,
      UniversityUrl: "https://www.ut.edu.sa/",
    },
    {
      UniversityName: "HailU",
      location: "Hail",
      rating: 3.1,
      UniversityID: 13,
      UniversityUrl: "https://www.uoh.edu.sa/",
    },
    {
      UniversityName: "NU",
      location: "Najran",
      rating: 3.0,
      UniversityID: 14,
      UniversityUrl: "https://www.nu.edu.sa/",
    },
    {
      UniversityName: "BU",
      location: "Bisha",
      rating: 2.9,
      UniversityID: 15,
      UniversityUrl: "https://www.bu.edu.sa/web/",
    },
    {
      UniversityName: "JU",
      location: "Jouf",
      rating: 2.8,
      UniversityID: 16,
      UniversityUrl: "https://www.ju.edu.sa/",
    },
    {
      UniversityName: "RAU",
      location: "Riyadh",
      rating: 2.7,
      UniversityID: 17,
      UniversityUrl: "https://www.rau.edu.sa/",
    },
    {
      UniversityName: "UOB",
      location: "Buraydah",
      rating: 2.6,
      UniversityID: 18,
      UniversityUrl: "https://www.uob.edu.sa/",
    },
    {
      UniversityName: "KFUPM",
      location: "Dhahran",
      rating: 2.5,
      UniversityID: 19,
      UniversityUrl: "https://www.kfupm.edu.sa/",
    },
    {
      UniversityName: "KAUST",
      location: "Thuwal",
      rating: 2.4,
      UniversityID: 20,
      UniversityUrl: "https://www.kaust.edu.sa/en",
    },
    {
      UniversityName: "PNU",
      location: "Riyadh",
      rating: 2.3,
      UniversityID: 21,
      UniversityUrl: "https://www.pnu.edu.sa/",
    },


  ];

  async searchForUniversities(UniversityName: string): Promise<any> {
    const university = this.universities.find(
      (uni) => uni.UniversityName === UniversityName
    );
    if (university) {
      return university;
    } else {
      return { message: "University not found" };
    }
  }
              /*FOR THE ELIGIBILITY: I WANT TO RANK BEST UNIS IN SCALE FROM 3.99 -> 5 // AND THE GOOD ONES 2.99 -> 3.98 OTHERS 2.99 AND BELOW 
              THEN... I WANT TO ADD A FUNCTION THAT WILL RETURN THE RANK OF THE UNIVERSITY BASED ON THE RATING WITH THE FOLLOWING CONDITIONS: AND MESSAGE TO THE USER  */

              
  calculateEligibility(T: number, Q: number, school: number): string {
    if (T >= 95 && Q >= 95 && school >= 95) {
      return "Eligible to study in the best universities";
    } else if (T >= 90 && Q >= 90 && school >= 90) {
      return "Eligible to study in good universities";
    }
    else if (T >= 80 && Q >= 80 && school >= 80) {
      return "Eligible to study in other universities";
    }
    else {
      return "Not Eligible";

    }
  }
}