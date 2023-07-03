const { User, Thought } = require('../models');

module.exports = {
    
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } 
        catch (err) {
            res.status(500).json(err);
        }
    },
    
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId })
                .select('-__v');
            if (!thoughts) {
                return res.status(404).json({ message: `Thought with the ID ${req.params.thoughtId} NOT found` });
            }
            res.json(thought);
        } 
        catch (err) {
            res.status(500).json(err);
        }
    },
    
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            const user = await User.findOneAndUpdate(
                { username: req.body.username }, 
                { $push: { thoughts: thought._id } }, 
                { new: true });
            if (!user) {
                return res.status(404).json({ 
                    message: "Thought created without being connect to any user" 
                });
            }
            res.json(thought);
        } 
        catch (err) {
            return res.status(500).json(err);
        }
    }
    };
