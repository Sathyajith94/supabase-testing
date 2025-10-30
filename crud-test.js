import { supabase } from './supabase.js';


// Insert a row
// const { data: insertData, error: insertError } = await supabase
//     .from('countries')
// .insert({ name: "Mordor" })
//     .insert({ name: "sathya" })
//     .select();
// console.log("\n");
// if (insertError) console.error("Insert error:", insertError);
// else console.log("Inserted:", insertData);

// Read all rows
// const { data: countries, error: selectError, status } = await supabase
//     .from('countries')
//     .select("*");
// if (selectError) console.error("Select error:", selectError);
// else console.table(countries);
// console.log('status: ', status);


// Read all rows with count
// const { data: countries, error: selectError, status, count } = await supabase
//     .from('countries')
//     .select("*", { count: 'exact' });
//     // .select("*", { count: 'planned' });
//     // .select("*", { count: 'estimated' });
// if (selectError) console.error("Select error:", selectError);
// else console.table(countries);
// console.log('status: ', status);
// console.log('count: ', count);


// BULK CREATE
// const { error } = await supabase
//     .from('countries')
//     .insert([
//         { name: 'Mordor' },
//         { name: 'The Shire' },
//     ]);


// BULK CREATE AND RETURN IT
// const { data, error } = await supabase
//     .from('countries')
//     .insert([
//         { name: 'Mordor' },
//         { name: 'The Shire' },
//     ])
//     .select();

// if (error) console.error("Select error:", error);
// console.log('data: ', data);


// UPDATE THE DATA
// const { error } = await supabase.from('instruments').update({ "name": "piano" }).eq('id', 1);
// if (error) console.error("Select error:", error);

// UPDATE AND RETURN THE DATA
// const { data, error } = await supabase.from('instruments').update({ "name": "piano" }).eq('id', 1).select();
// if (error) console.error("Select error:", error);

// UPDATE AND RETURN THE JSON DATA
// const userData = await supabase.from('users').eq('address->postcode', 90210).select();
// console.log(userData.data);
// const { data, error } = await supabase
//     .from('users')
//     .update({
//         address: {
//             "street": "Adam",
//             postcode: 90210
//         }
//     })
//     .eq('address->postcode', 90210)
//     .select();
// if (error) console.error("Select error:", error);
// console.log('data: ', data);


// UPSERT THE DATA
// const { data, error } = await supabase.from("instruments").upsert({ id: 1, name: "Piano" }).select();

// UPSERT BULK DATA
// const { data, error } = await supabase.from("instruments").upsert([{ id: 1, name: "piano" }, { id: 2, name: "harp" }]).select();

// DELETE
// DELETE THE SINGLE ROW
// const { data, error } = await supabase.from("countries").delete().eq('id', 1);

// DELETE THE SINGLE ROW WITH RETURN
// const { data, error } = await supabase.from("countries").delete().eq('id', 3).select(); //returns deleted data

// DELETE THE MULTIPLE ROW WITH RETURN
// const { data, error } = await supabase.from("countries").delete().in('id', [4]); //returns deleted data
// const { data, error } = await supabase.from("countries").delete().in('id', [4, 5]).select(); //returns deleted data
// const { data, error } = await supabase.from("countries").delete().in('id', [4, 5, 6]).select(); //returns deleted data


// Call a Postgres Function
// const { data, error, status } = await supabase.rpc('hello_world');


// Read all rows RLS CHECKING
// const { data, error, status } = await supabase.from('countries').select("*");
// const { data, error, status } = await supabase.from('countries').insert({ name: "sathya" });


// const { data, error, status } = await supabase.from('characters').select();
// const { data, error, status } = await supabase.from('characters').select("*");
// const { data, error, status } = await supabase.from('characters').select('name');

const { data, error } = await supabase
    .from('orchestal_sections')
    .select(`
    name,
    instruments (
      name
    )
  `);
if (error) console.error("Error:", error);
console.log("status: ", status, 'data: ', data);
