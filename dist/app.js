Object.defineProperty(exports, '__esModule', { value: true }); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } const _dotenv = require('dotenv');

const _dotenv2 = _interopRequireDefault(_dotenv);
const _path = require('path');

_dotenv2.default.config();

require('./database');

const _express = require('express');

const _express2 = _interopRequireDefault(_express);

const _homeRoutes = require('./routes/homeRoutes');

const _homeRoutes2 = _interopRequireDefault(_homeRoutes);
const _userRoutes = require('./routes/userRoutes');

const _userRoutes2 = _interopRequireDefault(_userRoutes);
const _tokenRoutes = require('./routes/tokenRoutes');

const _tokenRoutes2 = _interopRequireDefault(_tokenRoutes);
const _alunoRoutes = require('./routes/alunoRoutes');

const _alunoRoutes2 = _interopRequireDefault(_alunoRoutes);
const _photoRoutes = require('./routes/photoRoutes');

const _photoRoutes2 = _interopRequireDefault(_photoRoutes);

class App {
  constructor() {
    this.app = _express2.default.call(void 0);
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use('/images', _express2.default.static(_path.resolve.call(void 0, __dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', _homeRoutes2.default);
    this.app.use('/users/', _userRoutes2.default);
    this.app.use('/tokens/', _tokenRoutes2.default);
    this.app.use('/alunos/', _alunoRoutes2.default);
    this.app.use('/photos/', _photoRoutes2.default);
  }
}

exports.default = new App().app; // Aqui estamos instanciando e exportando nossa classe
