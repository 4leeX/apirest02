import User from '../models/User';

class TokenController {
  async index(req, res) {
    res.json('Ok');
  }
}

export default new TokenController();
