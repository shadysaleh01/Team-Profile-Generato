const Employee = require("./employee")

class Manager extends Employee {
   constructor(name, id, email, officeNo) {
      super(name, id, email)
      this.officeNo = officeNo
   }

   getRole() {
      return "Manager"
   }

   getOfficeNumber() {
      return this.officeNo
   }
}


module.exports = Manager