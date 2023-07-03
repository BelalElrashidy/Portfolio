import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import { Data } from "./Data";

async function fetchData(): Promise<Data> {
    const email: string = "b.abdelaal@innopolis.university";
    const params: URLSearchParams = new URLSearchParams({ email });

    // Fetch the ID
    const response: Response = await fetch(
        `https://fwd.innopolis.university/api/hw2?${params}`
    );
    const id: number = await response.json();

    // Fetch the data
    const dataResponse: Response = await fetch(
        `https://fwd.innopolis.university/api/comic?id=${id}`
    );
    const data: Data = await dataResponse.json();
    return data;
}

(async () => {
    const data: Data = await fetchData();

    // Create the event date
    const date = dayjs()
        .set("year", data.year)
        .set("month", data.month - 1)
        .set("date", data.day);

    // Create the image element
    const image: HTMLImageElement = document.createElement("img");
    image.src = data.img;
    image.alt = data.alt;

    // Create the title element
    const title: HTMLHeadingElement = document.createElement("h2");
    title.textContent = data.safe_title;

    // Create the paragraph element
    const para: HTMLParagraphElement = document.createElement("p");
    para.textContent = date.fromNow();

    // Get the section element and append the elements to it
    const sect: HTMLElement | null = document.getElementById("data");
    if (sect) {
        sect.append(title, para, image);
    }
})();
