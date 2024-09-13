export default class Fee {
    constructor(student, amount) {
      this.student = student;
      this.amount = amount;
    }
  
    getDetails() {
      return `${this.student.name} owes ${this.amount} dollars.`;
    }
  }
  