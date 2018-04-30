import { version } from '../../package.json';
import { Router } from 'express';
import news from '../fakeData/news';
import userId1 from '../fakeData/userId1';
import facets from './facets';

function checkCredentials(body) {
	if (body.username === 'max' && body.password === '12345') {
		return true
	}
	return false
}

export default ({ config, db }) => {
	let api = Router();

	// mount the facets resource
	api.use('/facets', facets({ config, db }));

	api.get('/', (req, res) => {
		res.json({ version });
	});

	api.post('/validate', (req, res) => {
		if (checkCredentials(req.body)) {
			return res.json({
				"status": "ok",
				"data": {
					"id": 1
				}
			})
		}
		res.json({
			"status": "err",
			"message": "wrong_email_or_password"
		})
	})

	api.get('/news', (req, res) => {
		res.json(news);
	})

	api.get('/user-info/:id', (req, res) => {
		if (parseInt(req.params.id) === 1) {
			return res.json(userId1);
		}
		res.json({
			"status": "err",
			"message": "user_not_found",
		})
	})

	return api;
}
