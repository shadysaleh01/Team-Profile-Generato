class Employee {
   constructor(name, id, email) {
      this.name = name
      this.id = id
      this.email = email
   }

   getName() {
      console.log(this.name)
      return this.name
   }

   getRole() {
      return "Employee"
   }
   getId() {
      console.log(this.id)
      return this.id
   }

   getEmail() {
      console.log(this.email)
      return this.email
   }
}

module.exports = Employee