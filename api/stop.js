const crypto = require('crypto');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Idempotency-Key');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.INSTABOX_API_KEY || 'ibk_vjx7zthmx4h5qayr4hcfxn32odglcx4wq7rldjvpouzbvyagenia';
  const machineId = (req.body && req.body.machineId) || process.env.INSTABOX_MACHINE_ID || 'm_agqyd4deuond7jxqvatyzflu5a';
  const idempotencyKey = crypto.randomUUID();

  try {
    const response = await fetch(`https://api.instabox.sh/v1/machines/${machineId}/stop`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': idempotencyKey
      }
    });

    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
