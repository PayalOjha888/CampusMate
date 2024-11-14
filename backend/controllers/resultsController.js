const db = require('../config/db');

exports.addResult = (req, res) => {
    const { studentId, courseId, testType, score, totalMarks } = req.body;

    const query = 'INSERT INTO results(student_id , course_id , test_type , score , total_marks ) VALUES (?, ?, ?, ?, ?)';

    db.query(query, [studentId, courseId, testType, score, totalMarks], (error) => {
        if (error) {
            console.error("Error adding result:", error);
            return res.status(500).json({ error: "Failed to add result" });
        }
        res.status(201).json({ message: "Result added successfully!" });
    }
    );
};

exports.getResultsByStudentId = (req, res) => {
    const { studentId } = req.params;

    const query = 'SELECT * FROM results WHERE student_id=? ORDER BY created_at DESC';

    db.query(query, [studentId], (error, results) => {
        if (error) {
            console.error("Error fetching results:", error);
            return res.status(500).json({ error: "Failed to fetch results" });
        }
        res.status(200).json(results);
    }
    );
};

exports.getResultsByCourseId = (req, res) => {
    const { courseId } = req.params;

    const query = 'SELECT * FROM results WHERE course_id=? ORDER BY created_at DESC';

    db.query(query, [courseId], (error, results) => {
        if (error) {
            console.error("Error fetching results for course:", error);
            return res.status(500).json({ error: "Failed to fetch results for this course" });
        }
        res.status(200).json(results);
    }
    );
};

exports.getResultById = (req, res) => {
    const { resultId } = req.params;
    const query = 'SELECT * FROM results WHERE result_id=?';

    db.query(query, [resultId], (error, results) => {
        if (error) {
            console.error("Error fetching result:", error);
            return res.status(500).json({ error: "Failed to fetch result" });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: "Result not found" });
        }
        res.status(200).json(results[0]);
    }
    );
};

exports.updateResult = (req, res) => {
    const { resultId } = req.params;
    const { score, totalMarks } = req.body;

    const query = 'UPDATE results SET score=?, total_marks=? WHERE result_id=?';

    db.query(query, [score, totalMarks, resultID], (error) => { if (error) { console.error("Error updating result:", error); returnres.status(500).json({ error: " Failedto update result" }); } res.status(200).json({ message: " Result updated successfully!" }); });
};