const UserResponseCodes = Object.freeze({
    SUCCESS:0,
    USER_NOT_FOUND:1,
    USER_BLOCKED:2, 
    INVALID_PASSWORD:3, 
    USER_EXIST: 4,
    INVALID_INPUT : 5
});

const UserResponseMessages = Object.freeze({
    SUCCESS:"Transaccion correcta",
    USER_NOT_FOUND:"Usuario no existe",
    USER_BLOCKED:"Usuario bloqueado", 
    INVALID_PASSWORD:"Contrasena incorrecta", 
    USER_EXIST:"Usuario ya existe",
    USER_DELETED: "Usuario eliminado", 
    USER_UPDATED: "Usuario modificado",
    INVALID_INPUT: "Valores de entrada requeridos"
});


module.exports = {
    UserResponseCodes, 
    UserResponseMessages
}

