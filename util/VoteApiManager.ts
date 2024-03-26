import { URL_BASE } from "./URL_BASE";

const VOTE_URL_BASE = `${URL_BASE}/spike/votes`;

export interface Voter {
  userDeviceId: string;
  gameId: string;
  vote: number;
}

export const voteOnGame = async (voter: Voter) => {
  try {
    const response = await fetch(`${VOTE_URL_BASE}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(voter),
    });

    if (!response.ok) {
      throw new Error(`(voteOnGame): ${response.status}`);
    }
  } catch (error) {
    console.error(`PUT not working (voteOnGame): ${error}`);
  }
};
