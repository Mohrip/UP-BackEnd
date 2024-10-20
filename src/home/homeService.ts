import { Injectable } from "@nestjs/common";

@Injectable()
export class homeService {
  private universities = [
    {
      UniversityName: "KAU",
      location: "Jeddah",
      rating: 4.85,
      UniversityID: 1,
      UniversityUrl: "https://www.kau.edu.sa/Home.aspx",
    },
    {
      UniversityName: "KSU",
      location: "Riyadh",
      rating: 5,
      UniversityID: 2,
      UniversityUrl: "https://www.ksu.edu.sa/",
    },
    {
      UniversityName: "KFU",
      location: "Dammam",
      rating: 3.1,
      UniversityID: 3,
      UniversityUrl: "https://www.kfu.edu.sa/ar/Pages/default.aspx",
    },
    {
      UniversityName: "UQU",
      location: "Makkah",
      rating: 3.65,
      UniversityID: 4,
      UniversityUrl: "https://uqu.edu.sa/",
    },
    {
      UniversityName: "PSU",
      location: "Al-Ahsa",
      rating: 3.99,
      UniversityID: 5,
      UniversityUrl: "https://www.psu.edu.sa/ar/",
    },
    {
    UniversityName: "PMU",
    location: "Al-Khobar",
    rating: 2.8,
    UniversityID: 6,
    UniversityUrl: "https://www.pmu.edu.sa/",
    },
    {
    UniversityName: "IMAMU",
    location: "Riyadh",
    rating: 3.1,
    UniversityID: 7,
    UniversityUrl: "https://www.imamu.edu.sa/",
    },
    

    {
      UniversityName: "YU",
      location: "Yanbu",
      rating: 3.99,
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
      rating: 2.5,
      UniversityID: 11,
      UniversityUrl: "https://www.bu.edu.sa/web/",
    },
    {
      UniversityName: "TU",
      location: "Tabuk",
      rating: 2.2,
      UniversityID: 12,
      UniversityUrl: "https://www.ut.edu.sa/",
    },
    {
      UniversityName: "HailU",
      location: "Hail",
      rating: 2.1,
      UniversityID: 13,
      UniversityUrl: "https://www.uoh.edu.sa/",
    },
    {
      UniversityName: "NU",
      location: "Najran",
      rating: 2.21,
      UniversityID: 14,
      UniversityUrl: "https://www.nu.edu.sa/",
    },
    {
      UniversityName: "BU",
      location: "Bisha",
      rating: 2.11,
      UniversityID: 15,
      UniversityUrl: "https://www.bu.edu.sa/web/",
    },
    {
      UniversityName: "JU",
      location: "Jouf",
      rating: 2.65,
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
      rating: 4.5,
      UniversityID: 19,
      UniversityUrl: "https://www.kfupm.edu.sa/",
    },
    {
      UniversityName: "KAUST",
      location: "Thuwal",
      rating: 4.4,
      UniversityID: 20,
      UniversityUrl: "https://www.kaust.edu.sa/en",
    },
    {
      UniversityName: "PNU",
      location: "Riyadh",
      rating: 4.3,
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
              /*FOR THE ELIGIBILITY:  THEN... 
              I WANT TO ADD A FUNCTION THAT WILL RETURN THE list of uni based on the grades of the student and it needs to be fetch auto  */
///
///
              
  async calculateEligibility(T: number, Q: number, school: number): Promise<any> {
    if (T >= 95 && Q >= 95 && school >= 95) {
      return "Eligible to study in the best universities" ;
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

  private getUniversityByRating(minRating: number=0): string {
    
    return this.universities
    .filter(uni => uni.rating >= minRating)
    .map(uni => `${uni.UniversityName} (${uni.location})`)
    .join(', ');
}
  


  // private getUniversity(): string {

  //   return this.universities.map(uni => `${uni.UniversityName} (${uni.location})`).join(', ');
  // }
}