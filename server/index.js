require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

app.get('/', (req, res) => {
  res.send('Hello form Render Backend!');
});

app.get('/api/hello', async (req, res) => {
  try {
    // Example: Fetch data from a table named 'test' (optional)
    // const { data, error } = await supabase.from('test').select('*');
    
    // For now, just return a simple message with Supabase connection status
    const { data, error } = await supabase.from('test').select('*').limit(1); // Try to select to check connection
    
    if (error && error.code !== 'PGRST116') { // Ignore if table doesn't exist for now, just checking auth
       console.log("Supabase error (expected if table missing):", error.message);
    }
    
    res.json({ message: 'Hello World from Backend!', supabaseConnected: !!supabaseUrl });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
