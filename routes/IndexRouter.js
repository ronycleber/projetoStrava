var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');
let storage = multer.diskStorage ({
    destination: (req, file, cb) =>{
        //cb(null, path.join('docs', 'enviados'));
        cb(null, 'curriculos');
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname)
        req.nomeAquivo = file.originalname        
   }
});
let upload = multer({storage})



const IndexController = require('../controllers/IndexController');
const LoginController = require('../controllers/LoginController');
const VerificaUsuarioLogado = require('../middlewares/VerificaUsuarioLogado');


/* GET home page. */
router.get('/', IndexController.index);
router.get('/sobre', IndexController.sobre);
router.get('/cadastro', IndexController.showCadastro);
router.post('/cadastro', IndexController.storeCadastro);
router.post('/sobre', upload.single('file'), IndexController.facaParte);

router.get('/home',VerificaUsuarioLogado, LoginController.showCrie);
router.get('/home/novaAula',VerificaUsuarioLogado, LoginController.showNovaAula);
router.get('/home/agenda',VerificaUsuarioLogado, LoginController.showCrie);
router.get('/home/cadastrarAlunos', VerificaUsuarioLogado, LoginController.showCadastroAluno);
router.post('/home/cadastrarAlunos', VerificaUsuarioLogado, upload.single("img"), LoginController.showNovoAluno);
router.get('/home/alunos',VerificaUsuarioLogado, LoginController.showAlunos);
router.get('/home/alunos/editar',VerificaUsuarioLogado, LoginController.editarAlunos);
router.get('/busca', VerificaUsuarioLogado, LoginController.search);
router.get('/home/treino/:id',VerificaUsuarioLogado, LoginController.showTreino);
router.get('/home/financas',VerificaUsuarioLogado, LoginController.showFinancas);
router.get('/depoimento',VerificaUsuarioLogado, IndexController.depoimentos)
router.get('/login', LoginController.showLogin);
router.post('/login', LoginController.login);
router.get('/logout', LoginController.logout);

module.exports = router;
