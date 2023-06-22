
async function fetching(){
    const email = "b.abdelaal@innopolis.university";
    const params = new URLSearchParams({ email: email });
    let response = await fetch(`https://fwd.innopolis.university/api/hw2?${params.toString()}`);
    const Id = await response.json();
    const promise = await fetch(`https://fwd.innopolis.university/api/comic?id=${Id}`);
    const data =  promise.json();
    return data;
}
(async() => {
    console.log(await fetching());
    const data = await fetching();
    const event = new Date(data.day, data.month-1,data.year);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const image = document.createElement("img");
    image.src = data.img;
    image.alt = data.alt;
    const title = document.createElement("h2");
    title.textContent = data.safe_title;
    const para = document.createElement("p");
    para.textContent = event.toLocaleDateString(undefined, options);
    const sect = document.getElementById("data");
    sect.appendChild(title);
    sect.appendChild(para);
    sect.appendChild(image);
})()


