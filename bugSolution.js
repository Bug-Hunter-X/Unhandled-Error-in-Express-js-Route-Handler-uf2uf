const express = require('express');
const app = express();
const users = [{
  id: 1, name: 'John Doe'
}, {
  id: 2, name: 'Jane Doe'
}];
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  if (isNaN(userId) || userId < 1 || userId > users.length) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  const user = users.find(user => user.id === userId);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});
const port = 3000; app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});