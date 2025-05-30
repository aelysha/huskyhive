import express from "express";
import supabase from "../supabaseClient.js";

const router = express.Router();

router.get('/:rso_name', async (req, res) => {  
  const { rso_name } = req.params;

  const { data, error } = await supabase.from('RSOProfile').select('*, Announcements(*), Events(*)').ilike('rso_name', rso_name);

  if (error) return res.status(500).json({ error: error.message });
  if (!data || data.length === 0) return res.status(404).json({ error: 'RSO not found' });

    res.json({ rso: data[0] });
});

export default router;