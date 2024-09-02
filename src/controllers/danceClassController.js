//Creating the Postman endpoint for POST where we want to add a new class function

import { Class } from "../models/danceClassModel";

export const addNewClass = (req, res) => {
    let newClass = new Class(req.body);
    newClass.save((err, savedClass) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(201).json(savedClass);
    });
}
