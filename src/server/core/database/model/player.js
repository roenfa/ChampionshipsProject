import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
	surname: {
		type: String,
		required: true
	},
	knownAs: {
		type: String, 
		required: true
	}
});

let Player = mongoose.model('Player', playerSchema);
console.log('PLayer Schemma');
export default Player;