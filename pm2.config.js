module.exports = {
  apps: [
    {
      name: 'API_HOUSEPREDICTION',
      script: 'uvicorn app.main:app --host 0.0.0.0 --port $PORT',
      autorestart: true,
      watch: false,
      exec_mode: 'fork',
      exp_backoff_restart_delay: 100,
      max_memory_restart: '300M',
    },
  ],
};
