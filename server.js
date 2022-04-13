const { prompt } = require('inquirer');
const db = require("./db");
require("console.table");

init();

function init() {
    console.log("Welcome!");

    manu();
}

function manu() {
    prompt([
        {
            type: "list",
            name: "choice",
            message: "what does your heart desires?",
            choices: [
                {
                    name: "View All Employees",
                    value: "VIEW_EMPLOYEES"
                },
                {
                    name: "View All Employees By Department",
                    value: "VIEW_EMPLOYEES_BY_DEPARTMENT"
                },
                {
                    name: "View All Employees By Manager",
                    value: "VIEW_EMPLOYEES_BY_MANAGER"
                },
                {
                    name: "View All Roles",
                    value: "VIEW_ALL_ROLES"
                },
                {
                    name: "View All Departments",
                    value: "VIEW_ALL_DEPARTMENTS"
                },
                {
                    name: "Quit",
                    value: "QUIT"
                }
            ]
        }
   
    ]).then(res => {
        let choice = res.choice;
        switch(choice) {
            case "VIEW_EMPLOYEES":
                viewEmployees();
                break;
            case "VIEW_EMPLOYEES_BY_DEPARTMENT":
                viewEmployeesByDepartment();
                break;
            case "VIEW_EMPLOYEES_BY_MANAGER":
                viewEmployeesByManager();
                break;
            case "VIEW_ALL_ROLES":
                viewAllRoles();
                break;
            case "VIEW_ALL_DEPARTMENTS":
                viewAllDepartments();
                break;
            default:
                quit();
        }
    })
}

function viewEmployees() {
    db.findAllEmployees()
        .then(([rows]) => {
            let employees = rows;
            console.log("\n");
            console.table(employees);
        })
        .then(() => manu());
}

function viewEmployeesByDepartment() {
    db.findAllDepartments()
        .then(([rows]) => {
            let departments = rows;
            const departmentChoices = departments.map(({ id, name }) => ({
                name: name,
                value: id
            }));
            prompt ([
                {
                    type: "list",
                    name: "departmentId",
                    message: "Which department woud you like to see employees for?",
                    choices: departmentChoices
                }
            ])
                .then(res => db.findAllEmployeesByDepartment(res.departmentId))
                .then(([rows]) => {
                    let employees = rows;
                    console.log("\n");
                    console.table(employees);
                })
                .then(() => manu());
        });
}

function viewEmployeesByManager() {
    db.findAllEmployees()
        .then(([rows]) => {
            let managers = rows;
            const managerChoices = managers.map(({ id, first_name, last_name }) => ({
                name: `${first_name} ${last_name}`,
                value: id
            }));
            prompt ([
                {
                    type: "list",
                    name: "managerId",
                    message: "Which employee do you want to see direct reports for?",
                    choices: managerChoices
                }
            ])
                .then(res => db.findAllEmployeesByManager(res.managerId))
                .then(([rows]) => {
                    let employees = rows;
                    console.log("\n");
                    if(employees.length === 0){
                        console.log("The selected employee has no direct reports");
                    } else {
                        console.table(employees);
                    }
                })
                .then(() => manu())
        });
}

function viewAllRoles() {
    db.findAllRoles()
        .then(([rows]) => {
            let roles = rows;
            console.log("\n");
            console.table(roles);
        })
        .then(() => manu());
}

function viewAllDepartments() {
    db.findAllDepartments()
        .then(([rows]) => {
            let departments = rows;
            console.log("\n");
            console.table(departments);
        })
        .then(() => manu());
}

function quit() {
    console.log('cya later alligator');
    process.exit();
} 