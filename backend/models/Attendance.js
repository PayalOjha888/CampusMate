class Attendance {
    constructor(studentId, courseId, date, status) {
        this.studentId = studentId; 
        this.courseId = courseId;
        this.date = date;
        this.status = status;     
    }
}

module.exports = Attendance;