type OriginalResponse = {
    status: boolean;
    response: Array<{ [key: string]: string }>;
};

type FormattedData = {
    labels: string[];
    datasets: {
        label: string;
        data: string[] | string;
        backgroundColor: string;
    }[];
};

function extractFirstKeyValues(data: any): any[] {
    const response = data.response;
    const firstKeyValues = [];

    for (const item of response) {
        const keys = Object.keys(item);
        if (keys.length > 0) {
            const firstKey = keys[0];
            firstKeyValues.push(item[firstKey]);
        }
    }

    return firstKeyValues;
}

function extractSecondKeyValues(data: any[]): any[] {
    const secondKeyValues = data.map((item) => item[Object.keys(item)[1]]);
    return secondKeyValues;
}

export function convertResponseToFormattedData(
    response: OriginalResponse
): FormattedData {
    if (
        response.status &&
        Array.isArray(response.response) &&
        response.response.length > 0
    ) {
        const keys = extractFirstKeyValues(response);

        console.log(response.response);
        // const datasets = response.response.map((item, index) => ({
        //     label: `Dataset ${index + 1}`,
        //     data: extractSecondKeyValues(response.response),
        //     backgroundColor: "rgba(255, 99, 132, 0.5)", // You can set the desired color here
        // }));

        const datasets = [
            {
                label: "Dataset 1",
                data: extractSecondKeyValues(response.response),
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ];

        console.log({
            labels: keys,
            datasets,
        });
        return {
            labels: keys,
            datasets,
        };
    } else {
        // Handle the case where the response is empty or not as expected
        return {
            labels: [],
            datasets: [],
        };
    }
}

// Example usage:
// const jsonResponse: OriginalResponse = {
//     status: true,
//     response: [
//         {
//             Key1: "val1",
//             Key2: "val2",
//         },
//         {
//             Key1: "val3",
//             Key2: "val4",
//         },
//     ],
// };

// const formattedData: FormattedData =
//     convertResponseToFormattedData(jsonResponse);
// console.log(formattedData);
