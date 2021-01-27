// Require necessary NPM packages
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the Task schema
const TaskSchema = new mongoose.Schema({
    project_id: {
        type: Schema.Types.ObjectId,
        ref: 'Project'
    },
    user_Id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    status: Boolean
});

// Create model from the Task schema
const Task = mongoose.model('Task', TaskSchema);

// Export our Model for use
module.exports = Task;
