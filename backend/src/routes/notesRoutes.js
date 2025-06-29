import express from "express"; //used with type=module
// const express=require("express"); //used with type=common
import { getAllnotes, getNoteById, createNote, updateNote, deleteNote} from "../controllers/notesController.js"

const router=express.Router();

router.get("/", getAllnotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router; //used with type=module
// module.exports = router;  //used with type=common