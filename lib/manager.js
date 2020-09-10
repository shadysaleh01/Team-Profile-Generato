const Employee = require("./employee")

class Manager extends Employee {
   constructor(name, title, id, email, officeNo) {
      super(name, title, id, email)
      this.officeNo = officeNo
   }

   getRole() {
      return this.title
   }

   getOfficeNo() {
      return this.officeNo
   }
}

