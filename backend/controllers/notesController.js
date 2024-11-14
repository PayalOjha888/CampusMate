const db = require('../config/db');

exports.addNote = (req, res) => {
    const { title, content, courseId } = req.body;
  
	const query =
      "INSERT INTO notes(title , content , course_id , uploaded_by ) VALUES (?, ?, ?, ?) ";
  
  	db.query(
      query,
      [title , content , courseId , uploadedBy],
      (error )=>{
      	if(error){
        	console.error("Error adding note:", error);
          	return res.status(500).json({error:"Failed to add note"});
          }
          res.status(201).json({message:"Note added successfully!"});
      }
  	);
};

exports.getAllNotes =(req,res)=>{
  	const query ='SELECT * FROM notes ORDER BY created_at DESC';
  
  	db.query(query,(error , results)=>{
      	if(error){
          	console.error("Error fetching notes:", error);
          	return res.status(500).json({error:"Failed to fetch notes"});
          }
          res.status(200).json(results); 
      }
  	);
};

exports.getNotesByCourseId =(req,res)=>{
  	const {courseId} =req.params; 

  	const query ='SELECT * FROM notes WHERE course_id=? ORDER BY created_at DESC';
  
  	db.query(query,[courseId],(error , results)=>{
      	if(error){
          	console.error("Error fetching notes for course:", error);
          	return res.status(500).json({error:"Failed to fetch notes for this course"});
          }
          res.status(200).json(results); 
      }
  	);
};

exports.getNoteById =(req,res)=>{
  	const {noteId} =req.params; 

  	const query ='SELECT * FROM notes WHERE note_id=?';
  
  	db.query(query,[noteId],(error , results)=>{
      	if(error){
          	console.error("Error fetching note:", error);
          	return res.status(500).json({error:"Failed to fetch note"});
          }
          if(results.length === 0){
          	return res.status(404).json({message:"Note not found"});
          }
          res.status(200).json(results[0]); 
      }
  	);
};

exports.updateNote =(req,res)=>{
  	const {noteId} =req.params; 
  	const {title , content} =req.body;
  
  	const query ='UPDATE notes SET title=?, content=? WHERE note_id=?';
  
  	db.query(query,[title , content , noteId],(error)=>{
      	if(error){
          	console.error("Error updating note:", error);
          	return res.status(500).json({error:"Failed to update note"});
          }
          res.status(200).json({message:"Note updated successfully!"});
      }
  	);
};

exports.deleteNote =(req,res)=>{
  	const {noteId} =req.params; 

  	const query ='DELETE FROM notes WHERE note_id=?';
  
  	db.query(query,[noteId],(error)=>{
      	if(error){
          	console.error("Error deleting note:", error);
          	return res.status(500).json({error:"Failed to delete note"});
          }
          res.status(200).json({message:"Note deleted successfully!"});
      }
  	);
};