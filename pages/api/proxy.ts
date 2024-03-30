import axios, { AxiosResponse } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        if (req.method == "POST") {
            const { type, src, query } = JSON.parse(req.body);

            axios
                .get(
                    `https://a3ca-103-97-166-170.ngrok-free.app/?type=${type}&src=${src}&query=${query}`,
                    // `https://a3ca-103-97-166-170.ngrok-free.app/?type=llm&src=en&query=hello`,
                    {
                        headers: {
                            "ngrok-skip-browser-warning": "true",
                        },
                    }
                )
                .then((response: AxiosResponse) => {
                    res.status(response.status).json(response.data);
                });
        } else {
            res.status(405).json({ error: "Method Not Allowed" });
        }
    } catch (error) {
        console.error("Error proxying request:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
