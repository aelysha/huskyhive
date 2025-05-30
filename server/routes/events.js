import express from "express";
import supabase from "../supabaseClient.js";

const router = express.Router();

router.get('/:title', async (req, res) => {  
  const { title } = req.params;

  const { data, error } = await supabase.from('Events').select('*, RSOProfile(*)').eq('title', title).single();

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

export default router;