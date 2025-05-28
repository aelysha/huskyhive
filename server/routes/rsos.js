import express from "express";
import supabase from "../supabaseClient.js";

const router = express.Router();

router.get('/:rso_name', async (req, res) => {  
  const { rso_name } = req.params;

  const { data, error } = await supabase.from('RSOProfile').select('*, Announcements(*), Events(*)').eq('rso_name', rso_name);

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

export default router;