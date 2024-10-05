"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumno = void 0;
const typeorm_1 = require("typeorm");
let Alumno = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _ID_decorators;
    let _ID_initializers = [];
    let _ID_extraInitializers = [];
    let _Nombre_decorators;
    let _Nombre_initializers = [];
    let _Nombre_extraInitializers = [];
    let _Identificación_decorators;
    let _Identificación_initializers = [];
    let _Identificación_extraInitializers = [];
    var Alumno = _classThis = class {
        constructor() {
            this.ID = __runInitializers(this, _ID_initializers, void 0);
            this.Nombre = (__runInitializers(this, _ID_extraInitializers), __runInitializers(this, _Nombre_initializers, void 0));
            this.Identificación = (__runInitializers(this, _Nombre_extraInitializers), __runInitializers(this, _Identificación_initializers, void 0));
            __runInitializers(this, _Identificación_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Alumno");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _ID_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _Nombre_decorators = [(0, typeorm_1.Column)()];
        _Identificación_decorators = [(0, typeorm_1.Column)()];
        __esDecorate(null, null, _ID_decorators, { kind: "field", name: "ID", static: false, private: false, access: { has: obj => "ID" in obj, get: obj => obj.ID, set: (obj, value) => { obj.ID = value; } }, metadata: _metadata }, _ID_initializers, _ID_extraInitializers);
        __esDecorate(null, null, _Nombre_decorators, { kind: "field", name: "Nombre", static: false, private: false, access: { has: obj => "Nombre" in obj, get: obj => obj.Nombre, set: (obj, value) => { obj.Nombre = value; } }, metadata: _metadata }, _Nombre_initializers, _Nombre_extraInitializers);
        __esDecorate(null, null, _Identificación_decorators, { kind: "field", name: "Identificaci\u00F3n", static: false, private: false, access: { has: obj => "Identificaci\u00F3n" in obj, get: obj => obj.Identificación, set: (obj, value) => { obj.Identificación = value; } }, metadata: _metadata }, _Identificación_initializers, _Identificación_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Alumno = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Alumno = _classThis;
})();
exports.Alumno = Alumno;
