class Results {
    constructor(studentId, courseId, testType, score, totalMarks) {
        this.studentId = studentId;
        this.courseId = courseId;     
        this.testType = testType;
        this.score = score;           
        this.totalMarks = totalMarks;
        this.createdAt = new Date();
    }
}

module.exports = Results;