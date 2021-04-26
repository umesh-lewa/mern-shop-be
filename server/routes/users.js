const express = require('express');
const router = express.Router();
const { User } = require("../models/User");
const { Product } = require('../models/Product');
const { auth } = require("../middleware/auth");
const { Payment } = require('../models/Payment');

const async = require('async');

//==================================================================
//             User Route
//==================================================================

router.get("/auth", auth, (req, res) => {

    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.image,
        cart: req.user.cart,
        history: req.user.history
    });

});

//================================= Register User =================================//
router.post("/register", (req, res) => {

    const user = new User(req.body);

    user.save((err, doc) => {

        if (err) 
            return res.json({ success: false, err });

        return res.status(200).json({
            success: true
        });

    });

});


module.exports = router;