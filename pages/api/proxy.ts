import axios, { AxiosResponse } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        if (req.method == "POST") {
            const { type, src, query } = req.body;

            const response: AxiosResponse = await axios.get(
                `https://ddfd-103-97-166-170.ngrok-free.app/?type=${type}&src=${src}&query=${query}`,
                {
                    headers: {
                        "ngrok-skip-browser-warning": "true",
                    },
                }
            );

            const data = response.data;
            res.status(200).json(data);
        } else {
            res.status(405).json({ error: "Method Not Allowed" });
        }
    } catch (error) {
        console.error("Error proxying request:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
