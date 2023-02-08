import mongoose from 'mongoose';

const interviewSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    company:{
        type:String,
        required:true
    },
    round1:{
        type:String
    },
    round2:{
        type:String
    },
    round3:{
        type:String
    },
    round4:{
        type:String
    }
});


const Form = mongoose.model('Form', interviewSchema);

export default Form;