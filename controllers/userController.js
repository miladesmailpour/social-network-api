
const { User, Thought } = require('../models');

module.exports = {
    
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getSingleUser(req, res) {
        try {
            const users = await User.findOne({ _id: req.params.userId })
                .select('-__v')
                .populate('thoughts')
                .populate('friends');
            if (!users) {
                return res.status(404).json({ message: `User with the ID ${req.params.userId} NOT found` });
            }
            res.json(users);
        } 
        catch (err) {
            res.status(500).json(err);
        }
    },

    async createUser(req, res) {
        try {
            const users = await User.create(req.body);
            if (!users) {
                return res.status(404).json({ message: `User with the username ${req.body.username} had NOT created` });
            }
            res.json(users);
        }
        catch (err) {
            return res.status(500).json(err);
        }
    },
    
    async updateUser(req, res) {
        try {
            const users = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { 
                    runValidators: true, 
                    new: true 
                }
            )
            if (!users) {
                return res.status(404).json({ message: `User with the ID ${req.params.userId} NOT found` });
            }
            res.json(users);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },
    
    async deleteUser(req, res) {
        try {
            const users = await User.findOneAndDelete({ _id: req.params.userId });
            const thought = await Thought.findOneAndDelete({ thoughts: users.thoughts });
            if (!users) {
                return res.status(404).json({ message: `User with the ID ${req.params.userId} NOT found` });
            }
            res.json({ message: `User with ID:(${req.params.userId}) and ALL related thoughts  deleted` });
        }
        catch (err) {
            res.status(500).json(err);
        }
    },
    
    async createFriend(req, res) {
        console.log(req.body)
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $push: { friends: req.body._id } },
                { runValidators: true, new: true })
            if (!user) {
                return res.status(404).json({ message: `User with the ID ${req.params.userId} NOT found` });
            }
            res.json(user);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteFriend(req, res) {
        console.log(req.body)
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: req.body.friendId } },
                { runValidators: true, new: true }
                );
            if (!user) {
                return res.status(404).json({ message: `User with the ID ${req.params.userId} NOT found` });
            }
            res.json(user);
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
}
