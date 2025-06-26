const db = require('../db');

const getAllPosts = () => {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM posts', [], (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};

const createPost = (title, content) => {
  return new Promise((resolve, reject) => {
    db.run('INSERT INTO posts (title, content) VALUES (?, ?)', [title, content], function(err) {
      if (err) reject(err);
      else resolve({ id: this.lastID, title, content });
    });
  });
};

const updatePost = (id, title, content) => {
  return new Promise((resolve, reject) => {
    db.run(
      'UPDATE posts SET title = ?, content = ? WHERE id = ?',
      [title, content, id],
      function(err) {
        if (err) reject(err);
        else if (this.changes === 0) resolve(null);
        else resolve({ updated: this.changes, id, title, content });
      }
    );
  });
};

const deletePost = (id) => {
  return new Promise((resolve, reject) => {
    db.run('DELETE FROM posts WHERE id = ?', id, function(err) {
      if (err) reject(err);
      else resolve({ deleted: this.changes });
    });
  });
};

module.exports = {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
};
