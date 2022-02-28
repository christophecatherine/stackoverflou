const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};

module.exports.register = (req, res) => {
  const { nickName, email, password } = req.body;

  bcrypt.hash(password, 10).then((hash) => {
    const user = new User({
      nickName,
      email,
      password: hash,
    });

    user
      .save()
      .then(() => res.status(200).json({ message: 'Utilisateur créer !' }))
      .catch((err) => res.status(500).json({ error: err.message }));
  });
};

module.exports.login = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (!user)
        return res.status(404).json({ message: 'Utilisateur non trouvé !' });

      bcrypt
        .compare(password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe Incorrect !' });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign({ userId: user._id }, process.env.TOKEN_SECRET, {
              expiresIn: maxAge,
            }),
          });
        })
        .catch((err) => res.status(403).json({ error: err.message }));
    })
    .catch((err) => res.status(500).json({ error: err.message }));
};

module.exports.updateOne = (req, res) => {
  const id = req.params.userId;

  const user = req.body;

  User.updateOne({ _id: id }, { ...user, _id: id })
    .then(() => res.status(200).json({ message: 'Utilisateur Modifié' }))
    .catch((err) => res.status(500).json({ message: err.message }));
};
