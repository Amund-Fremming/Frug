const VOTE_URL_BASE = "http://localhost:5088/spike/votes";

export interface Voter {
  userDeviceId: string;
  gameId: string;
  vote: boolean;
}

export const voteOnGame = async (voter: Voter) => {
  try {
    const response = await fetch(`${VOTE_URL_BASE}/vote`, {
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
