import * as express from "express";
import * as session from "express-session";
import * as bodyParser from "body-parser";
import * as path from "path";
import router from "./routes/index.route";
import * as passport from 'passport';
import configurePassport from './passport-setup';
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import { googleConfigs, users } from './configs';

const app = express();

app.set("port", process.env.PORT || 8000);
// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

app.use(express.static(path.join(__dirname, "../public")));
app.use(session({ secret: "secret"}));
app.use(passport.initialize());
app.use(passport.session());
configurePassport(passport);

app.use("/", router);

app.listen(app.get("port"), () => {
  console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
  console.log("  Press CTRL-C to stop\n");
});

module.exports = app;