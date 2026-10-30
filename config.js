// Kuchengericht – Verbindung zu deiner Supabase-Datenbank
// Nur SUPABASE_ANON_KEY fehlt noch: Supabase → Project Settings → API Keys
// → Reiter "Legacy anon, service_role API keys" → "anon public" kopieren.
// Solange der Key leer ist, läuft die App im Demo-Modus (PIN dort: 1234).

window.KG_CONFIG = {
  SUPABASE_URL: "https://vguyjiqpqdfrkbxrhgmm.supabase.co",
  SUPABASE_ANON_KEY: "",
  VAPID_PUBLIC_KEY: "BN1_nUdiBHQGLRHaReRlvAc6CZhu-frtibsy6pLJdK2fXGrlxO6ET8dxAku1EHGUG5QV97pHpmeSC5BzdgdO91k"
};
