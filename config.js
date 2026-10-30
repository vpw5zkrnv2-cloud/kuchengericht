// Kuchengericht – Verbindung zu deiner Supabase-Datenbank
// Nur SUPABASE_ANON_KEY fehlt noch: Supabase → Project Settings → API Keys
// → Reiter "Legacy anon, service_role API keys" → "anon public" kopieren.
// Solange der Key leer ist, läuft die App im Demo-Modus (PIN dort: 1234).

window.KG_CONFIG = {
  SUPABASE_URL: "https://vguyjiqpqdfrkbxrhgmm.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZndXlqaXFwcWRmcmtieHJoZ21tIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc5MzM2MTE4NSwiZXhwIjoyMTA4OTM3MTg1fQ.PnLQkKCsEaoYF84XiWIfonjkywgH22D1DbHExyRYNMo",
  VAPID_PUBLIC_KEY: "BN1_nUdiBHQGLRHaReRlvAc6CZhu-frtibsy6pLJdK2fXGrlxO6ET8dxAku1EHGUG5QV97pHpmeSC5BzdgdO91k"
};
