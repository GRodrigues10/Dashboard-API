# Dashboard API

API REST para gerenciamento de usuários de um **Dashboard moderno**.

Base URL: `https://dashboard-api-674f.onrender.com/api`

---

## Endpoints Disponíveis

| Método | Endpoint           | Descrição                  |
|--------|------------------|----------------------------|
| POST   | /register        | Criar um novo usuário      |
| POST   | /login           | Login de usuário           |
| GET    | /users           | Listar todos os usuários   |
| POST   | /forgotpassword  | Trocar senha               |

---

## Exemplos de Requisição

**Criar um novo usuário**
```bash
curl -X POST https://dashboard-api-674f.onrender.com/api/register \
-H "Content-Type: application/json" \
-d '{"name": "Gabriel Rodrigues", "email": "gabriel@gmail.com", "password": "123456"}'
```

**Login de usuário**
```bash
curl -X POST https://dashboard-api-674f.onrender.com/api/login \
-H "Content-Type: application/json" \
-d '{"email": "gabriel@gmail.com", "password": "123456"}'
```

**Listar todos os usuários**
```bash
curl -X GET https://dashboard-api-674f.onrender.com/api/users
```
Resposta:
```json
[
  {
    "_id": "691b19455af0f3b33115490b",
    "name": "Gabriel Rodrigues",
    "email": "gabriel@gmail.com",
    "createdAt": "2025-11-17T12:47:01.888Z"
  },
  {
    "_id": "691b1a175af0f3b331154911",
    "name": "João Jorge",
    "email": "joao@gmail.com",
    "createdAt": "2025-11-17T12:50:31.645Z"
  }
]
```

**Trocar senha (Esqueci minha senha)**
```bash
curl -X POST https://dashboard-api-674f.onrender.com/api/forgotpassword \
-H "Content-Type: application/json" \
-d '{"email": "gabriel@gmail.com", "newPassword": "novaSenha123"}'
```
Resposta:
```json
{
  "message": "Senha atualizada com sucesso!"
}
```
