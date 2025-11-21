import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res.status(400).json({ error: "Preencha todos os campos!" });

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ error: "Email já cadastrado!" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ error: "Erro no servidor" });
  }
};


export const listUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    return res.json(users);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar usuários" });
  }
};


export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ error: "Preencha email e senha!" });

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ error: "Usuário não encontrado!" });

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch)
      return res.status(400).json({ error: "Senha incorreta!" });

    return res.json({ 
      message: "Login realizado com sucesso!",
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    return res.status(500).json({ error: "Erro no servidor" });
  }
};


export const forgotPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    if (!email || !newPassword)
      return res.status(400).json({ error: "Preencha todos os campos!" });

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ error: "Usuário não encontrado" });

    const hashed = await bcrypt.hash(newPassword, 10);
    user.password = hashed;
    await user.save();

    return res.json({ message: "Senha atualizada com sucesso!" });

  } catch (error) {
    return res.status(500).json({ error: "Erro no servidor" });
  }
};

