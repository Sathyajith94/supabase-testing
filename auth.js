import { supabase } from './supabase.js';

// signup using email
// const { data, error, status } = await supabase.auth.signUp({
//     email: "sathyajith.sfhl@gmail.com",
//     password: "Sidharth001"
// });

// signup using phone
// const { data, error } = await supabase.auth.signUp({
//     phone: '9790787189',
//     password: 'Sidharth001',
//     options: {
//         channel: 'sms'
//     }
// });

// signup with additional user meta data
// const { data, error } = await supabase.auth.signUp(
//     {
//         email: "sathyajith.sfhl@gmail.com",
//         password: "Sidharth001",
//         options: {
//             data: {
//                 first_name: 'Sathya',
//                 age: 31,
//             }
//         }
//     }
// );

// Signup with redirect url
// const { data, error } = await supabase.auth.signUp(
//     {
//         email: "sathyajith.sfhl@gmail.com",
//         password: "Sidharth001",
//         options: {
//             emailRedirectTo: 'https://sidharth-housing.web.app/'
//         }
//     }
// );

// create an anonymously user
// const { data, error } = await supabase.auth.signInAnonymously({
//     options: {
//         captchaToken: "eNv6Yu"
//     }
// });

// create an anonymously user with custom user metadata
// const { data, error } = await supabase.auth.signInAnonymously({
//     options: {
//         data: {
//             name: "sathya"
//         }
//     }
// });

// SIgnin with passward
// const { data, error } = await supabase.auth.signInWithPassword({
//     email: "sathyajith.sfhl@gmail.com",
//     password: "Sidharth001"
// });

// SIgnin with passward
const { data, error } = await supabase.auth.signInWithPassword({
    phone: '9790787189',
    password: 'Sidharth001',
})

if (error) console.error("Error:", error);
console.log('data: ', data);
