let { MessageRoutes } = require('./components/message/routes');
/**
 * Init Express REST routes
 *
 * @param {Router} router
 * @returns {void}
 */
 function initRestRoutes(router) {
	const prefix = '/api/v1';

	router.get(prefix, (req, res) => res.send('PING'));
    
    router.use(`${prefix}/messages`, new MessageRoutes().router);
}
module.exports = {
    initRestRoutes
};