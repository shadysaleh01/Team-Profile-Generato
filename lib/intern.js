const Employee = require("./Employee")

class Intern extends Employee {
   constructor(name, id, email, school) {
      super(name, id, email)
      this.school = school
   }

   getSchool() {
      return this.school
   }

   getRole() {
      return "Intern"
   }
}

function generateHTMLIntern(res) {
   return `<!DOCTYPE html>
      <html lang="en">
      
      <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <!-- Bootstrap CDN -->
         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
         <!-- jQuery CDN -->
         <script src="https://code.jquery.com/jquery-3.5.1.min.js"
            integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
      
         <title>Intern Info</title>
      </head>
      
      <body>
         <!-- Start Bootstrap Body-->
         <!-- <div class="jumbotron jumbotron-fluid"> -->
         <!-- <div class="container bg-white pb-5"> -->
         <!-- <h1 class="p-5 bg-danger text-center text-white">My Team</h1> -->
         <!-- Start Row-->
         <div class="row row ml-5 mr-5 mt-5">
      
            <!-- Start Card Layout-->
            <div class="col-4">
               <div class="border shadow p-3 mb-5 rounded bg-light" style="width: 18rem;">
                  <div class="card-header bg-danger text-white">
                     <h2 class="font-weight-normal">${res.name}</h2>
                     <h3 class="font-weight-normal">Intern</h3>
                  </div>
                  <ul class="list-group list-group-flush border mt-4 mb-4">
                     <li class="list-group-item">${res.id}</li>
                     <li class="list-group-item">${res.email}</li>
                     <li class="list-group-item">${res.school}</li>
                  </ul>
      
               </div>
            </div>
         </div>
      
      </body>
      </html>`
}

module.exports = Intern