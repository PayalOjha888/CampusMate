class Feedback {
    constructor(studentId, feedbackText, courseName) {
        this.studentId = studentId;
        this.feedbackText = feedbackText;
        this.courseName = courseName;
        this.createdAt = new Date(); 
    }
}

module.exports = Feedback;