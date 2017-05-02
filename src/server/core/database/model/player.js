import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true
	},
	surname: {
		type: String,
		required: true
	},
	knownAs: {
		type: String, 
		required: true
	},
	kitName: {
		type: String,
		required: false
	},
	nation: {
		type: String,
		required: true
	},
	team: {
		type: String,
		required: false
	},
	position: {
		type: String,
		required: false
	},
	role: {
		type: String,
		required: true
	}
});

let Player = mongoose.model('Player', playerSchema);
export default Player;