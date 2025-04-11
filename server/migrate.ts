import { supabase } from './supabase';
import * as fs from 'fs';
import * as path from 'path';

async function migrate() {
  console.log('Running database migrations...');
  
  try {
    // Read the SQL file
    const sql = fs.readFileSync(path.join(process.cwd(), 'schema.sql'), 'utf-8');
    
    // Execute the SQL statements
    const { error } = await supabase.rpc('exec_sql', { sql });
    
    if (error) {
      console.error('Error executing SQL:', error);
      
      // Alternative approach: running as a single query
      console.log('Trying alternative approach...');
      const { error: altError } = await supabase.from('postgres_function_executor').rpc('execute_sql', { sql });
      
      if (altError) {
        console.error('Alternative approach failed:', altError);
        
        // Last resort: split the SQL into separate statements
        console.log('Trying to execute statements separately...');
        const statements = sql.split(';').filter(s => s.trim().length > 0);
        
        for (const statement of statements) {
          const { error: stmtError } = await supabase.rpc('exec_sql', { sql: statement + ';' });
          if (stmtError) {
            console.error(`Error executing statement: ${statement}\nError:`, stmtError);
          } else {
            console.log(`Successfully executed: ${statement.substring(0, 50)}...`);
          }
        }
      } else {
        console.log('Migration successful using alternative approach!');
      }
    } else {
      console.log('Migration successful!');
    }
  } catch (error) {
    console.error('Migration failed:', error);
  }
}

// Run the migration
migrate().catch(console.error);