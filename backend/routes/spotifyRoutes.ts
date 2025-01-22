import { Router } from "express";
import * as spotifyController from "../controllers/spotifyController";

export const spotifyRoutes = Router();

spotifyRoutes.post("/get_playlists", spotifyController.getUserPlaylists);
spotifyRoutes.post("/generate_playlist", spotifyController.generatePlaylist);
spotifyRoutes.post("/create_playlist", spotifyController.createPlaylist);
spotifyRoutes.get("/login", spotifyController.loginWithSpotify); // Redirects to Spotify Auth
spotifyRoutes.get("/callback", spotifyController.handleSpotifyCallback); // Handles Spotify callback
spotifyRoutes.post("/refresh-token", spotifyController.refreshSpotifyToken); // Refreshes expired tokens
