var context = require.context('./app/assets/frontend/__tests__', true, /.jsx$/); // Load files in /test with filename matching * .test.js
context.keys().forEach(context);
