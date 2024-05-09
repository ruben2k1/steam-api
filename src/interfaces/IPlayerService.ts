interface IPlayerService {
    getRecentlyPlayedGames(STEAM_ID: number, COUNT: number): Promise<any>;
    getSingleGamePlaytime(STEAM_ID: number, APP_ID: number): Promise<any>;
    getOwnedGames(STEAM_ID: number, INCLUDE_APPINFO: boolean, INCLUDE_PLAYED_FREE_GAMES: boolean, APPIDS_FILTER: number): Promise<any>;
    getSteamLevel(STEAM_ID: number): Promise<any>;
    getBadges(STEAM_ID: number): Promise<any>;
    getCommunityBadgeProgress(STEAM_ID: number, BADGE_ID: number): Promise<any>;
}