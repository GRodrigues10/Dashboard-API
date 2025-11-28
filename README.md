# Dashboard API

API REST para gerenciamento de usuários de um **Dashboard moderno**. Permite listar, adicionar e consultar usuários com informações básicas: nome, e-mail e data de criação.



---

## Endpoints

| Método | Endpoint   | Descrição                  |
|--------|------------|----------------------------|
| GET    | /users     | Listar todos os usuários   |
| POST   | /users     | Criar um novo usuário      |
| GET    | /users/:id | Consultar usuário por ID   |

---

## Exemplos de Requisição

**Listar todos os usuários**
```bash
curl -X GET http://localhost:5000/users
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

**Criar um novo usuário**
```bash
curl -X POST http://localhost:5000/users \
-H "Content-Type: application/json" \
-d '{"name": "Antônio Rodrigues", "email": "antoniorodrigues@gmail.com"}'
```
Resposta:
```json
{
  "_id": "6928019a6b8bdabac2c89938",
  "name": "Antônio Rodrigues",
  "email": "antoniorodrigues@gmail.com",
  "createdAt": "2025-11-27T07:45:30.041Z"
}
```

**Consultar usuário por ID**
```bash
curl -X GET http://localhost:5000/users/691b19455af0f3b33115490b
```
Resposta:
```json
{
  "_id": "691b19455af0f3b33115490b",
  "name": "Gabriel Rodrigues",
  "email": "gabriel@gmail.com",
  "createdAt": "2025-11-17T12:47:01.888Z"
}
```

---

## Rodando a API

```bash
git clone https://github.com/seu-usuario/dashboard-api.git
cd dashboard-api
npm install
npm run dev
```

