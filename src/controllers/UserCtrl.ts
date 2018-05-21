import * as passport from 'passport';
import { NextFunction } from 'express';
import { users } from '../configs';

export default class UserRoutes {
    static login(req, res) {
        let isAllowed = false;
        users.forEach(el => {
            if(el.googleId === req.body.googleRes.googleId) isAllowed = true;
        });
        isAllowed ? res.sendStatus(200) : res.sendStatus(400);
    }

    static logout(req, res, next) {
        sessionStorage.user = null;
    }
}