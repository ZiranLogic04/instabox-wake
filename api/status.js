module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const apiKey = process.env.INSTABOX_API_KEY || 'ibk_vjx7zthmx4h5qayr4hcfxn32odglcx4wq7rldjvpouzbvyagenia';
  const machineId = req.query.machineId || process.env.INSTABOX_MACHINE_ID || 'm_agqyd4deuond7jxqvatyzflu5a';

  try {
    const response = await fetch(`https://api.instabox.sh/v1/machines/${machineId}`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    if (!response.ok) {
      return res.status(response.status).json({ error: data });
    }

    return res.status(200).json({
      id: data.id,
      name: data.name,
      state: data.state,
      desiredState: data.desiredState,
      spec: data.spec,
      autoSuspendedAt: data.autoSuspendedAt,
      updatedAt: data.updatedAt
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
