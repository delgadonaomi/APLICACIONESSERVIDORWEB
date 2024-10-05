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
exports.Nota = void 0;
const typeorm_1 = require("typeorm");
let Nota = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _ID_decorators;
    let _ID_initializers = [];
    let _ID_extraInitializers = [];
    let _ID_Curso_decorators;
    let _ID_Curso_initializers = [];
    let _ID_Curso_extraInitializers = [];
    let _ID_Aspirante_decorators;
    let _ID_Aspirante_initializers = [];
    let _ID_Aspirante_extraInitializers = [];
    let _Fecha_decorators;
    let _Fecha_initializers = [];
    let _Fecha_extraInitializers = [];
    let _Hora_decorators;
    let _Hora_initializers = [];
    let _Hora_extraInitializers = [];
    let _Valor_cancelado_decorators;
    let _Valor_cancelado_initializers = [];
    let _Valor_cancelado_extraInitializers = [];
    var Nota = _classThis = class {
        constructor() {
            this.ID = __runInitializers(this, _ID_initializers, void 0);
            this.ID_Curso = (__runInitializers(this, _ID_extraInitializers), __runInitializers(this, _ID_Curso_initializers, void 0));
            this.ID_Aspirante = (__runInitializers(this, _ID_Curso_extraInitializers), __runInitializers(this, _ID_Aspirante_initializers, void 0));
            this.Fecha = (__runInitializers(this, _ID_Aspirante_extraInitializers), __runInitializers(this, _Fecha_initializers, void 0));
            this.Hora = (__runInitializers(this, _Fecha_extraInitializers), __runInitializers(this, _Hora_initializers, void 0));
            this.Valor_cancelado = (__runInitializers(this, _Hora_extraInitializers), __runInitializers(this, _Valor_cancelado_initializers, void 0));
            __runInitializers(this, _Valor_cancelado_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Nota");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _ID_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _ID_Curso_decorators = [(0, typeorm_1.Column)()];
        _ID_Aspirante_decorators = [(0, typeorm_1.Column)()];
        _Fecha_decorators = [(0, typeorm_1.Column)()];
        _Hora_decorators = [(0, typeorm_1.Column)()];
        _Valor_cancelado_decorators = [(0, typeorm_1.Column)()];
        __esDecorate(null, null, _ID_decorators, { kind: "field", name: "ID", static: false, private: false, access: { has: obj => "ID" in obj, get: obj => obj.ID, set: (obj, value) => { obj.ID = value; } }, metadata: _metadata }, _ID_initializers, _ID_extraInitializers);
        __esDecorate(null, null, _ID_Curso_decorators, { kind: "field", name: "ID_Curso", static: false, private: false, access: { has: obj => "ID_Curso" in obj, get: obj => obj.ID_Curso, set: (obj, value) => { obj.ID_Curso = value; } }, metadata: _metadata }, _ID_Curso_initializers, _ID_Curso_extraInitializers);
        __esDecorate(null, null, _ID_Aspirante_decorators, { kind: "field", name: "ID_Aspirante", static: false, private: false, access: { has: obj => "ID_Aspirante" in obj, get: obj => obj.ID_Aspirante, set: (obj, value) => { obj.ID_Aspirante = value; } }, metadata: _metadata }, _ID_Aspirante_initializers, _ID_Aspirante_extraInitializers);
        __esDecorate(null, null, _Fecha_decorators, { kind: "field", name: "Fecha", static: false, private: false, access: { has: obj => "Fecha" in obj, get: obj => obj.Fecha, set: (obj, value) => { obj.Fecha = value; } }, metadata: _metadata }, _Fecha_initializers, _Fecha_extraInitializers);
        __esDecorate(null, null, _Hora_decorators, { kind: "field", name: "Hora", static: false, private: false, access: { has: obj => "Hora" in obj, get: obj => obj.Hora, set: (obj, value) => { obj.Hora = value; } }, metadata: _metadata }, _Hora_initializers, _Hora_extraInitializers);
        __esDecorate(null, null, _Valor_cancelado_decorators, { kind: "field", name: "Valor_cancelado", static: false, private: false, access: { has: obj => "Valor_cancelado" in obj, get: obj => obj.Valor_cancelado, set: (obj, value) => { obj.Valor_cancelado = value; } }, metadata: _metadata }, _Valor_cancelado_initializers, _Valor_cancelado_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Nota = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Nota = _classThis;
})();
exports.Nota = Nota;
