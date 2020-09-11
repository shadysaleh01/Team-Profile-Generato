const fs = require("fs")
const inquirer = require("inquirer")
const path = require("path")

// Require class Files
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Choice = require("inquirer/lib/objects/choice")

const employee = []

inquirer.prompt([
   {
      type: "input",
      name: "name",
      message: "What is the Manager's name?"
   },
   {
      type: "input",
      name: "id",
      message: "What is the Manager's ID?"
   },
   {
      type: "input",
      name: "email",
      message: "What is the Manager's email?"
   },
   {
      type: "input",
      name: "officeNo",
      message: "What is the Manager's office number?"
   },
   {
      type: "rawlist",
      name: "role",
      message: "Which type of team member would you like to add?",
      choices: ["Engineer", "Intern", "I don't want to add any more team members"]
   }
]).then(function (res) {
   employee.push(new Manager(res.name, res.id, res.email, res.officeNo))
   if (res.role === "Engineer") {
      return promptEngineer()
   } else if (res.role === "Intern") {
      return promptIntern()
   } else {
      fs.writeFile(outputPath, render(employee), function (err) {
         if (err) throw err
      })
      console.log("Generating HTML file with this info...")
   }
})



function promptEngineer() {
   inquirer.prompt([
      {
         type: "input",
         name: "name",
         message: "What is the Engineer's name?"
      },
      {
         type: "input",
         name: "id",
         message: "What is the Engineer's ID?"
      },
      {
         type: "input",
         name: "email",
         message: "What is the Engineer's email?"
      },
      {
         type: "input",
         name: "github",
         message: "What is the Engineer's GitHub Username?"
      },
      {
         type: "rawlist",
         name: "role",
         message: "Which type of team member would you like to add?",
         choices: ["Engineer", "Intern", "I don't want to add any more team members"]
      }
   ]).then((res) => {
      employee.push(new Engineer(res.name, res.id, res.email, res.github))
      if (res.role === "Engineer") {
         return promptEngineer()
      } else if (res.role === "Intern") {
         return promptIntern()
      } else {
         fs.writeFile(outputPath, render(employee), (err) => {
            if (err) throw err
         })
         console.log("Generating HTML file with this info...")
      }
   })
}
function promptIntern() {
   inquirer.prompt([
      {
         type: "input",
         name: "name",
         message: "What is the Intern's name?"
      },
      {
         type: "input",
         name: "id",
         message: "What is the Intern's ID?"
      },
      {
         type: "input",
         name: "email",
         message: "What is the Intern's email?"
      },
      {
         type: "input",
         name: "school",
         message: "What is the Intern's school?"
      },
      {
         type: "rawlist",
         name: "role",
         message: "Which type of team member would you like to add?",
         choices: ["Engineer", "Intern", "I don't want to add any more team members"]
      }
   ]).then((res) => {
      employee.push(new Intern(res.name, res.id, res.email, res.school))
      if (res.role === "Engineer") {
         return promptEngineer()
      } else if (res.role === "Intern") {
         return promptIntern()
      } else {
         fs.writeFile(outputPath, render(employee), (err) => {
            if (err) throw err
         })
         console.log("Generating HTML file with this info...")
      }
   })

}

















// function (res) {
//       const engineer = `<!DOCTYPE html>
//       <html lang="en">

//       <head>
//          <meta charset="UTF-8">
//          <meta name="viewport" content="width=device-width, initial-scale=1.0">
//          <!-- Bootstrap CDN -->
//          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
//          <!-- jQuery CDN -->
//          <script src="https://code.jquery.com/jquery-3.5.1.min.js"
//             integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>

//          <title>Intern Info</title>
//       </head>

//       <body>
//          <!-- Start Bootstrap Body-->
//          <!-- <div class="jumbotron jumbotron-fluid"> -->
//          <!-- <div class="container bg-white pb-5"> -->
//          <!-- <h1 class="p-5 bg-danger text-center text-white">My Team</h1> -->
//          <!-- Start Row-->
//          <div class="row row ml-5 mr-5 mt-5">

//             <!-- Start Card Layout-->
//             <div class="col-4">
//                <div class="border shadow p-3 mb-5 rounded bg-light" style="width: 18rem;">
//                   <div class="card-header bg-danger text-white">
//                      <h2 class="font-weight-normal">${res.name}</h2>
//                      <h3 class="font-weight-normal">${res.title}</h3>
//                   </div>
//                   <ul class="list-group list-group-flush border mt-4 mb-4">
//                      <li class="list-group-item">${res.id}</li>
//                      <li class="list-group-item">${res.email}</li>
//                      <li class="list-group-item">${res.gitHubUser}</li>
//                   </ul>

//                </div>
//             </div>
//          </div>

//       </body>
//       </html>`
//    }