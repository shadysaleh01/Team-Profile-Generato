class Employee {
   constructor(name, title, id, email) {
      this.name = name
      this.title = title
      this.id = id
      this.email = email
   }

   getName() {
      console.log(this.name)
      return this.name
   }

   getRole() {
      console.log(this.title)
      return this.title
   }
   getId() {
      return this.id
   }

   getEmail() {
      console.log(this.email)
      return this.email
   }
}

module.exports = Employee