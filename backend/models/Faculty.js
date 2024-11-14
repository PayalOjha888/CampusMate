// models/Faculty.js

class Faculty {
    constructor(fullName, email, department, coursesTaught) {
        this.fullName = fullName;          
        this.email = email;                
        this.department = department;       
        this.coursesTaught = coursesTaught;
    }
}

module.exports = Faculty;