CREATE TABLE subscribers_audit (
  subscriber_audit_id INT AUTO_INCREMENT PRIMARY KEY,
  subscriber_id INT DEFAULT NULL,
  from_database VARCHAR(255) NOT NUll,
  action VARCHAR(255) NOT NULL,
  subscriber_before json DEFAULT NULL,
  subscriber_after json DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)
