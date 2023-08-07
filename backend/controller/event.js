const express = require("express");
const Event = require("../model/event");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Shop = require("../model/shop");
const ErrorHandler = require("../utils/ErrorHandler");
const router = express.Router();

// Create Event
router.post(
  "/create-event",
  catchAsyncErrors(async (req, res, next) => {
    try {
      console.log(req.body, "req.body");
        const shopId = req.body.shopId;
        const shop = await Shop.findById(shopId);

        if(!shop) {
            return next(new ErrorHandler("Shop Id is invalid!", 400));
        } else {
            const files = req.files;
            const imageUrls = files.map((file) => `${file.filename}`);
            const eventData = req.body;
            eventData.images = imageUrls;
            eventData.shop = shop;
    
            const event = await Event.create(eventData);
    
            res.status(201).json({
              success: true,
              event,
            });
          }
    } catch (error) {}
  })
);

module.exports = router;
