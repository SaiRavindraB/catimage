let url = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");

let img = document.querySelector("img");

btn.addEventListener("click",async ()=>
{
  let imgsrc =  await getsrc();
  img.setAttribute("src",imgsrc);
})

async function getsrc()
{
  let src = await axios.get(url);
  return (src.data.message);
}