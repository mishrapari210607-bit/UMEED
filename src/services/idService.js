export function createEmergencyId(payload) {
  return { id: crypto.randomUUID(), ...payload };
}
