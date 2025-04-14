import express from "express";

import { OAuth2Client } from "google-auth-library";

// docs: https://cloud.google.com/nodejs/docs/reference/google-auth-library/latest
const router = express.Router();
// to-do: put client-ID in env
const client = new OAuth2Client("854157406658-r39p4ihqe52uju7fu8bo2at3lu8j552m.apps.googleusercontent.com");

// tbd: might include GET to all users

// GET user by ID
// tbd: make async? also try/catch based on auth?
router.get('/:id', function(req, res, next) {
  res.send(`${req.params.id}`);
});

// PUT user (for database in future)
router.post('/google-login', async (req, res) => {
  try { 
    // id token https://developers.google.com/identity/gsi/web/guides/verify-google-id-token
    const token = req.body.credential;

    // verifyIdToken() function 
    // https://developers.google.com/identity/gsi/web/guides/verify-google-id-token#node.js
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: "854157406658-r39p4ihqe52uju7fu8bo2at3lu8j552m.apps.googleusercontent.com",
    });

    const payload = ticket.getPayload();
    const userId = payload['sub'];

    // verify().catch(console.error);

    return res.json({ 
        name: payload.name, 
        email: payload.email,
        userId: userId 
    });
  } catch (error) {
    res.status(400).json({ 
        error: 'Token Issue' 

    });
  }
});

export default router;
