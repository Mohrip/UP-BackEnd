import { Injectable } from "@nestjs/common";

@Injectable()
export class homeService {
  calculateEligibility(T: number, Q: number, school: number): string {
    if (T >= 95 && Q >= 95 && school >= 95) {
      return "Eligible to study in the best universities";
    } else {
      return "Not Eligible";
    }
  }
}