const router = require('express').Router();

// Dummy data
const dummyUser = { id: 1, name: 'Test User', email: 'test@example.com' };
const dummyBicycle = { id: 1, name: 'Mountain Bike', pricePerHour: 50 };
const dummyContact = { id: 1, name: 'John Doe', message: 'Hello' };
const dummyDashboard = { totalUsers: 10, totalBicycles: 5 };

// Auth
router.post('/user/login', (req, res) => res.json({ success: true, token: 'dummy-token' }));

// User
router.post('/user/add', (req, res) => res.json({ success: true, user: dummyUser }));
router.post('/user/single', (req, res) => res.json(dummyUser));
router.post('/user/renter/all', (req, res) => res.json([dummyUser]));
router.post('/user/hirer/all', (req, res) => res.json([dummyUser]));
router.post('/user/update', (req, res) => res.json({ success: true, user: dummyUser }));

// Bicycle
router.post('/bicycle/all', (req, res) => res.json([dummyBicycle]));
router.post('/bicycle/single', (req, res) => res.json(dummyBicycle));
router.post('/bicycle/add', (req, res) => res.json({ success: true, bicycle: dummyBicycle }));
router.post('/bicycle/update', (req, res) => res.json({ success: true, bicycle: dummyBicycle }));
router.post('/bicycle/delete', (req, res) => res.json({ success: true }));

// Bicycle Request
router.post('/bicycleRequest/all', (req, res) => res.json([]));
router.post('/bicycleRequest/single', (req, res) => res.json({}));
router.post('/bicycleRequest/add', (req, res) => res.json({ success: true }));
router.post('/bicycleRequest/update', (req, res) => res.json({ success: true }));

// Contact
router.post('/contact/add', (req, res) => res.json({ success: true }));
router.post('/contact/all', (req, res) => res.json([dummyContact]));
router.post('/contact/single', (req, res) => res.json(dummyContact));

// Dashboard
router.get('/dashboard', (req, res) => res.json(dummyDashboard));

// Catch-all 404
router.all('*', (req, res) => {
    res.status(404).json({ success: false, status: 404, message: "Invalid Address" });
});

module.exports = router;
