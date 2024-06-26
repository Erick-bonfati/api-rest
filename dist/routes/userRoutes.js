"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// Estes dois abaixo, não deveriam existir
//router.get('/', userController.index); // Lista usuários
// router.get('/:id', userController.show); // Lista usuário

router.post('/', _loginRequired2.default, _UserController2.default.store); // Cria usuario
router.put('/', _loginRequired2.default, _UserController2.default.update); // Atualiza usuario
router.delete('/', _loginRequired2.default, _UserController2.default.delete); // Deleta usuario

exports. default = router;

/*

  index -> lista todos os usuarios -> GET
  store/create -> cria um novo usuario -> POST
  delete -> apaga um usuário -> DELETE
  show -> mostra um usuário -> GET
  update -> atualiza um usuário -> PATCH ou PUT

*/
