import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import { googleConfigs, users } from './configs';

export default function configurePassport(passport: any) {
    passport.serializeUser((user, done) => {
        done(undefined, user.id);
    });

    passport.deserializeUser((id, done) => {
        const user = users.find((u) => {
            return u.id === id;
        });
        if (user) {
            done(undefined, user);
        }
    });

    passport.use(
        new GoogleStrategy({
            clientID: googleConfigs.clientID,
            clientSecret: googleConfigs.clientSecret,
            callbackURL: '/google-login'
        }, (accessToken, refreshToken, profile, done) => {
            const user = users.find((u) => {
                return u.googleId === profile.id;
            });
            if (user) {
                return done(undefined, users[0]);
            } else {
                return done(new Error('Need to login'));
            }
        })
    );
}

export const isAuthenticated = (req, res, next) => {
    if (req.user) {
      return next();
    } else {
        return next(new Error('Need to login'));
    }
};