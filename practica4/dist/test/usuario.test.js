"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
const database_1 = require("../config/database");
const Usuario_1 = require("../entities/Usuario");
const bcrypt_1 = __importDefault(require("bcrypt"));
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.AppDataSource.initialize();
}));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.AppDataSource.destroy();
}));
describe('Usuario Entity', () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        const usuarioRepository = database_1.AppDataSource.getRepository(Usuario_1.Usuario);
        yield usuarioRepository.clear();
    }));
    it('should register a user and hash the password', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default)
            .post('/api/usuarios/registro')
            .send({ nombre: 'Juan', clave: 'mi_contraseña' });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('mensaje', 'Usuario registrado exitosamente');
        const usuario = yield database_1.AppDataSource.getRepository(Usuario_1.Usuario).findOneBy({ nombre: 'Juan' });
        expect(usuario).toBeDefined();
        if (usuario) {
            expect(yield bcrypt_1.default.compare('mi_contraseña', usuario.clave)).toBe(true);
        }
    }));
    it('should not register a user with the same name', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(app_1.default)
            .post('/api/usuarios/registro')
            .send({ nombre: 'Juan', clave: 'mi_contraseña' });
        const response = yield (0, supertest_1.default)(app_1.default)
            .post('/api/usuarios/registro')
            .send({ nombre: 'Juan', clave: 'otra_contraseña' });
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('mensaje', 'El usuario ya existe');
    }));
    it('should login a user with valid credentials', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(app_1.default)
            .post('/api/usuarios/registro')
            .send({ nombre: 'Juan', clave: 'mi_contraseña' });
        const response = yield (0, supertest_1.default)(app_1.default)
            .post('/api/usuarios/login')
            .send({ nombre: 'Juan', clave: 'mi_contraseña' });
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('mensaje', 'Inicio de sesión exitoso');
        expect(response.body).toHaveProperty('token');
    }));
    it('should not login a user with invalid credentials', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(app_1.default)
            .post('/api/usuarios/registro')
            .send({ nombre: 'Juan', clave: 'mi_contraseña' });
        const response = yield (0, supertest_1.default)(app_1.default)
            .post('/api/usuarios/login')
            .send({ nombre: 'Juan', clave: 'incorrecta' });
        expect(response.status).toBe(401);
        expect(response.body).toHaveProperty('mensaje', 'Credenciales incorrectas');
    }));
});
