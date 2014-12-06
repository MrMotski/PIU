 var express = require('express');
var router = express.Router();
var usercontroller = require('../controller/usercontroller');
var gamecontroller = require('../controller/gamecontroller');
var moment = require('moment');

/* GET home page. */
/*router.get('/', usercontroller.index);*/

router.get('/login', usercontroller.login);
router.post('/login', usercontroller.login_proceed);
router.post('/login_fb', usercontroller.login_fb);

router.get('/logout', usercontroller.logout);

router.get('/api/me', usercontroller.me);

router.get('/signup', usercontroller.signup);
router.post('/signup', usercontroller.signup_proceed);
router.post('/signup_fb', usercontroller.signup_fb_proceed);

router.post('/api/creategame', gamecontroller.create_proceed);


router.get('/api/nearme', usercontroller.nearme);
router.post('/api/nearme/join/:uniqueId*', gamecontroller.join_game);
router.post('/api/nearme/leave/:uniqueId*', gamecontroller.leave_game);

router.get('/api/created', gamecontroller.list_created);

router.get('/api/game/:uniqueId*', gamecontroller.show_game);

router.get('/api/player/:uniqueId*', usercontroller.show_user);

router.get('/api/list', gamecontroller.list_games);
router.get('/api/count', gamecontroller.count_games);

router.get('/api/test', gamecontroller.user_schedule);

module.exports = router;

/* API Calls from PickItUpService in pickitup.xdk

	This is where the asynchronous API calls to the nodeJS server happen.
	These all return JSON responses
	getGames: GET /api/list
	getGamesCount: GET /api/count
	submitGame: POST /api/creategame
	joinGame: POST /api/nearme/join/:id
	leaveGame: POST /api/nearme/leave/:id
	gameInfo: GET /api/game/:id
	playerInfo: GET /api/player/:id
	myDetails: GET /api/me

*/
