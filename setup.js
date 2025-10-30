import { supabase } from './supabase.js';


async function setupDatabase() {
    console.log("🧱 Creating table...");

    // Run SQL directly on the database
    const { data: rpcData, error: rpcError } = await supabase.rpc('exec_sql', {
        sql: `
      CREATE TABLE IF NOT EXISTS countries (
        id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        name TEXT NOT NULL
      );
    `,
    });

    if (rpcError) {
        console.error("❌ Error creating table:", rpcError.message);
        return;
    }
    console.log("✅ Table created or already exists");

    console.log("📥 Inserting sample data...");
    const { data: insertData, error: insertError } = await supabase
        .from("countries")
        .insert([{ name: "Mordor" }, { name: "Gondor" }])
        .select();

    if (insertError) {
        console.error("❌ Insert error:", insertError.message);
        return;
    }

    console.log("✅ Inserted rows:", insertData);

    console.log("📊 Fetching data...");
    const { data: countries, error: selectError } = await supabase
        .from("countries")
        .select("*");

    if (selectError) {
        console.error("❌ Select error:", selectError.message);
        return;
    }

    console.table(countries);
    console.log("🎉 Setup complete!");
}

// setupDatabase();
