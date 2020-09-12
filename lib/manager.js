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

// function generateHTMLManager(res) {
//    return `<!DOCTYPE html>
//    <html lang="en">

//    <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <!-- Bootstrap CDN -->
//       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
//       <!-- jQuery CDN -->
//       <script src="https://code.jquery.com/jquery-3.5.1.min.js"
//          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>

//       <title>Manager Info</title>
//    </head>



module.exports = Manager