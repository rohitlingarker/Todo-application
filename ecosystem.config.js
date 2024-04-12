  module.exports = {
      apps: [
        {
          name: 'Todo app',
          script: 'index.js',
          instances: 1,
          exec_mode: 'cluster',
          autorestart: false,
          watch: false,
          max_memory_restart: '1G',
          log_date_format: 'YYYY-MM-DD HH:mm:ss',
          error_file: 'pm2logs/error.log', 
          out_file: 'pm2logs/out.log', 
          env_development: {
              NODE_ENV: 'development',
              
          },
          env: {
            NODE_ENV: 'production',
          },
        }
      ]
    };
    