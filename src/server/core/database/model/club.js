import mongoose from 'mongoose';

const clubSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	logo: { 
		type: Buffer, 
		required: false 
	},
	nationalidad: {
		type: String, 
		required: false
	}
});

let Club = mongoose.model('Club', clubSchema);
export default Club;