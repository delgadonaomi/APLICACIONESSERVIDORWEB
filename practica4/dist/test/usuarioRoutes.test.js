"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Usuario_1 = require("../entities/Usuario"); // Asegúrate de que esta ruta sea correcta
const bcrypt = __importStar(require("bcrypt"));
const typeorm_2 = require("typeorm");
describe('Usuario Entity', () => {
    let dataSource;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        // Inicializa la conexión a la base de datos
        dataSource = new typeorm_1.DataSource({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'practica',
            entities: [Usuario_1.Usuario],
            synchronize: true, // Para desarrollo, permite que la base de datos se sincronice con la entidad
        });
        yield dataSource.initialize();
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        // Cierra la conexión a la base de datos
        yield dataSource.destroy();
    }));
    it('should create a user and hash the password', () => __awaiter(void 0, void 0, void 0, function* () {
        const usuarioPrueba = {
            nombre: 'Carlos Pérez',
            clave: 'contraseñaSegura123',
            estado: 'Activo',
        };
        // Hashear la contraseña
        const hashedPassword = yield bcrypt.hash(usuarioPrueba.clave, 10);
        // Crear la instancia del usuario
        const usuario = new Usuario_1.Usuario();
        usuario.nombre = usuarioPrueba.nombre;
        usuario.clave = hashedPassword; // Asignar la contraseña hasheada
        usuario.estado = usuarioPrueba.estado;
        // Guardar el usuario en la base de datos
        const usuarioRepository = (0, typeorm_2.getRepository)(Usuario_1.Usuario);
        const usuarioGuardado = yield usuarioRepository.save(usuario);
        // Verificar que el usuario fue guardado
        expect(usuarioGuardado).toHaveProperty('id'); // El ID debería existir después de guardar
        expect(usuarioGuardado.nombre).toBe(usuarioPrueba.nombre); // Verificar el nombre
        expect(usuarioGuardado.estado).toBe(usuarioPrueba.estado); // Verificar el estado
        // Verificar que la contraseña se ha hasheado correctamente
        const match = yield bcrypt.compare(usuarioPrueba.clave, usuarioGuardado.clave);
        expect(match).toBe(true); // La comparación debería ser verdadera
    }));
});
