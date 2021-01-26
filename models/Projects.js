// Require necessary NPM packages
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const projectsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    members: [{
        user_Id: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        role: {
            type: String,
            default: 'member'
        }
    }],
    start_date: {
        type: Date,
        default: Date.now
    },
    end_date: {
        type: Date
    },
    status: Boolean
})
// Compile our Model based on the Schema
const projects = mongoose.model("Project", projectsSchema);

// Export our Model for use
module.exports = projects
