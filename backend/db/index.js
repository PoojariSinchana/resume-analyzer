const mysql = require('mysql2/promise');
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

async function initDB() {
  try {
    const connection = await pool.getConnection();
    console.log("✅ Database connected successfully");
    connection.release();

    // Create table if not exists
    await pool.query(`
      CREATE TABLE IF NOT EXISTS resumes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        file_name VARCHAR(255) NOT NULL,
        uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        name VARCHAR(255),
        email VARCHAR(255),
        phone VARCHAR(50),
        linkedin_url VARCHAR(255),
        portfolio_url VARCHAR(255),
        summary TEXT,
        work_experience JSON,
        education JSON,
        technical_skills JSON,
        soft_skills JSON,
        projects JSON,
        certifications JSON,
        resume_rating INT,
        improvement_areas TEXT,
        upskill_suggestions JSON
      )
    `);
    console.log("✅ resumes table ready");
  } catch (err) {
    console.error("❌ Error initializing database:", err);
  }
}

module.exports = { pool, initDB };
